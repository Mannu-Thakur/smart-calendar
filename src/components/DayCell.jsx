export default function DayCell({
  date,
  isCurrentMonth,
  range,
  hoverDate,
  setHoverDate,
  handleDateClick,
  hasNote,
}) {
  const isStart = range.start?.toDateString() === date.toDateString();
  const isEnd = range.end?.toDateString() === date.toDateString();

  // ✅ FIX: proper in-range logic (prevents full grid selection)
  const inRange =
    range.start &&
    range.end &&
    date > range.start &&
    date < range.end;

  // ✅ today logic
  const today = new Date();
  const isToday = today.toDateString() === date.toDateString();

  // ✅ weekend check
  const day = date.getDay();
  const isWeekend = day === 0 || day === 6;

  return (
    <div
      onClick={() => handleDateClick(date)}
      onMouseEnter={() => setHoverDate(date)}
      className={`
        relative flex items-center justify-center
        h-12 w-12 mx-auto cursor-pointer rounded-full
        transition-all

        ${!isCurrentMonth ? "text-gray-300" : ""}
        ${isWeekend ? "text-blue-500" : ""}

        ${inRange ? "bg-blue-100" : ""}
        ${isStart || isEnd ? "bg-blue-500 text-white" : ""}

        ${isToday && !isStart && !isEnd ? "border-2 border-blue-500" : ""}
      `}
    >
      {date.getDate()}

      {/* 🔴 red dot */}
      {hasNote && (
        <span className="absolute bottom-1 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
      )}
    </div>
  );
}