const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
 
const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, "data", "eldora.json");
 
// ---------- Default demo data ----------
const defaultData = {
  users: [
    { id: 1, role: "patient", name: "Demo Patient", email: "patient@eldora.in", password: "Patient123", age: 70, phone: "" },
    { id: 2, role: "doctor", name: "Dr. Demo", email: "doctor@eldora.in", password: "Doctor123" }
  ],
  medicines: [],
  careRequests: [],
  feedback: [],
  appointments: [
    { id: 1, patient: "Ramesh Kumar", time: "10:00 AM", reason: "General checkup" }
  ]
};
 
// ---------- Middleware ----------
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
 
// ---------- Helper functions ----------
// Creates the data folder and eldora.json automatically if they are missing
function ensureDataFile() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(defaultData, null, 2));
  }
}
 
function readData() {
  ensureDataFile();
  try {
    const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
    // Fill in any missing keys with defaults
    return {
      users: data.users || defaultData.users,
      medicines: data.medicines || [],
      careRequests: data.careRequests || [],
      feedback: data.feedback || [],
      appointments: data.appointments || defaultData.appointments
    };
  } catch (err) {
    // If the JSON is corrupted, recreate the file
    console.error("eldora.json was corrupted, recreating it:", err.message);
    fs.writeFileSync(DATA_FILE, JSON.stringify(defaultData, null, 2));
    return JSON.parse(JSON.stringify(defaultData));
  }
}
 
function writeData(data) {
  ensureDataFile();
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}
 
// ---------- Health check ----------
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Eldora API is running" });
});
 
// ---------- 1. LOGIN ----------
app.post("/api/login", (req, res) => {
  const { email, password, role } = req.body || {};
 
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }
 
  const db = readData();
  const user = db.users.find(
    (u) =>
      u.email.toLowerCase() === String(email).toLowerCase() &&
      u.password === password &&
      (!role || u.role === role)
  );
 
  if (!user) {
    return res.status(401).json({ error: "Incorrect email or password" });
  }
 
  const { password: _pw, ...safeUser } = user;
  res.json({ message: "Login successful", user: safeUser });
});
 
// ---------- 2. PROFILE ----------
app.get("/api/profile/:id", (req, res) => {
  const db = readData();
  const user = db.users.find((u) => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });
 
  const { password, ...safeUser } = user;
  res.json(safeUser);
});
 
app.put("/api/profile/:id", (req, res) => {
  const db = readData();
  const index = db.users.findIndex((u) => u.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ error: "User not found" });
 
  const { name, age, phone } = req.body || {};
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
 
  db.users[index] = {
    ...db.users[index],
    name,
    age: age !== undefined ? age : db.users[index].age,
    phone: phone !== undefined ? phone : db.users[index].phone
  };
  writeData(db);
 
  const { password, ...safeUser } = db.users[index];
  res.json({ message: "Profile updated", user: safeUser });
});
 
// ---------- 3. MEDICINE REMINDERS ----------
app.get("/api/medicines", (req, res) => {
  res.json(readData().medicines);
});
 
app.post("/api/medicines", (req, res) => {
  const { name, dose, time } = req.body || {};
  if (!name || !time) {
    return res.status(400).json({ error: "Medicine name and time are required" });
  }
 
  const db = readData();
  const newMedicine = { id: Date.now(), name, dose: dose || "", time };
  db.medicines.push(newMedicine);
  writeData(db);
 
  res.status(201).json(newMedicine);
});
 
app.delete("/api/medicines/:id", (req, res) => {
  const db = readData();
  const before = db.medicines.length;
  db.medicines = db.medicines.filter((m) => m.id !== Number(req.params.id));
 
  if (db.medicines.length === before) {
    return res.status(404).json({ error: "Medicine not found" });
  }
  writeData(db);
  res.json({ message: "Medicine deleted" });
});
 
// ---------- 4. CARE REQUESTS ----------
app.get("/api/care-requests", (req, res) => {
  res.json(readData().careRequests);
});
 
app.post("/api/care-requests", (req, res) => {
  const { type, description } = req.body || {};
  if (!type || !description) {
    return res.status(400).json({ error: "Type and description are required" });
  }
 
  const db = readData();
  const request = {
    id: Date.now(),
    type,
    description,
    status: "Pending",
    createdAt: new Date().toISOString()
  };
  db.careRequests.push(request);
  writeData(db);
 
  res.status(201).json(request);
});
 
// ---------- 5. FEEDBACK ----------
app.get("/api/feedback", (req, res) => {
  res.json(readData().feedback);
});
 
app.post("/api/feedback", (req, res) => {
  const { rating, message } = req.body || {};
  const ratingNum = Number(rating);
 
  if (!ratingNum || ratingNum < 1 || ratingNum > 5) {
    return res.status(400).json({ error: "Rating must be between 1 and 5" });
  }
 
  const db = readData();
  const entry = {
    id: Date.now(),
    rating: ratingNum,
    message: message || "",
    createdAt: new Date().toISOString()
  };
  db.feedback.push(entry);
  writeData(db);
 
  res.status(201).json(entry);
});
 
// ---------- 6. DOCTOR: APPOINTMENTS ----------
app.get("/api/appointments", (req, res) => {
  res.json(readData().appointments);
});
 
// ---------- 404 for unknown API routes ----------
app.use("/api", (req, res) => {
  res.status(404).json({ error: "This API route does not exist" });
});
 
// ---------- Global error handler (e.g. invalid JSON body) ----------
app.use((err, req, res, next) => {
  console.error("Server error:", err.message);
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ error: "Invalid JSON in request body" });
  }
  res.status(500).json({ error: "Something went wrong on the server" });
});
 
// ---------- Start server ----------
ensureDataFile(); // Prepare the data file as soon as the server starts
 
app.listen(PORT, () => {
  console.log(`Eldora server is running at http://localhost:${PORT}`);
});
 
