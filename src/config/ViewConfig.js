module.exports = (app, express, path, hbs) => {
  app.set("view engine", "hbs");

  app.set("views", path.join(process.cwd(), "src", "views")); // Path menuju src/views

  // Menyajikan file statis (assets dan uploads)
  app.use("/assets", express.static(path.join(process.cwd(), "src", "assets")));
  app.use(
    "/images",
    express.static(path.join(process.cwd(), "src", "uploads"))
  );

  hbs.registerPartials(
    path.join(process.cwd(), "src", "views", "partials"),
    (err) => {
      if (err) {
        console.error("Error registering partials:", err);
      }
    }
  );
};
