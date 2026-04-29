const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const button4 = document.getElementById("btn4");
const pbar = document.getElementById("progress-bar");
const score = document.getElementById("score-pannel");

// Get current score from previous pages
let scoreValue = Number(localStorage.getItem("score")) || 0;

// Show score when page opens
score.textContent = `Score: ${scoreValue}`;

function disableButtons() {
  [button1, button2, button3, button4].forEach((btn) => {
    btn.disabled = true;
  });
}

function updateProgress() {
  pbar.style.width = "100%";
  pbar.classList.add("bg-orange-500");
}

function increaseScore() {
  scoreValue++;
  localStorage.setItem("score", scoreValue);
  score.textContent = `Score: ${scoreValue}`;
}

button1.addEventListener("click", function () {
  disableButtons();
  button3.classList.add("bg-green-500");
  button1.classList.add("bg-red-500");
  updateProgress();
});

button2.addEventListener("click", function () {
  disableButtons();
  button3.classList.add("bg-green-500");
  button2.classList.add("bg-red-500");
  updateProgress();
});

button3.addEventListener("click", function () {
  disableButtons();
  button3.classList.add("bg-green-500");
  updateProgress();

  // Correct answer only
  increaseScore();
});

button4.addEventListener("click", function () {
  disableButtons();
  button3.classList.add("bg-green-500");
  button4.classList.add("bg-red-500");
  updateProgress();
});