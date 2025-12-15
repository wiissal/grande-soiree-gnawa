import { apiClient } from "./api";
import { ENDPOINTS } from "../constants/api";

export const eventService = {
  //get event info
  getEvent: async () => {
    try {
      const response = await apiClient.get(ENDPOINTS.getEvent);
      return response.data;
    } catch (error) {
      console.error("Error fetching event:", error);
      throw error;
    }
  },
};
