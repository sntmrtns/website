var timer = document.getElementById('timer');

function addZero(x, n) {
	while (x.toString().length < n) x = "0" + x;
	return x;
}

function time() {
	const d = new Date();
	let h = addZero(d.getHours(), 2);
	let m = addZero(d.getMinutes(), 2);
	let s = addZero(d.getSeconds(), 2);
	let ms = addZero(d.getMilliseconds(), 4);
	timer.textContent = h + ":" + m + ":" + s + ":" + ("0" + ms).substr(2, 2);
}
setInterval(time, 0.1);

var today = new Date();
document.getElementById('date').textContent =
	today.toLocaleString('default', { month: 'long' }) + ' ' +
	String(today.getDate()).padStart(2, '0') + ' ' +
	today.getFullYear();

window.onload = function () {
	var n = Math.floor(Math.random() * 3) + 1;
	var logo = document.getElementById('logo');
	logo.src = 'logo' + n + '.svg';
	logo.style.display = 'block';
};
