function formatDate(value) {
  const date = new Date(value);
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return date.toLocaleDateString("id-ID", options);
}

module.exports = { formatDate };
