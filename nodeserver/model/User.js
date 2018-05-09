const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const mongooseUniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  roles: [{type: String}]
});

UserSchema.pre('save', function (next) {
  var user = this;
  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        next(new Error('error gen salt'));
      } else {
        bcrypt.hash(user.password, salt, (err, hash) => {
          if (err) {
            next(new Error('error gen salt'));
          }
          user.password = hash;
          next();
        });
      }
    });
  } else {
    next();
  }
});

UserSchema.plugin(mongooseUniqueValidator);


const User = mongoose.model('User', UserSchema);


module.exports.User = User;
