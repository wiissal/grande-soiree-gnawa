const {EventInfo} =require ('../models');

exports.getEventInfo = async (req,res) => {
  try{
    const event= await EventInfo.findOne();
    if(!event){
      return res.status(404).json({
        success: false,
        message: 'Event not found',
      });
    }
    res.status(200).json({
      success: true,
      data: event,
    });
  }catch (error){
    console.error('Error fetching event', error);
    res.status(500).json({
      success:false,
      message:'Error fetching event',
      error: error.message, 
    });
  }
};