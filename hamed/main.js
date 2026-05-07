document.addEventListener("DOMContentLoaded", function () {
  const hasVisited = sessionStorage.getItem("hasVisited");

  if (!hasVisited) {
    document.body.classList.add("first-visit");
    sessionStorage.setItem("hasVisited", "true");
  }
});

function navToggle() {
  var x = document.getElementById("mobileHeader");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
  if (document.body.style.touchAction === "none") {
    document.body.style.touchAction = "auto";
  } else {
    document.body.style.touchAction = "none";
  }
}

function showSection(name) {
  const sections = ["experience", "design", "photos", "videos", "music"];
  const subNavs = ["experience", "design", "music"];

  sections.forEach(s => {
    document.getElementById("section-" + s).style.display = s === name ? "" : "none";

    const btn = document.getElementById("btn-" + s);
    if (btn) btn.classList.toggle("btn-active", s === name);

    const mobileBtn = document.getElementById("mobile-btn-" + s);
    if (mobileBtn) mobileBtn.classList.toggle("btn-active", s === name);
  });

  subNavs.forEach(s => {
    const sub = document.getElementById("sub-" + s);
    if (sub) sub.style.display = s === name ? "" : "none";
  });

  window.scrollTo(0, 0);
}
