import { useState } from "react";

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

  function handleAdd() {
    if (!text.trim()) return;

    addNote(selectedDate, text);
    setText("");
  }

  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-xl max-h-52 overflow-y-auto">
      {/* 📌 Title */}
      <h2 className="font-semibold mb-2">
        {selectedDate.toDateString()}
      </h2>

      {/* 📝 Existing Notes */}
      {dayNotes.map((note, index) => (
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
      ))}

      {/* ✍️ Input */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add note..."
        className="w-full border p-2 rounded-md mb-2 resize-none"
      />

      {/* ➕ Add Button */}
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
}