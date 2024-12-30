function getDuration(startDate, endDate) {
  const startValue = new Date(startDate);
  const endValue = new Date(endDate);
  let duration =
    (endValue.getTime() - startValue.getTime()) / (1000 * 3600 * 24);
  if (duration == 0) {
    duration = 1;
  }

  if (duration >= 30) {
    return Math.floor(duration / 30) + " Bulan";
  } else {
    return duration + " Hari";
  }
}

module.exports = { getDuration };
