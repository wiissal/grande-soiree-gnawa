const express = require('express');
const router = express.Router();
const {getEventInfo} = require('../controllers/eventController');

//get event information
router.get('/', getEventInfo);
module.exports = router;
 