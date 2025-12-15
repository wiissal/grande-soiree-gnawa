import { apiClient } from "./api";
import { ENDPOINTS } from "../constants/api";

export const bookingService = {
  //create new booking
  createBooking: async (bookingData) => {
    try {
      const response = await apiClient.post(
        ENDPOINTS.createBooking,
        bookingData
      );
      return response.data;
    } catch (error) {
      console.error("Error creating booking:", error);
      throw error;
    }
  },
  getBookingByEmail: async (email) => {
    try {
      const response = await apiClient.get(ENDPOINTS.getBookingByEmail(email));
      return response.data;
    } catch (error) {
      console.error("Error getting bookings : ", error);
      throw error;
    }
  },
  getBookingByCode: async (code) => {
    try {
      const response = await apiClient.get(ENDPOINTS.getbookingByCode(code));
      return response.data;
    } catch (error) {
      console.error("Error fetching artists:", error);
      throw error;
    }
  },
};
