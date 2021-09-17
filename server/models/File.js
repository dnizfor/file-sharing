const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const File = new Schema({
  id: ObjectId,
  path: String,
  key: String,
});

module.exports = mongoose.model("File",File)