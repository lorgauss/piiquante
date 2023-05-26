const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

//Liste des routes liées au parcours utilisateur
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);


module.exports = router;