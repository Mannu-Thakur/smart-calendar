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
- 📱 Responsive layout  with festival ✨️ 

---

## 🖼️ Preview
<img width="1385" height="1057" alt="image" src="https://github.com/user-attachments/assets/5b24a3a6-c817-46b3-8b4b-2b4aa6c4825e" />



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

## LIVE DEMO
https://magenta-cobbler-a11e67.netlify.app/

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
