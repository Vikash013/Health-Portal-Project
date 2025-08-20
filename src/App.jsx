import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

/* ---------------- Home Dashboard ---------------- */
function Home() {
  return (
    <main className="main">
      <section className="card">
        <h2>📅 Upcoming Appointment</h2>
        <p><strong>Date:</strong> 25 Aug 2025</p>
        <p><strong>Doctor:</strong> Dr. Priya Sharma</p>
        <p><strong>Specialty:</strong> Cardiologist</p>
        <button className="btn">View Details</button>
      </section>

      <section className="card highlight">
        <h2>💊 Current Prescription</h2>
        <ul>
          <li>Atorvastatin 10mg – 1 tab daily</li>
          <li>Metformin 500mg – 1 tab morning & night</li>
          <li>Vitamin D – Weekly</li>
        </ul>
        <button className="btn">Refill Prescription</button>
      </section>

      <section className="card">
        <h2>📊 Recent Health Report</h2>
        <p>✔️ Blood Pressure: <strong>120/80 mmHg</strong></p>
        <p>✔️ Sugar Level: <strong>95 mg/dL</strong></p>
        <p>✔️ Cholesterol: <strong>180 mg/dL</strong></p>
        <button className="btn">Download Report</button>
      </section>

      {/* Extra cards to fill space */}
      <section className="card">
        <h2>🏃 Daily Activity</h2>
        <p>Steps Walked: <strong>7,540</strong></p>
        <p>Calories Burned: <strong>320 kcal</strong></p>
      </section>

      <section className="card">
        <h2>💡 Health Tips</h2>
        <ul>
          <li>Drink at least 8 glasses of water daily 💧</li>
          <li>Sleep 7-8 hours every night 😴</li>
          <li>Exercise at least 30 mins daily 🏋️</li>
        </ul>
      </section>
    </main>
  );
}

/* ---------------- Other Pages ---------------- */
function Appointments() {
  return (
    <main className="page">
      <h2>📅 Register a New Appointment</h2>
      <form className="form">
        <label>Date:<br /> <input type="date" /></label><br /><br />
        <label>Doctor:<br /> <input type="text" /></label><br /><br />
        <label>Specialty:<br /> <input type="text" /></label><br /><br />
        <button className="btn">Save Appointment</button>
      </form>
    </main>
  );
}

function Prescriptions() {
  return (
    <main className="page">
      <h2>💊 Manage Your Prescriptions</h2>
      <p>Here you can add new prescriptions or update existing ones.</p>
    </main>
  );
}

function Reports() {
  return (
    <main className="page">
      <h2>📊 Health Reports</h2>
      <p>View your past medical reports and download PDFs here.</p>
    </main>
  );
}

function Settings() {
  return (
    <main className="page">
      <h2>⚙️ User Settings</h2>
      <p>Update your profile, password, and notification preferences.</p>
    </main>
  );
}

/* ---------------- Main App ---------------- */
function App() {
  return (
    <Router>
      <div className="app">
        {/* Header */}
        <header className="header">
          <h1>🌿 My Health Portal</h1>
          <p>Your personal dashboard for wellness & healthcare</p>
        </header>

        {/* Navbar */}
        <nav className="navbar">
          <ul>
            <li><Link to="/">🏠 Home</Link></li>
            <li><Link to="/appointments">📅 Appointments</Link></li>
            <li><Link to="/prescriptions">💊 Prescriptions</Link></li>
            <li><Link to="/reports">📊 Reports</Link></li>
            <li><Link to="/settings">⚙️ Settings</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/prescriptions" element={<Prescriptions />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <p>© By Vikash Yadav 22BCS12274 💖</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
