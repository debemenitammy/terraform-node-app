const express = require('express');
const fs = require('fs');

const store = JSON.parse(fs.readFileSync('data.json'));
const router = express.Router();

const storeController = require('../controller/storeController');

router.route('/').get(storeController.getStore).delete(storeController.deleteStore);
 
module.exports = router;