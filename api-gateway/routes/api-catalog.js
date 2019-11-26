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

// POST request to register a user
router.post('/auth/register', auth_controller.user_register);

// POST request to login a user
router.post('/auth/login', auth_controller.user_login);

// POST request to logout a user
router.get('/auth/logout', auth_controller.user_logout);

// GET request to verify user token
router.get('/auth/token', auth_controller.user_token);

// Make the module available for other modules to require
module.exports = router;