const express = require("express")
const Router = express.Router()
const File = require("../models/File")
const uniqid = require("uniqid")
const path = require("path")

Router.post('/upload', (req, res) => {

    let file = req.files.file

    if(file.size > 300000){
        res.json({ "status": false, "key": "file is too big" })
    }
    let key = uniqid()
    file.mv(path.resolve(__dirname, '../public/files', `${key}_${file.name}`))
    File.create({ "path": `public/files/${key}_${file.name}`, "key": key })
        .then(x => {
            res.json({ "status": true, "key": key })

        })
        .catch(err => {
            res.json({ "status": true, "key": key })
        })

    

})

Router.get("/download/:key", (req, res) => {
    File.findOne({ "key": req.params.key })
        .then(file => {
            if (file === null) {
                res.send("We dont have this file")
            }
            res.download(file.path)
        })
        .catch(err => {
            console.log(err)
        })

})

module.exports = Router