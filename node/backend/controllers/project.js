'use strict'

var Project = require('../models/projects');
var fs = require('fs');
var path = require('path');

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
      const projects = await Project.find();

      if (projects.length === 0) return res.status(404).send({ message: 'No projects found.' });

      return res.status(200).send({ projects });

    } catch (err) {
      return res.status(500).send({ message: 'Error retrieving projects.', error: err.message });
    }
  },

  updateProject: async (req, res) => {
    try {
      let projectId = req.params.id;
      let update = req.body;

      if (!projectId) return res.status(404).send({ message: 'Id required for update.' });

      const updateProject = await Project.findByIdAndUpdate(projectId, update, { new: true });

      if (!updateProject) return res.status(404).send({ message: 'Project not found.' });

      return res.status(200).send({ project: updateProject });

    } catch (err) {
      return res.status(500).send({ message: 'Error updating project.', error: err.message });
    }
  },

  deleteProject: async (req, res) => {
    try {
      let projectId = req.params.id;

      let deleteProject = await Project.findByIdAndDelete(projectId);

      if (!deleteProject) return res.status(404).send({ message: 'Project not found.' });

      return res.status(200).send({ message: 'Project deleted successfully.', project: deleteProject });

    } catch (err) {
      return res.status(500).send({ message: 'Error deleting project.', error: err.message });
    }
  },

  uploadImage: async (req, res) => {
    try {
      var projectId = req.params.id;
      var fileName = 'Image not uploaded';

      if (req.files) {
        var filePath = req.files.image.path;
        var fileSplit = filePath.split('\\');
        fileName = fileSplit[1];
        var extSplit = fileName.split('\.');
        var fileExt = extSplit[1];

        if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif') {
          var project = await Project.findByIdAndUpdate(projectId, { image: fileName }, { new: true });

          if (!project) return res.status(404).send({ message: 'The project does not exist' });

          return res.status(200).send({ project: project });
        } else {
          fs.unlink(filePath, err => {
            return res.status(200).send({ message: 'The extension is not valid.', ext: fileExt })
          });
        }

      } else {
        return res.status(200).send({ message: fileName });
      }
    } catch (err) {
      return res.status(500).send({ message: 'The image has not been uploaded.' });
    }
  },

  getImageFile: (req, res) => {
    var file = req.params.image;
    var path_file = './uploads/' + file;

    fs.exists(path_file, exists => {
      if (exists) {
        return res.sendFile(path.resolve(path_file));
      } else {
        return res.status(200).send({ message: 'The image does not exist!' });
      }
    });
  }
}

// Export drivers
module.exports = controller;