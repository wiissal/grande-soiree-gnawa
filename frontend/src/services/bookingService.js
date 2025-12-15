import { API_BASE_URL, ENDPOINTS } from "../constants/api";

export const bookingService = {
  createBooking: async (bookingData) => {
    try {
      const response = await fetch(`${API_BASE_URL}${ENDPOINTS.createBooking}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });
      const json = await response.json();
      return json.data;
    } catch (error) {
      console.error("Error creating booking:", error);
      throw error;
    }
  },

  getBookingByEmail: async (email) => {
    try {
      const response = await fetch(`${API_BASE_URL}${ENDPOINTS.getBookingByEmail(email)}`);
      const json = await response.json();
      return json.data;
    } catch (error) {
      console.error("Error getting bookings:", error);
      throw error;
    }
  },

  getBookingByCode: async (code) => {
    try {
      const response = await fetch(`${API_BASE_URL}${ENDPOINTS.getBookingByCode(code)}`);
      const json = await response.json();
      return json.data;
    } catch (error) {
      console.error("Error fetching booking:", error);
      throw error;
    }
  },
};