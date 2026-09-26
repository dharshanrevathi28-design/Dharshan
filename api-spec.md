# 🔌 REST API Specification

Base URL: `http://localhost:5000/api`

---

## 1. Auth Endpoints (`/api/auth`)

| Method | Endpoint | Access | Description |
|---|---|---|---|
| POST | `/register` | Public | Register new User (patient/doctor/admin) |
| POST | `/login` | Public | Authenticate user & return JWT token |
| GET | `/me` | Private | Get authenticated user profile |
| PUT | `/profile` | Private | Update user details & avatar |

---

## 2. Doctor Endpoints (`/api/doctors`)

| Method | Endpoint | Access | Description |
|---|---|---|---|
| GET | `/` | Public | List all doctors with specialty & search filters |
| GET | `/:id` | Public | Get detailed doctor profile, schedule & reviews |
| POST | `/:id/reviews` | Patient | Submit review and rating for a doctor |
| PUT | `/:id/schedule` | Doctor | Update doctor working hours & slot availability |

---

## 3. Appointment Endpoints (`/api/appointments`)

| Method | Endpoint | Access | Description |
|---|---|---|---|
| POST | `/` | Patient | Book a new appointment |
| GET | `/my-appointments` | Private | Get current user's appointments (Patient/Doctor) |
| GET | `/:id` | Private | Get detailed appointment view |
| PUT | `/:id/status` | Doctor/Admin | Update status (`Pending`, `Confirmed`, `Completed`, `Cancelled`) |
| DELETE | `/:id` | Patient/Admin | Cancel an appointment |

---

## 4. Admin Endpoints (`/api/admin`)

| Method | Endpoint | Access | Description |
|---|---|---|---|
| GET | `/stats` | Admin | Get platform analytical metrics |
| GET | `/users` | Admin | List all registered users |
| PUT | `/doctors/:id/approve` | Admin | Toggle doctor verification/approval status |
