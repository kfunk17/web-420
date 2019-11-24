/*
============================================
; Author: Richard Krasso
; Modified by: Karie Funk
; Title: API Gateway
; Date: 10/27/2019
; Description: config.js page
;===========================================
*/
var config = {};

config.web = {};

config.web.port = process.env.PORT || '3000';

config.web.secret = 'topsecret';


module.exports = config;

