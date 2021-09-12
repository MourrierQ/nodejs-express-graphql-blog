const mongoose = require('mongoose');
const {Schema} = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String
  },
  content:{
    type: String,
    required: true
  }

});

module.exports = mongoose.model('Post', postSchema);