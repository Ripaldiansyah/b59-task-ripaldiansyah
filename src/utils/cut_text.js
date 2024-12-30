function cutText(description) {
  const isOver = isDescriptionOver(description);

  if (isOver) {
    return description.slice(0, 120);
  }

  return description;
}

function isDescriptionOver(description) {
  const isDescriptionOver = description.length > 120;
  return isDescriptionOver;
}

module.exports = { cutText, isDescriptionOver };
