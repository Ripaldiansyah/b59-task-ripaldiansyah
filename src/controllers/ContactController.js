function renderContact(req, res) {
  const user = req.session.user;
  return res.render("contact", { user });
}

module.exports = { renderContact };
