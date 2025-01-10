module.exports = (app, express, path, hbs) => {
  app.set("view engine", "hbs");
  app.set("views", path.join(__dirname + "../../views"));
  // app.use("/assets", express.static(path.join(__dirname, "../../src/assets")));
  // app.use("/images", express.static(path.join(__dirname, "../../src/uploads")));
  app.use("/assets", express.static(path.join(__dirname, "../../assets")));
  app.use("/images", express.static(path.join(__dirname, "../../uploads")));
  hbs.registerPartials(path.join(__dirname + "../../views/partials"), (err) => {
    if (err) {
      console.error("Error registering partials:", err);
    }
  });
};
