import { useState } from "react";

export default function useCalendar() {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(today);
  const [range, setRange] = useState({ start: null, end: null });
  const [hoverDate, setHoverDate] = useState(null);

  // 📅 Handle range selection
  function handleDateClick(date) {
    if (!range.start || (range.start && range.end)) {
      setRange({ start: date, end: null });
    } else {
      if (date < range.start) {
        setRange({ start: date, end: range.start });
      } else {
        setRange({ start: range.start, end: date });
      }
    }
  }

  // 📝 Notes state (array per date)
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("notes")) || {};
  });

  // ➕ Add note (multiple supported)
  function addNote(date, text) {
    const key = date.toDateString();

    const updated = {
      ...notes,
      [key]: [...(notes[key] || []), text],
    };

    setNotes(updated);
    localStorage.setItem("notes", JSON.stringify(updated));
  }

  // ❌ Delete note
  function deleteNote(date, index) {
    const key = date.toDateString();

    const updatedList = [...(notes[key] || [])];
    updatedList.splice(index, 1);

    const updated = {
      ...notes,
      [key]: updatedList,
    };

    setNotes(updated);
    localStorage.setItem("notes", JSON.stringify(updated));
  }

  return {
    currentMonth,
    setCurrentMonth,
    range,
    hoverDate,
    setHoverDate,
    handleDateClick,
    notes,
    addNote,
    deleteNote,
  };
}