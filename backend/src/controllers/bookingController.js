const { Booking } = require("../models");

const generateConfirmationCode = () => {
  return "GNAWA--" + Math.random().toString(36).substring(2, 9).toUpperCase();
};
// create new booking
exports.createBooking = async (req, res) => {
  try {
    //get data from request body (JSON)
    const { user_name, user_email, quantity, artist_id, event_info_id } =
      req.body;
    //Check required fields exists
    if (
      !user_name ||
      !user_email ||
      !quantity ||
      !artist_id ||
      !event_info_id
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }
    const ticket_price = 199.99; // fixed price could come from event info
    const total_price = ticket_price * quantity;

    //create new booking using sequelize method
    const booking = await Booking.create({
      confirmation_code: generateConfirmationCode(),
      user_name,
      user_email,
      quantity,
      total_price,
      booking_status: "confirmed",
      artist_id,
      event_info_id,
    });
    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: booking,
    });
  } catch (error) {
    console.error("Error creating new booking", error);
    res.status(500).json({
      success: false,
      message: "Error creating new booking",
      error: error.message,
    });
  }
};
//get booking by confirmation code 
exports.getBookingByCode = async (req, res) =>{
  try{
    const {code} = req.params;
    const booking = await Booking.findOne({
      where: {confirmation_code : code},
    });
    if (!booking){
      return res.status(404).json({
        success : false,
        message:'Booking not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Booking found successfully',
      data: booking,
    });
  }catch (error){
    console.error('Error fetching booking by code', error);
    res.status(500).json({
      success: false,
      message:' Error fetching booking by code',
      error: error.message,
    });
  }
};
//get booking by email
exports.getBookingsByEmail = async (req, res)=>{
  try{
    const {email} = req.params;
    const bookings = await Booking.findAll({
      where: {user_email : email}
    });
    if(bookings.length ===0){
      return res.status(404).json({
        success: false,
        message: 'No bookings found for this email',
      });
    }
    res.status(200).json({
      success: true,
      data : bookings,
    });
  } catch (error){
    console,error('Error fetching bookings by email', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching bookings',
      error: error.message,
    });
  }
};