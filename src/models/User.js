const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },  
  email: {
    type: String,
    required: true,
    unique: true
  },  
  password: {
    type: String,
    required: true,
  },

});

userSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(saltRounds, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', userSchema);