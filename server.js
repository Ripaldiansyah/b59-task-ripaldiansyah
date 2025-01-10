const express = require("express");
const app = express();

const path = require("path");
const hbs = require("hbs");
const session = require("express-session");

const projetsRouter = require("./src/routes/projects");
const contactRouter = require("./src/routes/contact");
const testimonialsRouter = require("./src/routes/testimonials");
const authRouter = require("./src/routes/auth");
const { renderHome } = require("./src/controllers/HomeController");
const { registerHelpers } = require("./src/config/handleBarsConfig");

require("./src/config/ViewConfig")(app, express, path, hbs);
require("./src/config/expressConfig")(app, express);
require("dotenv").config();
const port = process.env.PORT || 8080;
registerHelpers(hbs);
app.use(express.static("public"));
app.use(
  session({
    name: "my-session",
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", renderHome);
app.use("/projects", projetsRouter);
app.use("/contacts", contactRouter);
app.use("/testimonials", testimonialsRouter);
app.use("/", authRouter);
app.use((req, res) => {
  res.redirect("/");
});
app.listen(port, () => {
  console.log(`yeay connect ${port}`);
});
