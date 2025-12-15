const Artist = require('./Artist');
const EventInfo = require('./EventInfo');
const Booking = require('./Booking');

//one to many 1:N
Artist.hasMany(Booking, {
  foreignKey: 'artist_id',
  onDelete: 'CASCADE',
});
Booking.belongsTo(Artist, {
  foreignKey: 'artist_id',
});
EventInfo.hasMany(Booking, {
  foreignKey: 'event_info_id',
  onDelete: 'CASCADE',
});
Booking.belongsTo(EventInfo, {
  foreignKey: 'event_info_id',
});
module.exports={
  Artist,
  EventInfo,
  Booking,
};