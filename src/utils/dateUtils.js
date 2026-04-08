export function getMonthGrid(year, month) {
  const firstDay = new Date(year, month, 1);
  const lastDate = new Date(year, month + 1, 0).getDate();

  let startDay = firstDay.getDay();
  startDay = startDay === 0 ? 6 : startDay - 1;

  const days = [];

  // prev month
  const prevLast = new Date(year, month, 0).getDate();
  for (let i = startDay - 1; i >= 0; i--) {
    days.push({
      date: new Date(year, month - 1, prevLast - i),
      current: false,
    });
  }

  // current
  for (let i = 1; i <= lastDate; i++) {
    days.push({
      date: new Date(year, month, i),
      current: true,
    });
  }

  // next
  while (days.length < 42) {
    const nextDay = days.length - (startDay + lastDate) + 1;
    days.push({
      date: new Date(year, month + 1, nextDay),
      current: false,
    });
  }

  return days;
}

export function isSameDay(a, b) {
  if (!a || !b) return false;
  return a.toDateString() === b.toDateString();
}

export function isInRange(day, start, end) {
  if (!start || !end) return false;
  return day >= start && day <= end;
}