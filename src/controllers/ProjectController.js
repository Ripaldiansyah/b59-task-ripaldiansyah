const { Project } = require("../models");
const process = require("process");

async function index(req, res) {
  try {
    const projects = await Project.findAll({
      order: [["createdAt", "DESC"]],
      raw: true,
    });

    res.render("my-project", { projects });
  } catch (error) {
    console.log(error);
  }
}

async function store(req, res) {
  try {
    const { projectName, startDate, endDate, description, technologies } =
      req.body;

    let tempTech = technologies;
    if (!Array.isArray(technologies)) {
      tempTech = [technologies];
    }
    const { filename } = req.file;
    const imageUrl = `${process.env.BASE_URL}/images/${filename}`;

    const project = await Project.create({
      projectName,
      startDate,
      endDate,
      description,
      technologies: tempTech,
      imageUrl,
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
      raw: true,
    });

    return project;
  } catch (error) {
    console.log(error);
  }
}

async function getDetail(req, res) {
  try {
    const project = await findById(req, res);
    if (project) {
      res.render("detail-project", { project });
    }
    res.render("not-found");
  } catch (error) {}
}

async function show(req, res) {
  try {
    const project = await findById(req, res);
    console.log(project);

    res.render("edit-project", { project });
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
module.exports = { index, store, getDetail, show, edit, destroy };
