const form = document.getElementById("registerForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullname = document.getElementById("fullname").value;
  const quizNumber = document.getElementById("quizNumber").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (fullname === "" || quizNumber === "" || email === "" || password === "") {
    alert("Semua data wajib diisi!");
    return;
  }

  const user = {
    fullname,
    quizNumber,
    email,
    password,
  };

  localStorage.setItem("quizUser", JSON.stringify(user));

  alert("Registrasi berhasil");
  window.location.href = "login.html";
});
