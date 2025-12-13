const express =require('express');
const router = express.Router();
const { createBooking , getBookingByCode , getBookingsByEmail} = require('../controllers/bookingController');

//New Booking
router.post('/',createBooking);
//get booking by confirmation code 
router.get('/:code', getBookingByCode);
// get booking by email
router.get('/email/:email', getBookingsByEmail);

module.exports = router;