const express = require('express');
const router = express.Router();

const detailController = require('../controllers/detailController');

router.get('/:id', detailController.edit);
router.post('/:id', detailController.save);


module.exports = router;