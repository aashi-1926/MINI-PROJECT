
# 💙 Eldora — Caring with Compassion

<p align="center">
  <strong>A digital platform concept for accessible, compassionate elderly care.</strong>
</p>

<p align="center">
  Helping senior citizens and their families stay connected with essential care services.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-In%20Development-blue?style=for-the-badge" alt="Project Status">
  <img src="https://img.shields.io/badge/Frontend-HTML%20%7C%20CSS%20%7C%20JavaScript-orange?style=for-the-badge" alt="Frontend">
  <img src="https://img.shields.io/badge/Backend-Node.js-green?style=for-the-badge" alt="Backend">
  <img src="https://img.shields.io/badge/Framework-Express-black?style=for-the-badge" alt="Express">
</p>

---

## 📌 About the Project

**Eldora** is a web-based elderly-care platform designed to make everyday care more accessible, organised, and convenient for senior citizens and their families.

The platform brings essential care resources together in one place, including medicine reminders, medical-care guidance, home-care requests, emotional well-being resources, and communication support.

Eldora provides separate experiences for patients and doctors through dedicated dashboards.

> 💙 Because care has no age.

## 🎯 Problem Statement

Many elderly people face challenges such as:

- Difficulty accessing appropriate care services.
- Forgetting daily medication schedules.
- Limited access to reliable home-care information.
- Feelings of loneliness and social isolation.
- Difficulty communicating their care needs to family members.

Eldora aims to address these challenges through a simple, accessible, and user-friendly digital platform.

## ✨ Key Features

### 👤 Patient Dashboard

- Personal profile management.
- Medical facilities and care guidance.
- Medicine reminder management.
- Home-care service requests.
- Old-age home evaluation checklist.
- Emotional well-being resources.
- Care request tracking.
- Feedback and rating system.
- Emergency information.

### 🩺 Doctor Dashboard

- Dedicated doctor login.
- Sample appointment schedule.
- Demonstration patient overview.
- Workspace navigation.
- Feedback submission.

### ⚙️ Application Features

- Separate patient and doctor interfaces.
- Form validation and interactive components.
- Backend API integration.
- Local persistence of demo data.
- Responsive interface for different screen sizes.

> **Note:** This is an educational prototype. Appointment information and patient entries are demonstrations, not real clinical records. Medicine reminders do not currently send notifications, and emergency information does not trigger SOS alerts.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Web page structure |
| CSS3 | Styling and responsive layout |
| JavaScript | Frontend interactions |
| Node.js | Backend runtime |
| Express.js | REST API and server |
| JSON | Local demonstration data storage |
| Git & GitHub | Version control and collaboration |
| Visual Studio Code | Development environment |

## 📂 Project Structure

```text
eldora-working-backend/
│
├── public/
│   ├── index.html
│   ├── patient.html
│   ├── doctor.html
│   │
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       ├── login.js
│       └── dashboard.js
│
├── data/
│   └── eldora.json
│
├── server.js
├── package.json
└── README.md
```

## 🚀 Getting Started

Follow these steps to run Eldora locally.

### Prerequisites

Install the following:

- [Node.js](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- Git (optional, for version control)

### 1. Clone the Repository

Replace the example URL with your actual GitHub repository URL.

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

### 2. Open the Project

```bash
cd YOUR-REPOSITORY
```

Open the project folder in Visual Studio Code.

### 3. Install Dependencies

```bash
npm install
```

If PowerShell blocks the npm script on Windows, try:

```powershell
npm.cmd install
```

### 4. Start the Backend Server

```bash
npm start
```

If you are using Windows PowerShell and encounter the same script restriction:

```powershell
npm.cmd start
```

### 5. Open the Website

Visit:

```text
http://localhost:3000
```

**Important:** Keep the terminal running while using the website. Open the URL through the server rather than opening `index.html` directly.

## 🔐 Demo Login Credentials

Use these demonstration accounts to explore the interfaces.

| Account | Email | Password |
|---|---|---|
| Patient | `patient@eldora.in` | `Patient123` |
| Doctor | `doctor@eldora.in` | `Doctor123` |

These are test credentials only. Do not use real patient information.

## 🧪 Testing the Features

After starting the server:

1. Sign in using the patient demo account.
2. Update the profile and save the changes.
3. Add a medicine reminder and delete it.
4. Submit a care request.
5. Submit feedback and review the saved entry.
6. Sign out and sign in using the doctor demo account.
7. Explore the sample appointments and patient overview.

The data is stored locally by the demonstration backend.

## 🔮 Future Improvements

Potential future enhancements include:

- Secure user registration and authentication.
- Database integration with PostgreSQL or MySQL.
- Real appointment booking and scheduling.
- Verified medical facility and care-home directory.
- Scheduled medicine notifications.
- Caregiver and family account connections.
- Emergency contact workflows.
- Accessibility improvements for senior citizens.
- Automated testing and deployment.

## 🔒 Security Disclaimer

Eldora is a learning project and is **not production-ready for medical use**.

Before handling real user or health data, the application needs stronger authentication, secure session management, a production database, access controls, HTTPS, audit logging, and appropriate privacy and security reviews.

The demo backend does not contact real doctors, caregivers, clinics, or emergency services.

## 👥 Project Team

Add your actual team members and responsibilities here.

| Team Member | Responsibility |
|---|---|
| Aashika Gupta | Frontend Development & Documentation |
| Vaishnavi Gupta | Frontend Development & Testing |
| Keshav Yadav | Backend Development & Integration |
| Utsav Keshri | Backend Development & Database |

## 🤝 Contributing

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test the application.
5. Submit a pull request with a clear description.

## 📄 License

No license has been specified yet. Add a `LICENSE` file if you decide to distribute the project under an open-source license.

---

<p align="center">
  <strong>💙 Eldora — Because Care Has No Age.</strong>
  <br>
  <sub>Designed with compassion. Built to make care easier.</sub>
</p>