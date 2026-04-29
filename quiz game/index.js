localStorage.setItem("score", 0);
const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", function () {
  localStorage.setItem("score", 0);
  window.location.href = "index2.html";
});