# 🚀 NITA Placement Management System

A full-stack placement automation platform for **NIT Agartala** that manages the complete on‑campus recruitment lifecycle — from eligibility filtering to multi‑round selections, analytics, and Google‑powered workflows.

Built as a **hackathon‑grade + production‑grade** system.

---

## 🧠 Why this exists
Placement cells struggle with:
- Manual eligibility filtering  
- CV collection chaos  
- Round‑wise tracking  
- Poor communication  
- Zero analytics  

This system replaces all of that with a **secure, role‑based, real‑time web platform**.

---

## 🎥 Project Demo

<p align="center">
  <a href="https://youtu.be/uCGexePamX4">
    <img src="https://img.youtube.com/vi/uCGexePamX4/maxresdefault.jpg" width="80%" />
  </a>
</p>

Click the image above to watch the full project walkthrough.


## 🚀 Live Application

<p align="center">
  <a href="https://campus-opportunity-platform.vercel.app/" target="_blank">
    <strong>👉 Click here to try the live app</strong>
  </a>
</p>


## 🧩 High Level Architecture

```mermaid
flowchart LR
    A[React Frontend] -->|JWT + REST| B[Express API]
    B --> C[Prisma ORM]
    C --> D[(SQLite DB)]

    B --> E[Google APIs]
    E --> F[Gmail API]
    E --> G[Google Sheets API]
    E --> H[Gemini AI]
```

---

## 👥 Roles

| Role | Capabilities |
|------|--------------|
| Student | Apply, manage CVs, track rounds, ATS scoring |
| Coordinator | Post drives, run rounds, email students, export Sheets |
| CCD Admin | Users, students, locks, analytics |
| CCD Member | Read‑only analytics |

---

## 🔐 Authentication Flow

```mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant B as Backend

    U->>F: Login credentials
    F->>B: POST /api/auth/login
    B->>B: Validate & hash
    B->>F: JWT Token
    F->>F: Store token
    F->>B: All future requests include JWT
```

---

## 🎓 Student Journey

```mermaid
flowchart TD
    A[Login] --> B[View Eligible Jobs]
    B --> C[Select CV]
    C --> D[Apply]
    D --> E[Track Rounds]
    E --> F[Notifications]
    C --> G[Check ATS Score]
    G --> H[Gemini AI]
```

---

## 🧑‍💼 Coordinator Workflow

```mermaid
flowchart TD
    A[Create Post] --> B[Set Eligibility]
    B --> C[Students Apply]
    C --> D[Export to Google Sheets]
    C --> E[Export CSV]
    D --> F[Run Rounds]
    F --> G[Email Selected Students]
```

---

## 🛡 CCD Admin Control

```mermaid
flowchart TD
    A[Upload Students] --> B[Manage Profiles]
    B --> C[Lock / Unlock]
    C --> D[View Analytics]
```

---

## 🌐 Google‑Powered Hackathon Features

These features were added as **prototype demos** to showcase how Google tools can transform placement workflows.

> ⚠️ These are proof‑of‑concept features — designed to show **vision & capability**, not mass deployment.

### 📧 1. Email Notifications (Gmail API)
Coordinators can send **automated emails** to:
- Students selected for next round  
- Students rejected  

Uses **Google Gmail API** for:
- Authenticated sending
- Real inbox delivery
- Hackathon‑grade integration

---

### 📊 2. Export to Google Sheets
Instead of downloading CSVs, coordinators can:

- Export applicant data directly to **Google Sheets**
- Share live sheets with companies
- Auto‑generate columns based on selected student fields

Uses:
- **Google Sheets API**
- OAuth‑based authenticated write access

This replaces Excel and enables **real‑time collaboration**.

---

### 🤖 3. Resume ATS Scoring (Gemini AI)

Students can paste their **Google Drive CV link** and:
- System downloads the resume
- Sends it to **Gemini AI**
- Gets an **ATS compatibility score**
- Shows feedback on how well the CV matches job descriptions

This demonstrates how **AI‑driven placement guidance** can be integrated.

Uses:
- **Google Gemini API**
- Resume parsing + semantic analysis

---

## 📊 Analytics Provided

- Total students  
- Dream / Standard / Normal placed  
- Branch‑wise placement %  
- Locked students  

---

<p align="center">
  <!-- Frontend -->
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white"/>

  <!-- Backend -->
  <img src="https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-000000?logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white"/>
  <img src="https://img.shields.io/badge/SQLite-003B57?logo=sqlite&logoColor=white"/>
  <img src="https://img.shields.io/badge/JWT-000000?logo=jsonwebtokens&logoColor=white"/>

  <!-- AI & Google -->
  <img src="https://img.shields.io/badge/Gemini%20AI-4285F4?logo=google&logoColor=white"/>
  <img src="https://img.shields.io/badge/Gmail%20API-EA4335?logo=gmail&logoColor=white"/>
  <img src="https://img.shields.io/badge/Google%20Sheets-34A853?logo=googlesheets&logoColor=white"/>
</p>


## 🏗 Local Setup

```bash
git clone <repo>
cd backend
npm install
cp .env.example .env
npx prisma migrate dev
npm run dev
```

```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 Security

- bcrypt password hashing  
- JWT authentication  
- Role‑based route guards  
- Server‑side eligibility checks  
- Audit logging  

---

## 📌 Production‑Grade Features

✔ One‑student‑one‑application rule  
✔ Eligibility revalidation on edits  
✔ Multi‑round hiring  
✔ CSV + Google Sheets export  
✔ Bulk student upload  
✔ Email notifications  
✔ AI‑based resume analysis  

---

## 👤 Author

**Shivesh Deogharia**  

