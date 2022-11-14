const db = require("../models")
const Schedule = db.schedules
const Op = db.Sequelize.Op

// Create and Save anew Schedule
exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty"
    })
    return
  }

  const schedule = {
    name: req.body.name,
    date: req.body.date,
    time_start: req.body.time_start,
    time_end: req.body.time_end,
    description: req.body.description
  }

  Schedule.create(schedule).then(data => { res.send(data) }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occured while creating the Tutorial."
    })
  })
}
//Retrieve all Tutorials from the database
exports.findAll = (req, res) => {

}

//Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id
  Schedule.findByPk(id).then(data => {
    if (data) {
      res.send(data)
    } else {
      res.status(404).send({
        message: `Cannot find Schedule with id=${id}`
      })
    }
  })
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving Schedule with id=${id}`
      })
    })
}

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id

  Schedule.update(req.body, {
    where: { id: id }
  }).then(num => {
    if (num == 1) {
      res.send({
        message: "Tutorial was updated successfully."
      })
    } else {
      res.send({
        message: `Cannot update Schedule with id=${id}. maybe Schedule was not found or req.body is empty!`
      })
    }
  }).catch(err => {
    res.status(500).send({
      message: "Error updating Schedule with id = " + id
    })
  })
}

// delete schedule wwith the specified id in the request
exports.delete = (req, res) => {

}
// delete all schedules from the database
exports.deleteAll = (req, res) => { }

// find all published tutorials
exports.findAllPublished = (req, res) => { }


