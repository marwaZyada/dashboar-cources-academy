# 🎓 Courses Academy

## 📌 Project Description

Courses Academy is a modern Angular application for managing online courses. It allows users to browse, search, add, edit, view, and delete courses through a clean and responsive user interface. The project follows a scalable architecture with reusable components and Angular best practices.

---

## 🛠️ Technologies Used

- Angular 21
- TypeScript
- Angular Material
- Bootstrap 5
- RxJS
- Angular Router
- Angular Signals
- Angular Reactive Forms
- Angular In-Memory Web API (Mock Backend)
- ngx-toastr
- SCSS

---

## ✨ Features Implemented

### Course Management

- Display all courses
- View course details
- Add a new course
- Edit existing courses
- Delete courses
- Search courses by title
- Responsive course cards

### Shared Components

- Reusable search input component
- Reusable page header component
- Reusable Table
- reusable dropdownlist
- Confirmation dialog
- Loading indicator
- Empty state component
- Error interceptor


### UI Features

- Angular Material Design
- Responsive layout
- Toast notifications
- Form validation
- loading

---

## ▶️ How to Run the Project

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the project

```bash
cd courses-academy
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the application

```bash
ng serve
```

Open your browser at:

```
http://localhost:4200
```

---

## 🗄️ Mock API / Local Storage

This project uses **Angular In-Memory Web API** to simulate a backend server.

### Mock API Features

- GET courses
- GET course by id
- POST new course
- PUT update course
- DELETE course

The mock data is stored inside:

```
src/app/core/mock/in-memory-data.service.ts
```

No real backend or database is required.

---

## 📂 Project Structure

```
src/
│
├── app/
│   ├── core/
│   ├── shared/
│   ├── features/
│   │      └── course/
│   ├── layout/
│   └── app.routes.ts
│
├── assets/
└── styles.scss
```

---

## 📝 Assumptions

- The application is intended for demonstration purposes.
- Authentication and authorization are not implemented.
- Data persistence is temporary because the mock API resets when the application reloads.
- Images are loaded from static URLs.

---

## ⭐ Bonus Features

- Reusable shared components
- Standalone Angular Components
- Angular Signals
- Responsive design
- Toast notifications
- Confirmation dialog before deleting
- Search functionality
- Clean folder structure
- Angular Material UI

---

## 📷 Screenshots

You can add screenshots of:

- Home Page
- Course Details
- Add Course
- Edit Course
- Delete Confirmation
- Search Results

---

## 👩‍💻 Author

**Marwa Sharaf Ali**

Angular Developer