var express = require('express');
var router = express.Router();

const elesiaController = require("../controller/elesia");
const mojangController = require("../controller/mojang");

/* GET home page. */
router.get('/', elesiaController);
router.get('/mojang', mojangController);

module.exports = router;
