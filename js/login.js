const roleTabs = [...document.querySelectorAll(".role-tab")];
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");
let role = "patient";
const demoAccounts = {
  patient: { email: "patient@eldora.in", password: "Patient123", page: "patient.html" },
  doctor: { email: "doctor@eldora.in", password: "Doctor123", page: "doctor.html" }
};
function chooseRole(nextRole) {
  role = nextRole;
  roleTabs.forEach(tab => {
    const active = tab.dataset.role === role;
    tab.classList.toggle("selected", active);
    tab.setAttribute("aria-pressed", String(active));
  });
  document.getElementById("demoText").textContent = role === "patient"
    ? "Patient: patient@eldora.in / Patient123"
    : "Doctor: doctor@eldora.in / Doctor123";
  errorMessage.hidden = true;
}
roleTabs.forEach(tab => tab.addEventListener("click", () => chooseRole(tab.dataset.role)));
document.getElementById("togglePassword").addEventListener("click", () => {
  const show = passwordField.type === "password";
  passwordField.type = show ? "text" : "password";
  document.getElementById("togglePassword").textContent = show ? "Hide" : "Show";
});
document.getElementById("fillDemo").addEventListener("click", () => {
  emailField.value = demoAccounts[role].email;
  passwordField.value = demoAccounts[role].password;
  errorMessage.hidden = true;
});
document.getElementById("loginForm").addEventListener("submit", event => {
  event.preventDefault();
  const email = emailField.value.trim().toLowerCase();
  const password = passwordField.value;
  if (!email || !password) return showError("Please enter your email address and password.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showError("Please enter a valid email address.");
  const account = demoAccounts[role];
  if (email !== account.email || password !== account.password) {
    return showError("Those details don't match the selected role. Try filling in the demo details below.");
  }
  sessionStorage.setItem("eldoraDemoRole", role);
  window.location.href = account.page;
});
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.hidden = false;
}
