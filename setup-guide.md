# 🛠 Setup & Installation Guide

Follow this guide to configure, run, and test the Book-a-Doctor application.

---

## 1. Environment Setup

Copy `.env` into `backend/.env` or configure the environment variables:
- `PORT`: Server port (Default: 5000)
- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT signing

---

## 2. Seed Initial Demo Data

The backend server automatically seeds realistic demo data on startup if no doctors are found, including:
- **Sample Doctors**: Cardiologists, Dermatologists, Neurologists, Pediatricians, Orthopedists.
- **Sample Accounts**:
  - Patient Login: `patient@example.com` / `password123`
  - Doctor Login: `cardio.smith@example.com` / `password123`
  - Admin Login: `admin@example.com` / `password123`

---

## 3. Running Automated Tests

```bash
# Run Backend API Tests
cd backend
npm test

# Run Frontend Component Tests
cd frontend
npm test
```
