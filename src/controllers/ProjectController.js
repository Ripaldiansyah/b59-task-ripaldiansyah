const { Project, User, Testimoni } = require("../models");
const process = require("process");
const project = require("../models/project");

async function myProject(req, res) {
  try {
    const user = req.session.user;

    if (!user) {
      return res.redirect("/login");
    }
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
      where: {
        userId: user.id,
      },
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

    return res.render("my-project", { user, projects });
  } catch (error) {
    console.log(error);
  }
}
async function listProjects(req, res) {
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

    return res.render("list-projects", { user, projects });
  } catch (error) {
    console.log(error);
  }
}

async function store(req, res) {
  try {
    const user = req.session.user;
    if (!user) {
      return res.redirect("/login");
    }
    const { projectName, startDate, endDate, description, technologies } =
      req.body;

    let tempTech = technologies;
    if (!Array.isArray(technologies)) {
      tempTech = [technologies];
    }
    const { filename } = req.file;
    const imageUrl = `${process.env.BASE_URL}/images/${filename}`;

    await Project.create({
      projectName,
      startDate,
      endDate,
      description,
      technologies: tempTech,
      imageUrl,
      userId: user.id,
    });

    res.redirect("/projects");
  } catch (error) {
    console.log(error);
  }
}

async function edit(req, res) {
  try {
    const { projectName, startDate, endDate, description, technologies } =
      req.body;
    let tempTech = technologies;
    if (!Array.isArray(technologies)) {
      tempTech = [technologies];
    }
    let imageUrl;
    if (req.file) {
      const { filename } = req.file;
      imageUrl = `${process.env.BASE_URL}/images/${filename}`;
    }

    const oldProject = await findById(req, res);
    await Project.update(
      {
        projectName: projectName ?? oldProject.projectName,
        startDate: startDate ?? oldProject.startDate,
        endDate: endDate ?? oldProject.endDate,
        description: description ?? oldProject.description,
        technologies: tempTech ?? oldProject.technologies,
        imageUrl: imageUrl ?? oldProject.imageUrl,
        updatedAt: new Date(),
      },

      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.redirect("/projects#my-projects");
  } catch (error) {
    console.log(error);
  }
}

async function findById(req, res) {
  try {
    const project = await Project.findByPk(req.params.id, {
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

    return project;
  } catch (error) {
    console.log(error);
  }
}

async function getDetail(req, res) {
  try {
    const project = await findById(req, res);
    const user = req.session.user;
    if (project) {
      console.log(JSON.stringify(project, null, 2));
      return res.render("detail-project", { project, user });
    }

    return res.render("not-found", { user });
  } catch (error) {}
}

async function show(req, res) {
  try {
    const project = await findById(req, res);
    const user = req.session.user;
    if (!user) {
      return res.redirect("/login");
    }

    if (user.id !== project.userId) {
      return res.redirect("/");
    }
    return res.render("edit-project", { project, user });
  } catch (error) {}
}

async function destroy(req, res) {
  try {
    const project = await Project.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.redirect("/projects#my-projects");
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  myProject,
  store,
  getDetail,
  show,
  edit,
  destroy,
  listProjects,
};
