let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const options = document.getElementById("options");
const questionNumber = document.getElementById("question-number");
const nextBtn = document.getElementById("nextBtn");
const timer = document.getElementById("timer");

let timeLeft = 15;
let timerInterval;

function showQuestion() {
  const q = questions[currentQuestion];
  question.innerHTML = q.question;
  questionNumber.innerHTML = `${currentQuestion + 1} of ${questions.length} Questions`;
  options.innerHTML = "";
  q.option.forEach((option) => {
    const div = document.createElement("div");
    div.classList.add("option");
    div.textContent = option;
    div.addEventListener("click", () => {
      checkAnswer(div, option);
    });
    options.appendChild(div);
  });
  startTimer();
}

showQuestion();
nextBtn.addEventListener("click", () => {
  nextQuestion();
  nextBtn.disabled = true;
});
nextBtn.disabled = true;

function checkAnswer(selectedOption, selectedAnswer) {
  clearInterval(timerInterval);
  const correctAnswer = questions[currentQuestion].answer;
  const allOptions = document.querySelectorAll(".option");
  allOptions.forEach((option) => {
    option.style.pointerEvents = "none";
    if (option.textContent === correctAnswer) {
      option.classList.add("correct");
    }
  });
  if (selectedAnswer === correctAnswer) {
    score++;
    selectedOption.classList.add("correct");
  } else {
    selectedOption.classList.add("wrong");
  }
  nextBtn.disabled = false;
}

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 15;
  timer.textContent = timeLeft;
  timerInterval = setInterval(() => {
    timeLeft--;
    timer.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      nextBtn.disabled = false;
      nextQuestion();
    }
  }, 1000);
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    clearInterval(timerInterval);
    alert("Quiz Selesai");
    localStorage.setItem("score", score);
    window.location.href = "result.html";
  }
}
