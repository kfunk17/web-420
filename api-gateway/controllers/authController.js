/*
============================================
; Author: Richard Krasso
; Modified by: Karie Funk
; Title: API Gateway
; Date: 10/27/2019
; Description: API Gateway Part I & II
;===========================================
*/

var User = require('../models/user');

exports.user_register = function(req, res) {
    res.send('NOT IMPLEMENTED: User registration POST');
};

exports.user_token = function(req, res) {
    res.send('NOT IMPLEMENTED: User token lookup GET');
};