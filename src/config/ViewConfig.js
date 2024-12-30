module.exports = (app, express, path, hbs) => {
  app.set("view engine", "hbs");
  app.set("views", path.join(__dirname, "../../src/views"));

  app.use("/assets", express.static(path.join(__dirname, "../../src/assets")));
  app.use("/images", express.static(path.join(__dirname, "../../src/uploads")));
  hbs.registerPartials(
    path.join(__dirname, "../../src/views/partials"),
    (err) => {
      if (err) {
        console.error("Error registering partials:", err);
      }
    }
  );
};
