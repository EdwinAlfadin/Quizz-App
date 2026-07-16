const percentage = document.getElementById("percentage");
const scoreText = document.getElementById("scoreText");

const replayBtn = document.getElementById("replayBtn");
const quitBtn = document.getElementById("quitBtn");

const score = Number(localStorage.getItem("score")) || 0;
const totalQuestions = 5;

const percent = Math.round((score / totalQuestions) * 100);

const circle = document.getElementById("progressCircle");

percentage.textContent = percent + "%";

const radius = 75;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;

const offset = circumference - (percent / 100) * circumference;

circle.style.strokeDashoffset = offset;

scoreText.textContent = `Anda menjawab benar ${score} dari ${totalQuestions} soal`;

replayBtn.addEventListener("click", () => {
  localStorage.removeItem("score");
  window.location.href = "quiz.html";
});

quitBtn.addEventListener("click", () => {
  window.location.href = "login.html";
});
