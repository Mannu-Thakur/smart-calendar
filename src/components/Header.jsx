export default function Header({ currentMonth, setCurrentMonth }) {
  const changeMonth = (dir) => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(currentMonth.getMonth() + dir);
    setCurrentMonth(newDate);
  };

  return (
    <div className="flex justify-between items-center p-4">
      <button onClick={() => changeMonth(-1)}>←</button>

      <h2 className="text-lg font-semibold">
        {currentMonth.toLocaleString("default", {
          month: "long",
          year: "numeric",
        })}
      </h2>

      <button onClick={() => changeMonth(1)}>→</button>
    </div>
  );
}