import { API_BASE_URL, ENDPOINTS } from "../constants/api";

export const artistService = {
  getArtists: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}${ENDPOINTS.getArtists}`);
      const json = await response.json();
      return json.data.map(artist => ({
        ...artist,
        image: artist.photo_url,
        description: artist.bio,
      }));
    } catch (error) {
      console.error("Error fetching artists:", error);
      throw error;
    }
  },

  getArtistsById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}${ENDPOINTS.getArtistsById(id)}`);
      const json = await response.json();
      const artist = json.data;
      return {
        ...artist,
        image: artist.photo_url,
        description: artist.bio,
      };
    } catch (error) {
      console.error("Error fetching artist:", error);
      throw error;
    }
  },
};