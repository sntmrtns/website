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
