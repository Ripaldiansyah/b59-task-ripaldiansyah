module.exports = (app, express, path, hbs) => {
  app.set("view engine", "hbs");
  app.set("views", path.join(__dirname + "../../views"));
  const rootDir = path.join(__dirname, "..", "..");

  app.use("/assets", express.static(path.join(rootDir, "assets")));
  app.use("/images", express.static(path.join(rootDir, "uploads")));

  // app.use("/assets", express.static(path.join(__dirname + "../../assets")));
  // app.use("/images", express.static(path.join(__dirname + "../../uploads")));
  hbs.registerPartials(path.join(__dirname + "../../views/partials"), (err) => {
    if (err) {
      console.error("Error registering partials:", err);
    }
  });
};
