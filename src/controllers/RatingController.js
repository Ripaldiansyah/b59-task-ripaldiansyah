const { Project } = require("../models");
const { Testimoni } = require("../models");
const { User } = require("../models");
const process = require("process");

function renderListProjectRated(req, res) {}

async function renderListProjectRating(req, res) {
  try {
    const user = req.session.user;
    const projects = await Project.findAll({
      order: [["createdAt", "DESC"]],

      include: [
        {
          model: User,
        },

        {
          model: Testimoni,
          as: "Testimonis",
        },
      ],
    });

    projects.forEach((project) => {
      const testimonis = project.Testimonis;

      if (testimonis && testimonis.length > 0) {
        const totalRate = testimonis.reduce(
          (sum, testimoni) => sum + testimoni.rate,
          0
        );
        const avgRate = totalRate / testimonis.length;
        const roundedAvg = Math.round(avgRate);
        project.avg = roundedAvg;
      } else {
        project.avg = 0;
      }
    });

    return res.render("list-projects-ratings", { user, projects });
  } catch (error) {
    console.log(error);
  }
}

async function renderFormRating(req, res) {
  try {
    const project = await Project.findByPk(req.params.id, {
      raw: true,
      include: User,
    });
    const user = req.session.user;
    if (project) {
      return res.render("form-rating", { project, user });
    }

    return res.render("not-found", { user });
  } catch (error) {}
}

async function store(req, res) {
  try {
    const user = req.session.user;
    const { name, comment, rating } = req.body;
    console.log(`ini param ${req.param.id}`);

    await Testimoni.create({
      name,
      comment,
      rate: rating,
      projectId: req.params.id,
    });

    res.redirect("/testimonials");
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  renderListProjectRated,
  renderFormRating,
  renderListProjectRating,
  store,
};
