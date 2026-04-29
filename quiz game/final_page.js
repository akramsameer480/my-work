const score = localStorage.getItem("score");
console.log(score);
const resultText = document.getElementById("result-text");

if (score == 5) {
  resultText.textContent = "5 out of 5! Excellent! You got all questions right.";
} else if (score == 4) {
  resultText.textContent = " 4 out of 5! Good job! You did well.";
} else if (score == 3) {
  resultText.textContent = " 3 out of 5! Keep practicing!";
} else if (score == 2) {
  resultText.textContent = " 2 out of 5! Keep practicing!"; 
}
else if (score==1 ) {
  resultText.textContent = " 1 out of 5! Keep practicing!";
}
else {
  resultText.textContent = "0 out of 5! Don't worry, try again!";
}