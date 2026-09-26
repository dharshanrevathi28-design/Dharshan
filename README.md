# 🏥 Book a Doctor - Professional Healthcare Scheduling Platform

A full-stack web platform built with Node.js, Express, MongoDB, and React to connect patients with top-rated medical specialists, manage schedules, and streamline healthcare appointments.

---

## 🌟 Key Features

- 🔐 **Authentication & Authorization**: Role-based access (Patient, Doctor, Admin) with JWT security & bcrypt password hashing.
- 👨‍⚕️ **Doctor Directory & Search**: Filter by specialty, experience, rating, and fee range.
- 📅 **Dynamic Appointment Scheduling**: Real-time slot selection, schedule management, and instant booking confirmation.
- 📊 **Admin Dashboard**: System metrics, user management, doctor approvals, and revenue analytics.
- 💬 **Ratings & Reviews**: Verified patient review submission system for doctors.
- 🎨 **Modern Visual Design**: Glassmorphism aesthetic, modern Google Fonts (Inter, Outfit), responsive layouts, smooth micro-animations.

---
  REPORT LINK:
      https://drive.google.com/drive/folders/1uZGlnmFCyLG1-8cbwC5M4Bir9-YfXmCN
  
  
  
  ## 📁 Repository Structure

```text
book-a-doctor-app/
├── backend/                     # Express.js + MongoDB API Server
│   ├── src/
│   │   ├── config/              # DB, JWT & Logger settings
│   │   ├── models/              # User, Doctor, Appointment schemas
│   │   ├── controllers/         # Business logic
│   │   ├── routes/              # RESTful API endpoints
│   │   ├── middleware/          # Security & validation
│   │   ├── utils/               # File upload & Email notifications
│   │   ├── tests/               # API integration tests
│   │   └── server.js            # Server entry point
│   └── package.json
├── frontend/                    # React.js Client Application
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   ├── pages/               # Page views
│   │   ├── services/            # API integration modules
│   │   ├── context/             # Auth & Appointment React Context
│   │   ├── hooks/               # Custom hooks
│   │   ├── styles/              # CSS Tokens & styling
│   │   └── tests/               # UI Component tests
│   └── package.json
└── docs/                        # Project documentation
```

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### 1. Installation
```bash
# Clone or navigate to project directory
cd book-a-doctor-app

# Install backend dependencies
cd backend && npm install

# Install frontend dependencies
cd ../frontend && npm install
```

### 2. Running the Application
```bash
# Start Backend API Server (Port 5000)
cd backend && npm start

# Start Frontend React App (Port 3000)
cd frontend && npm start
```

---

## 📖 Documentation
- [Architecture Overview](docs/architecture.md)
- [REST API Specification](docs/api-spec.md)
- [Setup & Deployment Guide](docs/setup-guide.md)
