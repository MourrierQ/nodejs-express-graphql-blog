const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const resolvers = {
  Query: {
    login: (parent, {input: {email, password}}, context, info) => {
      const user = User.find({email}); 
      if (user){
        user.comparePassword(password, function(err, isMatch){
          if (result) {
            user.token = jwt.sign({
              email
              }, process.env.JWT_SECRET, {
                expires: 60 * 60
            });
          }      
        });
        if(user.token){
          return {token: user.token};
        } else {
          return {error: "Wrong Username or password"};
        }
      }
      return {error: "Wrong Username or password"};
    }
  },
  Mutation: {
    createUser: (root, {input: {username, email, password}}, context, info) => {
      const user = new User({username, email, password});
      user.save();
      user.token = jwt.sign({
        email
      }, process.env.JWT_SECRET, {});

      return user;
    }
  }
};

module.exports = resolvers;