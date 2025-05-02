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
| 🔙 Backend    | Firebase                |
| 🗄️ Database   | Firebase cloud          |


---

## 🔐 Sample Login Credentials

> Use these for testing purposes only. Replace with real credentials in production.

### 👨‍🎓 Student Login
- **Username**: `21ucs522`
- **Password**: `student123`

### 👨‍🏫 Admin Login
- **Username**: `admin`
- **Password**: `admin123`

---
## 🖼️ UI Preview

🚧 **Note**: Screenshots are currently not available and the website is not fully functional at the moment.  
However, you can still **view the user interface** and explore the layout and structure by browsing the project files in the repository.

🔧 We're working on getting a live demo and visuals uploaded soon!

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
