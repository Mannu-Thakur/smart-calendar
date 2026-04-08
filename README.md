# 📅 Smart Calendar App

A modern and interactive calendar application built using **React + Tailwind CSS**.  
It allows users to view monthly calendars, select dates, and add/delete notes with a clean UI.

---

## 🚀 Features

- 📆 Monthly calendar view
- 📝 Add and delete notes for any date
- 🔵 Selected date highlighting
- 📍 Today's date indicator
- 🎨 Weekend highlighting (Sat & Sun in blue)
- 🖼️ Hero section with dynamic month display
- ⚡ Smooth UI with Tailwind CSS
- 📱 Responsive layout

---

## 🖼️ Preview

 <img width="1439" height="1033" alt="Screenshot 2026-04-08 101812" src="https://github.com/user-attachments/assets/4efcd984-c920-4a18-ad33-3cecbae470c1" />


---

## 🛠️ Tech Stack

- React (Vite)
- Tailwind CSS
- JavaScript (ES6+)

---

## 📂 Project Structure

```
smart-calendar/
│── src/
│   ├── components/
│   │   ├── CalendarGrid.jsx
│   │   ├── DayCell.jsx
│   │   ├── Header.jsx
│   │   └── NotesPanel.jsx
│   ├── hooks/
│   │   └── useCalendar.js
│   ├── utils/
│   │   └── dateUtils.js
│   ├── App.jsx
│   └── main.jsx
│
│── public/
│── package.json
│── README.md
```

---

## ⚙️ Installation & Setup

```bash
git clone https://github.com/Mannu-Thakur/smart-calendar.git
cd smart-calendar
npm install
npm run dev
```

---

## 🧠 How It Works

- Calendar grid is generated dynamically based on selected month
- Previous & next month dates are shown for proper alignment
- Notes are stored per date using React state
- Each date cell visually reflects:
  - Current date
  - Selected date
  - Notes presence (red dot)

---

## ✨ Future Improvements

- Dark mode 🌙  
- Backend integration (persistent notes) ☁️  
- Date range selection 📅  
- Animations & transitions 🎯  

---

## 👨‍💻 Author

**Mannu Thakur**  
https://github.com/Mannu-Thakur

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
