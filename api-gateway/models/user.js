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