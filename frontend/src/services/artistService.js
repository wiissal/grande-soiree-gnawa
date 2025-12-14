import { apiClient } from "./api";
import { ENDPOINTS } from "../constants/api";

export const artistService = {
  //get all artists
  getArtists: async () => {
    try {
      const response = await apiClient.get(ENDPOINTS.getArtists);
      return response.data;
    } catch (error) {
      console.error("Error fetching artists:", error);
    }
  },

  //get artist by ID
  getArtistsById: async (id) => {
    try {
      const response = await apiClient.get(ENDPOINTS.getArtistsById(id));
      return response.data;
    } catch (erro) {
      console.error("Error fetching artist:", error);
      throw error;
    }
  },
};
