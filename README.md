# Eldora — Caring with Compassion (v2)

## Open the project
1. Extract `eldora-website-v2.zip`.
2. In VS Code, select **File → Open Folder** and choose `eldora-website-v2`.
3. Open `index.html` with Live Server (recommended) or open it in your browser.
4. Use the demo login details below.

## Demo login
- Patient: `patient@eldora.in` / `Patient123` → opens `patient.html`
- Doctor: `doctor@eldora.in` / `Doctor123` → opens `doctor.html`

## Structure
- `index.html`: login and Eldora branding
- `patient.html`: separate patient dashboard and service pages
- `doctor.html`: separate doctor workspace and clinical demo pages
- `css/style.css`: all responsive styles and heart/heartbeat logo
- `js/login.js`: role-specific login validation and navigation
- `js/dashboard.js`: navigation and demo forms

## Prototype limitations
This is a frontend-only educational prototype. Credentials are hard-coded in JavaScript, and sessionStorage is only used to control demo navigation. It is not secure authentication. Forms are local demonstrations and do not send or permanently store data. Do not enter real patient information. Before real use, add a backend, secure password hashing, server-side authorization, database storage, and appropriate privacy/security protections. Emergency information does not place calls or send SOS alerts.
