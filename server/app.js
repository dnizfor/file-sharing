
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
const mongoose = require('mongoose');
const fileupload = require("express-fileupload")

const Router = require("./routes/routes")


mongoose.connect('mongodb://localhost/my_database')
.then(x => console.log("db"))
.catch(err=>console.log(err))


app.use(cors())
app.use(fileupload())

app.use("/",Router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})