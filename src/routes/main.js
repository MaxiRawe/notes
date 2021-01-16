const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);

//CREAR NOTA
router.post('/', mainController.create);

//ELIMINAR NOTA
router.delete('/:id', mainController.delete);

module.exports = router;