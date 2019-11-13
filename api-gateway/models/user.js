/*
============================================
; Author: Richard Krasso
; Modified by: Karie Funk
; Title: API Gateway
; Date: 10/27/2019
; Description: user.js
;===========================================
*/

//required module
var mongoose = require('mongoose');
//user schema
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
});

module.exports = mongoose.model('User', userSchema);

//user.save is used to add a new user in our database
module.exports.add = (user, callback) => {
    user.save(callback);
};

//getById
module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
};