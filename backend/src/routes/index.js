const express = require('express');
const router = express.Router();

//Import /organize all routes in one place
const artistRoutes = require('./artistRoutes');
const eventRoutes =require('./eventRoutes');
const bookingRoutes = require('./bookingRoutes');

//group endpoints
// /api/artists
router.use('/artists' ,artistRoutes);
// /api/events
router.use('/event' , eventRoutes);
// /api/bookings
router.use('/bookings' ,bookingRoutes);

module.exports = router;