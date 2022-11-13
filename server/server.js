const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")
require('dotenv').config()

const app = express()

const db = require("./models")
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
})

var corsOptions = {
  origin: "http://localhost:8081/"
}

app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.json({ message: 'Welcome to Weekly Schedule Project Server.' })
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})