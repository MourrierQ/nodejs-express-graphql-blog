const mongoose = require('mongoose');
const {Schema} = mongoose;

const commentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  date: {
    type: Date,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  replies: [this]
});

module.exports = mongoose.model('Comment', commentSchema);