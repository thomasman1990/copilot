function calculateDaysBetweenDates(date1, date2) {
  return Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
}
