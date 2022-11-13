const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Schedule = sequelize.define("schedule", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.DATEONLY
    },
    time_start: {
      type: Sequelize.TIME
    },
    time_end: {
      type: Sequelize.TIME
    },
    description: {
      type: Sequelize.TEXT
    },

  })
  return Schedule
}