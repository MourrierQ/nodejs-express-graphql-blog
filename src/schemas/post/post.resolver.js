const mongoose = require('mongoose');
const Post = mongoose.model('Post');

module.exports = {
  Query: {
   getPosts: (parent, {}, content, info) => {
     return Post.find({});
   }
  },
  Mutation: {
    createPost: (root, {title, content, user}, context, info) => {
      const post = new Post({title, content, user});
      return post.save();
    },
    updatePost: (root, {id, title, content}, context, info) => {
      const post = Post.find({_id: id});
      if(!post) return {error: "Post does not exist"};
      post.title = title;
      post.content = content;
      return post;
    }
  }
};