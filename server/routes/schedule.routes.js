module.exports = app => {
  const schedules = require("../controllers/schedule.controller")

  var router = require('express').Router()

  router.post("/", schedules.create)

  app.use('/api/schedules', router)
}
