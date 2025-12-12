const {DataTypes} =require('sequelize');
const sequelize = require('../config/database');
 const Booking = sequelize.define('Booking', {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  confirmation_code:{
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  user_name:{
    type: DataTypes.STRING,
    allowNull: false,
    validation:{
      notEmpty:true,
    }
  },
  user_email:{
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      isEmail: true,
    }
  },
  quantity:{
    type: DataTypes.INTEGER,
    allowNull: false,
    validate:{
      min:1,
    }
  },
  total_price:{
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
  },
  booking_status:{
    type: DataTypes.ENUM('pending', 'confirmed','cancelled'),
    defaultValue: 'pending',
  },
  //link to artist table : foreign key
  artist_id:{
    type: DataTypes.INTIGER,
  },
},{
  timestamps: true,
  tableName: 'bookings',

  });
  module.exports = Booking;