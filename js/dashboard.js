const role = document.body.classList.contains("doctor-theme") ? "doctor" : "patient";
const expectedRole = sessionStorage.getItem("eldoraDemoRole");
if (expectedRole !== role) window.location.replace("index.html");

const sections = [...document.querySelectorAll(".dash-section")];
const navItems = [...document.querySelectorAll(".nav-item")];
function showSection(id) {
  const target = document.getElementById(id);
  if (!target) return;
  sections.forEach(section => section.classList.toggle("current", section.id === id));
  navItems.forEach(item => item.classList.toggle("active", item.dataset.target === id));
  document.getElementById("breadcrumbTitle").textContent = navItems.find(item => item.dataset.target === id)?.textContent.trim() || "Overview";
  window.scrollTo({ top: 0, behavior: "smooth" });
}
document.querySelectorAll("[data-target]").forEach(button => button.addEventListener("click", () => showSection(button.dataset.target)));
document.getElementById("logout").addEventListener("click", () => {
  sessionStorage.removeItem("eldoraDemoRole");
  window.location.href = "index.html";
});

let noteCount = 0;
const noteList = document.getElementById("doctorNoteList");
document.querySelectorAll(".local-form").forEach(form => form.addEventListener("submit", event => {
  event.preventDefault();
  const feedback = form.querySelector(".form-feedback");
  const data = new FormData(form);
  let message = "";
  if (form.dataset.kind === "medicine") {
    const name = String(data.get("name") || "").trim();
    const time = String(data.get("time") || "");
    if (!name || !time) return;
    const list = document.getElementById("reminderList");
    if (list.querySelector(".muted")) list.innerHTML = "";
    const item = document.createElement("div");
    item.className = "reminder-item";
    const safeName = document.createElement("strong"); safeName.textContent = name;
    const safeTime = document.createElement("span"); safeTime.textContent = time;
    item.append(safeName, safeTime); list.appendChild(item);
    message = "Demo reminder added for this session. No notification will be sent.";
  } else if (form.dataset.kind === "note") {
    const patient = String(data.get("patient") || "").trim();
    const note = String(data.get("note") || "").trim();
    if (!patient || !note) return;
    addNote(`${patient}: ${note}`);
    message = "Sample note added to this page only; it has not been saved to a database.";
  } else {
    const email = String(data.get("email") || "").trim();
    const msg = String(data.get("message") || "").trim();
    if (!email || !msg) return;
    message = "Your sample message is ready, but it has not been sent to a support team.";
  }
  feedback.textContent = message;
  feedback.hidden = false;
  form.reset();
}));
function addNote(text) {
  noteCount++;
  const count = document.getElementById("noteCount");
  if (count) count.textContent = String(noteCount);
  if (noteList) {
    const item = document.createElement("div"); item.className = "note-item"; item.textContent = text; noteList.prepend(item);
  }
}
document.querySelectorAll("[data-note]").forEach(button => button.addEventListener("click", () => {
  addNote(button.dataset.note);
  button.textContent = "Note added ✓";
  button.disabled = true;
}));
