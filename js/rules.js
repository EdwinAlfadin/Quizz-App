const exitBtn = document.getElementById("exitBtn");
const startBtn = document.getElementById("startBtn");

exitBtn.addEventListener("click", () => {
    window.location.href = "login.html";
});

startBtn.addEventListener("click", () => {
    window.location.href = "quiz.html";
});