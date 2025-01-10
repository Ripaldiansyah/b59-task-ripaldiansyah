const { User } = require("../models");
const bcrypt = require("bcrypt");

function renderLogin(req, res) {
  res.render("login");
}

function renderRegister(req, res) {
  res.render("register");
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const isRegistered = await findByEmail(req, res);

    if (isRegistered == null) {
      const response = {
        message: "Email belum terdaftar",
        email: email,
        status: "invalid email",
      };
      return res.render("login", { response }); //belum ke daftar
    }

    const passwordHash = isRegistered.password;

    bcrypt.compare(password, passwordHash, (err, result) => {
      if (result) {
        let userWithoutPassword = { ...isRegistered };
        delete userWithoutPassword.password;
        req.session.user = userWithoutPassword;
        return res.redirect("/");
      }
      const response = {
        message: "Password salah",
        email: email,
        status: "invalid password",
      };
      return res.render("login", { response }); //pw salah
    });
  } catch (error) {
    console.log(error);
  }
}

function logout(req, res) {
  req.session.destroy();
  res.redirect("/");
}

async function register(req, res) {
  try {
    const isRegistered = await findByEmail(req, res);
    const { password, confirmPassword } = req.body;

    if (isRegistered) return handleRegistered(req, res);
    if (password != confirmPassword) return handlePasswordNotMatch(req, res);
    const project = await handleRegister(req);
    if (project) return successRegister(res);
  } catch (error) {
    console.log(error);
  }
}

function handleRegistered(req, res) {
  const response = {
    message: "Email telah terdaftar",
    data: req.body,
    status: "email registered",
  };
  return res.render("register", { response });
}

function handlePasswordNotMatch(req, res) {
  const response = {
    message: "Password tidak sama",
    data: req.body,
    status: "password not match",
  };
  return res.render("register", { response });
}

async function handleRegister(req) {
  const { fullname, role, email, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);

  return await User.create({
    name: fullname,
    email,
    role,
    password: passwordHash,
  });
}

function successRegister(res) {
  const response = {
    message: "Berhasil mendaftarkan akun",
    status: "success",
  };
  return res.render("register", { response });
}

async function findByEmail(req, res) {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      raw: true,
    });

    return user ? user : null;
  } catch (error) {
    console.log(error);
  }
}
module.exports = { renderLogin, renderRegister, login, register, logout };
