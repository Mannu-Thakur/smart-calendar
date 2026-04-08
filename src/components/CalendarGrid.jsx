import DayCell from "./DayCell";

export default function CalendarGrid({
  currentMonth,
  range,
  handleDateClick,
  hoverDate,
  setHoverDate,
  notes,
}) {
  const startOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  );

  const endOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  );

  const startDay = (startOfMonth.getDay() + 6) % 7; // Monday start

  const days = [];

  // Previous month dates (faded)
  for (let i = startDay; i > 0; i--) {
    const d = new Date(startOfMonth);
    d.setDate(d.getDate() - i);
    days.push({ date: d, current: false });
  }

  // Current month
  for (let i = 1; i <= endOfMonth.getDate(); i++) {
    const d = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      i
    );
    days.push({ date: d, current: true });
  }

  // Next month (to fill grid)
  while (days.length % 7 !== 0) {
    const last = days[days.length - 1].date;
    const d = new Date(last);
    d.setDate(d.getDate() + 1);
    days.push({ date: d, current: false });
  }

  return (
    <>
      {/* ✅ WEEKDAY HEADER (FIXED) */}
      <div className="grid grid-cols-7 text-center text-gray-500 font-medium mb-2">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => (
          <div key={i} className={i >= 5 ? "text-blue-500" : ""}>
            {d}
          </div>
        ))}
      </div>

      {/* ✅ CALENDAR GRID */}
      <div className="grid grid-cols-7 gap-y-3 gap-x-2">
        {days.map((d, i) => {
          const key = d.date.toDateString();

          // ✅ FIX: correct note detection (removes ghost red dot)
          const dayNotes = notes[key];
          const hasNote = Array.isArray(dayNotes)
            ? dayNotes.length > 0
            : !!dayNotes;

          return (
            <DayCell
              key={i}
              date={d.date}
              isCurrentMonth={d.current}
              range={range}
              hoverDate={hoverDate}
              setHoverDate={setHoverDate}
              handleDateClick={handleDateClick}
              hasNote={hasNote}
            />
          );
        })}
      </div>
    </>
  );
}