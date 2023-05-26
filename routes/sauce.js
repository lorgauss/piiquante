const express = require('express');
const router = express.Router();

const ctrlSauces = require('../controllers/sauce');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

//Liste des routes liées au parcours sauce
router.post('/', auth, multer, ctrlSauces.createSauce);
router.get('/:id', auth, ctrlSauces.getOneSauce);
router.get('/', auth, ctrlSauces.getAllSauces);
router.put('/:id', auth, multer, ctrlSauces.modifySauce);
router.delete('/:id', auth, ctrlSauces.deleteSauce);
router.post('/:id/like', auth, ctrlSauces.likeSauce);

module.exports = router;