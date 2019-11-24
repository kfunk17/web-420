/*
============================================
; Author: Richard Krasso
; Modified by: Karie Funk
; Title: API Gateway
; Date: 10/27/2019
; Description: api-catalog.js
;===========================================
*/

/**
* API Routes
*/

var express = require('express');
var router = express.Router();
var auth_controller = require('../controllers/authController');

router.post('/auth/login', auth_controller.user_login);
router.post('/auth/register', auth_controller.user_register);

router.get('/auth/token', auth_controller.user_token);
router.get('/auth/logout', auth_controller.user_logout);

module.exports = router;