const form = document.getElementById("loginForm");
console.log(form);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Select the elements first
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");

  const email = emailField.value;
  const password = passwordField.value;

  const user = JSON.parse(localStorage.getItem("quizUser"));

  console.log(user);
  console.log(email);
  console.log(password);

  if (user == null) {
    alert("Silahkan daftar terlebih dahulu.");
    return;
  }
  if (email === user.email && password === user.password) {
    alert("Login Berhasil");
    window.location.href = "rules.html";
  } else {
    alert("Email atau Password salah!");
  }
});
