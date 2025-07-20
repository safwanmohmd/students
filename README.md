# 🧑‍🎓 Student Management Portal

A fully functional Student Management Portal built with **React**, **Redux**, and **React Router**, allowing users to add, view, edit, and delete student records. The project uses mock API data and demonstrates state management, routing, and form handling with validation.

---

### 🔗 Live Preview

➡️ [https://students-olive.vercel.app](https://students-olive.vercel.app)

---

### 📌 Features

- 🔍 View all students with name and email
- ➕ Add new students via a validated form
- ✏️ Edit existing student details
- ❌ Delete students with confirmation
- 🔗 Navigate to detailed student view via React Router (`/student/:id`)
- 🔁 Data managed with Redux (no backend persistence)
- 📦 Mock API using `jsonplaceholder.typicode.com`
- 🎨 Fully responsive layout with Tailwind CSS
- ⚡ Hosted on Vercel

---

### 🛠️ Tech Stack

- **React** (with Hooks)
- **Redux Toolkit**
- **React Router DOM**
- **Axios**
- **Tailwind CSS**
- **Vercel** (deployment)

---

### 📂 Folder Structure

```
src/
├── app/
│   └── store.js
├── assets/
├── componants/
│   ├── Card.jsx
│   └── CreateInputs.jsx
├── features/
│   └── studentSlice.js
├── pages/
│   ├── Home.jsx
│   └── User.jsx
├── App.css
├── App.jsx
├── index.css
├── main.jsx
```

---

### 🚀 Getting Started (Local Development)

1. **Clone the Repository**

   ```bash
   git clone https://github.com/safwanmohmd/students.git
   cd students
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Development Server**

   ```bash
   npm run dev
   ```

4. **Open in Browser**

   ```
   http://localhost:5173
   ```



### 🙌 Author

**Mohammed Safwan**Full stack Developer📍 Malappuram, Kerala

---

### 📜 License

This project is open-source and available under the [MIT License](LICENSE).
