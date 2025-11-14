// Switch between Login and Signup
const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const formTitle = document.getElementById("form-title");
const formSubtitle = document.getElementById("form-subtitle");

loginBtn.addEventListener("click", () => {
  loginBtn.classList.add("active");
  signupBtn.classList.remove("active");
  loginForm.classList.remove("hidden");
  signupForm.classList.add("hidden");
  formTitle.textContent = "Login";
  formSubtitle.textContent = "Welcome back! Sign in to continue your journey.";
});

signupBtn.addEventListener("click", () => {
  signupBtn.classList.add("active");
  loginBtn.classList.remove("active");
  signupForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
  formTitle.textContent = "Sign Up";
  formSubtitle.textContent = "Create your account and start learning!";
});

// Redirect to dashboard on submit
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  window.location.href = "dashboard.html";
});
signupForm.addEventListener("submit", e => {
  e.preventDefault();
  window.location.href = "dashboard.html";
});





