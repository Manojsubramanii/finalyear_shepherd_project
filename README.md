# 🌐 St. Joseph College Extension Activities Portal

🎓 **Official Web Portal for Extension Department**  
📍 *St. Joseph College, Trichy*

---

## 📌 Project Goal

This platform is built to **digitize and simplify** all the manual workflows involved in the **Extension Department's village outreach programs**. Students can manage submissions, get approvals, upload reports, and receive marks — all in one place! 🚀

---

## 🛠️ Features

✨ Here's what the website offers:

- 📝 **Online Form Submission** – Students can submit forms to request village visits.
- ✅ **Admin Approval Panel** – Staff can approve or reject submitted forms.
- 📅 **Schedule Tracking** – Track approved village visits and activity dates.
- 📸 **Upload Reports** – Submit reports, images, and documents after completing the social work.
- 🏅 **Marks Allocation** – Admin can review work and assign marks automatically.
- 📂 **Centralized Data** – All activities stored in one secure place for future use.

---

## 👥 Who Can Use This?

- 👨‍🎓 **Students** of St. Joseph College to register and submit activity details
- 👨‍🏫 **Staff / Coordinators** from the Extension Department to manage and evaluate reports
- 🧑‍💼 **Admins** who oversee the process and generate records

---

## 🧪 Technologies Used

| Layer         | Technology             |
|---------------|-------------------------|
| 🌐 Frontend   | HTML5, CSS3, JavaScript |
| 🔙 Backend    | PHP (with XAMPP)        |
| 🗄️ Database   | MySQL                   |
| 📱 Optional   | React Native (for mobile access) |

---

## 🔐 Sample Login Credentials

> Use these for testing purposes only. Replace with real credentials in production.

### 👨‍🎓 Student Login
- **Username**: `student001`
- **Password**: `student123`

### 👨‍🏫 Admin Login
- **Username**: `admin`
- **Password**: `admin123`

---

## 🖼️ Screenshots

> *(Upload screenshots in your repo and replace the links below with actual paths)*

### 🔹 Homepage
![Homepage](screenshots/homepage.png)

### 🔹 Student Dashboard
![Dashboard](screenshots/student_dashboard.png)

### 🔹 Report Upload Page
![Report Upload]()

### 🔹 Admin Panel
![Admin Panel](screenshots/admin_panel.png)

---

## 🧭 Workflow Overview

```mermaid
graph TD;
    A[Student Submits Form] --> B[Admin Reviews Form];
    B -->|Approved| C[Student Visits Village];
    B -->|Rejected| D[Notification Sent to Student];
    C --> E[Student Uploads Report & Photos];
    E --> F[Admin Reviews Submission];
    F --> G[Marks Allocated to Student];
