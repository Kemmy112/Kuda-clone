const hamburger = document.getElementById("hamburger");
const sub = document.getElementById("megga");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  sub.classList.toggle("active");
});
