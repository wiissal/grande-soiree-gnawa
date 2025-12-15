import { API_BASE_URL, ENDPOINTS } from "../constants/api";

export const eventService = {
  getEvent: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}${ENDPOINTS.getEvent}`);
      const json = await response.json();
      return json.data;
    } catch (error) {
      console.error("Error fetching event:", error);
      throw error;
    }
  },
};