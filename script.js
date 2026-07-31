document.addEventListener('contextmenu',(e)=>{e.preventDefault();});
if(location.pathname.endsWith('/')&&location.pathname!=='/')history.replaceState(null,'',location.pathname.slice(0,-1)+location.search+location.hash);

const timer=document.getElementById('timer');
const dateEl=document.getElementById('date');
const pad=(n,w)=>String(n).padStart(w,'0');
let _lastTime='',_lastDate='';
function _tick(){
	const d=new Date();
	const t=pad(d.getHours(),2)+':'+pad(d.getMinutes(),2)+':'+pad(d.getSeconds(),2)+':'+pad(Math.floor(d.getMilliseconds()/10),2);
	if(t!==_lastTime){timer.textContent=t;_lastTime=t;}
	const day=d.getFullYear()+'-'+pad(d.getMonth()+1,2)+'-'+pad(d.getDate(),2);
	if(day!==_lastDate){dateEl.textContent=day;_lastDate=day;}
	requestAnimationFrame(_tick);
}
requestAnimationFrame(_tick);

// Runs as soon as the deferred script executes rather than on window.load.
// The logo is the entire page; waiting for load meant not even starting its
// fetch until the Google Fonts stylesheet and font files had finished.
(()=>{
	// localStorage can throw outright (Safari Lockdown Mode, blocked storage).
	// Nothing below may depend on it: a throw here would leave body at opacity 0.
	let last=0;
	try{last=parseInt(localStorage.getItem('lastLogo'),10)||0;}catch{}
	const choices=[1,2,3].filter(n=>n!==last);
	const n=choices[Math.floor(Math.random()*choices.length)];
	try{localStorage.setItem('lastLogo',n);}catch{}
	let faded=false;
	const startFade=()=>{
		if(faded)return;
		faded=true;
		// The stylesheet reveals body on a delay as a failsafe for this script
		// never running. If that already fired, replaying the fade would flash
		// the page back to transparent first.
		if(parseFloat(getComputedStyle(document.body).opacity)<1){
			document.body.classList.add('fade-in');
		}
		document.body.addEventListener('animationend',()=>{document.body.style.opacity='1';},{once:true});
		setTimeout(()=>{document.body.style.opacity='1';},1500);
		// Once the fade is done, pull in the two logos this visit didn't draw:
		// the next load is guaranteed to be one of them, and they're the only
		// other asset the page has.
		setTimeout(()=>{
			const conn=navigator.connection;
			if(conn&&(conn.saveData||/(^|-)2g$/.test(conn.effectiveType||'')))return;
			[1,2,3].filter(x=>x!==n).forEach(x=>{new Image().src='logo'+x+'.svg?v=2';});
		},1500);
	};
	const loadLogo=()=>{
		const l=document.getElementById('logo');
		l.onload=()=>{l.style.display='block';startFade();};
		l.onerror=()=>{startFade();};
		l.src='logo'+n+'.svg?v=2';
		if(l.complete&&l.naturalWidth){l.style.display='block';startFade();}
	};
	if(document.hidden){
		document.addEventListener('visibilitychange',function h(){
			if(!document.hidden){document.removeEventListener('visibilitychange',h);loadLogo();}
		});
	}else{
		loadLogo();
	}
})();
