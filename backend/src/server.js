const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/database');
const routes =  require('./routes');

const app = express();

app.use(express.json());
app.use(cors({ 
  origin: "*",
  // origin:process.env.FRONTEND_URL,  // React Native app URL
  credentials: true,
}));
//test routes to check if server is running 
app.get('/api/working', (req,res)=>{
  res.status(200).json({
    success: true,
    message: ' Server is running',
  });
});
app.use('/api', routes);
app.use((req,res)=>{
  res.status(404).json({
    success:false,
    message: 'Route not found',
  });
});
// start server 
const PORT = process.env.PORT || 3000;
const startServer = async()=>{
  try{
    await sequelize.sync({alter:true}); //sync database
    console.log('Database synced successfully')
    app.listen(PORT, ()=>{
      console.log(`Server running on http://localhost:${PORT}`);
      console.log(`Available endpoints:`);
      console.log(`Get  /api/working`);
      console.log(`Get  /api/event`);
      console.log(`Get  /api/artists`);
      console.log(`Get  /api/artists/:id`);
      console.log(`Post /api/bookings`);
      console.log(`Get  /api/bookings/:code`);
      console.log(`Get  /api/bookings/email/:email`);
    });
  }catch(error){
    console.error('Failed to start server: ', error);
    process.exit(1);
  }
};
startServer();
module.exports = app;