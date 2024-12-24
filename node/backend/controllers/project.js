'use strict'

var Project = require('../models/projects');

var controller = {
  home: (req, res) => {
    return res.status(200).send({
      message: 'Hello, I am home page.'
    });
  },

  test: (req, res) => {
    console.log(req.body);
    return res.status(200).send({
      message: 'Hello, I am a test method..'
    });
  },

  saveProject: async (req, res) => {
    try {
      let project = new Project();

      let params = req.body;

      project.name = params.name;
      project.description = params.description;
      project.category = params.category;
      project.langs = params.langs;
      project.year = params.year;
      project.image = null;

      const projectStored = await project.save();

      return res.status(200).send({ project: projectStored });
    } catch (err) {
      return res.status(500).send({ message: 'Error saving document.' });
    }
  },

  getProject: async (req, res) => {
    try {
      let projectId = req.params.id;

      if (projectId == null) return res.status(500).send({ message: 'Error returning data.' });

      const project = await Project.findById(projectId);

      return res.status(200).send({ project });

    } catch (err) {
      return res.status(404).send({ message: 'The project does not exist.' });
    }
  },

  getProjects: async (req, res) => {
    try {
      const proyects = await Project.find();

      if (proyects.length === 0) return res.status(404).send({ message: 'No projects found.' });

      return res.status(200).send({ proyects });

    } catch (err) {
      return res.status(500).send({ message: 'Error retrieving projects.', error: err.message });
    }
  },

  updateProject: async (req, res) => {
    try {
      let projectId = req.params.id;
      let update = req.body;

      if (!projectId) return res.status(404).send({message: 'Id required for update.'});

      const updateProject = await Project.findByIdAndUpdate(projectId, update, { new: true });

      if (!updateProject) return res.status(404).send({ message: 'Project not found.' });

      return res.status(200).send({ project: updateProject });

    } catch (err) {
      return res.status(500).send({ message: 'Error updating project.', error: err.message });
    }
  }
}

// Export drivers
module.exports = controller;