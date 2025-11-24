# Server-side-events

# 📡 Real-Time Error Monitoring System

Angular + Node.js + MongoDB + Server-Sent Events (SSE)

This project is a real-time error tracking system with a live updating dashboard.  
It uses **Angular Signals + ApexCharts** on the frontend, and **Node.js (Express) + Mongoose** on the backend with **Server-Sent Events (SSE)** to push updates instantly.

---

## 🏗️ Tech Stack

### **Frontend**

- Angular 18/19 (Standalone Components)
- Angular Signals (`signal`, `computed`, `effect`)
- ApexCharts (line + bar + donut charts)
- SCSS UI dashboard

### **Backend**

- Node.js + Express
- Server-Sent Events (EventStream API)
- MongoDB + Mongoose
- Realtime error broadcasting to all connected clients

---

## 📁 Project Structure
project/
│
├── backend/
│ ├── server.js
│ ├── models/
│ │ └── ErrorEvent.js
│ ├── routes/
│ │ └── events.js
│ └── controllers/
│ └── eventController.js
│
└── frontend/
├── src/app/dashboard/
│ ├── dashboard.component.ts
│ ├── dashboard.component.html
│ └── dashboard.component.scss
└── src/app/services/
└── sse.service.ts

