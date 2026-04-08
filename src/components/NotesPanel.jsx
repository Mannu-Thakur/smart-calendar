import { useState } from "react";
import festivals from "../utils/festivals";

export default function NotesPanel({
  selectedDate,
  notes,
  addNote,
  deleteNote,
}) {
  const [text, setText] = useState("");

  if (!selectedDate) {
    return (
      <div className="mt-4 text-gray-400 text-center">
        📅 Select a date to add notes
      </div>
    );
  }

  const key = selectedDate.toDateString();

  // 🔥 SAFE FIX (handles old + new data)
  const dayNotesRaw = notes[key] || [];
  const dayNotes = Array.isArray(dayNotesRaw)
    ? dayNotesRaw
    : [dayNotesRaw];

  // ✅ FIXED FESTIVAL LOGIC (NO TIMEZONE BUG)
  const getDateKey = (date) => {
    if (!date) return "";
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${month}-${day}`; // "MM-DD"
  };

  const festivalList = festivals[getDateKey(selectedDate)] || [];

  function handleAdd() {
    if (!text.trim()) return;

    addNote(selectedDate, text);
    setText("");
  }

  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-xl">
      
      {/* 📌 Title */}
      <h2 className="font-semibold mb-2">
        {selectedDate.toDateString()}
      </h2>

      {/* 📝 Existing Notes */}
      {dayNotes.length > 0 ? (
        dayNotes.map((note, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-100 p-2 rounded-md mb-2"
          >
            <span>• {note}</span>

            <button
              onClick={() => deleteNote(selectedDate, index)}
              className="text-red-500 text-sm hover:underline"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <div className="text-gray-400 text-sm mb-2">
          No notes yet
        </div>
      )}

      {/* ✍️ Input */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add note..."
        className="w-full border p-2 rounded-md mb-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows={2}
      />

      {/* ➕ Add Button */}
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Add
      </button>

      {/* 🎉 FESTIVALS */}
      {festivalList.length > 0 && (
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="text-sm font-semibold text-yellow-700 mb-1">
            🎉 Festivals
          </div>

          {festivalList.map((fest, i) => (
            <div key={i} className="text-sm text-yellow-800">
              • {fest}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}