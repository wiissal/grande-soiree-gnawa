export const API_BASE_URL = 'http://192.168.0.228:3000/api';

export const ENDPOINTS = {
  getEvent: '/event',
  getArtists: '/artists',
  getArtistsById: (id) => `/artists/${id}`,
  createBooking: '/bookings',
  getBookingByEmail: (email) => `/bookings/email/${email}`,
  getBookingByCode: (code) => `/bookings/${code}`,
};