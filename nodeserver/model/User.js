const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    roles:[{ type:String}]
});

UserSchema.plugin(mongooseUniqueValidator);
const User = mongoose.model('User', UserSchema);


module.exports.User = User;
