const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Artist = sequelize.define('Arstist',{
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notEmpty:true,
    }
  },
  bio:{
    type:DataTypes.TEXT,
  },
  photo_url:{
    type:DataTypes.STRING,
  },
  performance_time:{
    type:DataTypes.TIME,
  },
},{
  timestamps: true,
  tableName: 'artists',
});
module.exports = Artist;
