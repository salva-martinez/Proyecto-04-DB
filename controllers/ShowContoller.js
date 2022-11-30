//Importo modelo de datos
const db = require("../models");
const shows = db.show;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 

var categoryModel  = require('../models').category;  //Add for dependency response

const ShowController = {}; //Create the object controller



//CRUD end-points Functions
//-------------------------------------------------------------------------------------
//GET all shows from database
ShowController.getAll = (req, res) => {
    
    shows.findAll({include: [{ model:categoryModel}]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving shows."
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET shows by Id from database
ShowController.getById = (req, res) => {
    const id = req.params.id;

    shows.findByPk(id, {include: [{ model:categoryModel}]})
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Show with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving shows with id=" + id
        });
      });
  };



//-------------------------------------------------------------------------------------
//CREATE a new show in database
ShowController.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Shows
    const newShow = {
      title: req.body.title,
      categoryId: req.body.categoryId
    };
  
    // Save Shows in the database
    shows.create(newShow)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Show."
        });
      });
  };


//-------------------------------------------------------------------------------------
//UPDATE a show from database
ShowController.update = (req, res) => {
    const id = req.params.id;
  
    shows.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Show was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Show with id=${id}. Maybe Show was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Show with id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET show by Title from database 
//FindByTitle
  ShowController.getByTitle = (req, res) => {
    shows.findAll({ where: { title: req.params.title } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };


//-------------------------------------------------------------------------------------
//DELETE a show by Id from database
ShowController.delete = (req, res) => {
    const id = req.params.id;
  
    shows.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Show was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Show with id=${id}. Maybe Show was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Movie with id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//DELETE all shows from database
//delete all shows
  ShowController.deleteAll = (req, res) => {
    shows.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Shows were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all shows."
        });
      });
  };

module.exports = ShowController;