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
  }
}

// Export drivers
module.exports = controller;