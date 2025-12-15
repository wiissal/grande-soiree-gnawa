export const API_BASE_URL = 'http://localhost:5000/api';
export const ENDPOINTS ={
  //event
  getEvent: '/event',

  //artists 
  getArtists: '/artists',
  getArtistsById : (id) => `/artists/${id}`,

  //bookings
  createBooking: '/bookings',
  getBookingByEmail: (email) => `bookings/email/${email}`,
  getBookingByCode: (code) => `bookings/${code}`,
};