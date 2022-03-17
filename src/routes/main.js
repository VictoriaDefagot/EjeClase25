const express = require('express');
const router = express.Router();
const path = require ('path');
const userAdm = require(path.join(__dirname, '../../middlewares/userAdm'));

const mainController = require(path.join(__dirname, '../controllers/mainController'));

router.get('/', mainController.index);
router.get('/admin', userAdm, mainController.adm);

module.exports = router;