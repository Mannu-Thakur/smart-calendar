 import useCalendar from "./hooks/useCalendar";
import CalendarGrid from "./components/CalendarGrid";
import Header from "./components/Header";
import NotesPanel from "./components/NotesPanel";

 <img
  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  alt="calendar"
  className="w-full h-full object-cover"
/>

export default function App() {
  const calendar = useCalendar();

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="w-[900px] bg-white shadow-xl rounded-2xl overflow-hidden">
        
        {/* 🔥 TOP IMAGE */}
        {/* 🔥 PREMIUM HERO DESIGN */}
<div className="relative h-[280px] overflow-hidden rounded-t-2xl">

  {/* IMAGE */}
  <img
    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    alt="calendar"
    className="w-full h-full object-cover scale-105"
  />

  {/* DARK GRADIENT OVERLAY (depth) */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

  {/* SMOOTH CURVE (SVG instead of clip-path → much better) */}
  <svg
    className="absolute bottom-0 left-0 w-full"
    viewBox="0 0 1440 120"
    fill="white"
  >
    <path d="M0,80 C300,120 1100,0 1440,80 L1440,120 L0,120 Z" />
  </svg>

  {/* MODERN GLASS BLUE CARD */}
  <div className="absolute bottom-6 right-6 backdrop-blur-md bg-blue-500/90 text-white px-6 py-4 rounded-xl shadow-2xl">
    
    <div className="text-xs opacity-80 tracking-wide">
      {calendar.currentMonth.getFullYear()}
    </div>

    <div className="text-2xl font-semibold">
      {calendar.currentMonth.toLocaleString("default", {
        month: "long",
      })}
    </div>

  </div>

</div>

        {/* 🔥 BOTTOM SECTION */}
        <div className="flex">
          
          {/* 📝 LEFT → NOTES */}
          <div className="w-1/2 p-4 border-r">
            <NotesPanel
              selectedDate={calendar.range?.start}
              addNote={calendar.addNote}
              deleteNote={calendar.deleteNote}
              notes={calendar.notes}
            />
          </div>

          {/* 📅 RIGHT → CALENDAR */}
          <div className="w-1/2 p-4">
            <Header
              currentMonth={calendar.currentMonth}
              setCurrentMonth={calendar.setCurrentMonth}
            />

            <CalendarGrid {...calendar} />
          </div>
        </div>
      </div>
    </div>
  );
}

