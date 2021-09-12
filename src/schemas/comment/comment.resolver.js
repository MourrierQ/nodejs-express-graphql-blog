const mongoose = require('mongoose');
const Comment = mongoose.model('Comment');

module.exports = {
  Query: {
    getCommentsByPostId: (parent, {id}, context, info) => {
      const comments = Comment.find({post: id});
      return comments;
    }
  },
  Mutation: {
    createComment: (root, {user, content}, context, info) => {
      const comment = new Comment({user, content});
      return comment.save();
    }
  }
};