const {DataTypes} = require ('sequelize');
const sequelize = require ('../config/database');
 const EventInfo = sequelize.define ('EventInfo', {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  event_name:{
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      notEmpty: true, 
    }
  },
  description:{
    type: DataTypes.TEXT,
  },
  location:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  event_date:{
    type: DataTypes.DATE,
    allowNull: false,
  },
  total_tickets:{
    type: DataTypes.INTEGER,
    allowNull: false,
    validate:{
      min:1,
    }
  },
  available_tickets:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ticket_price:{
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
  },
  image_url:{
    type: DataTypes.STRING,
  },
},{
  timetamps: true,
  tableName: 'event_info',
 });
 module.exports = EventInfo;