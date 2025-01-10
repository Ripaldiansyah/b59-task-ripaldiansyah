function renderHome(req, res) {
  const user = req.session.user;
  return res.render("index", { user });
}

module.exports = { renderHome };
