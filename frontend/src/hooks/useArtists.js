import { useQuery } from "@tanstack/react-query";
import { artistService } from "../services/artistService";
import { getFromStorage, saveToStorage } from "../utils/storage";

export const useArtists = () => {
  return useQuery({
    queryKey: ["artists"],
    queryFn: async () => {
      try {
        //try to fetch data from API
        const data = await artistService.getArtists();
        //save to offline storage
        await saveToStorage("artists", data);
        return data;
      } catch (error) {
        //if API fails get from offline storage
        const cachedData = await getFromStorage("artists");
        if (cachedData) return cachedData;
        throw error;
      }
    },
    staleTime: 1000 * 60 * 5,
  });
};
export const useArtistById = (id) => {
  return useQuery({
    queryKey: ['artists'. id],
    queryFn: async () => {
      try {
        //try to fetch  data from API
        const data = await artistService.getArtistsById(id);
        //Save to offline
        await saveToStorage(`artist-${id}`, data);
        return data;
      } catch (error) {
        //if API fails get data from offline storage
        const cachedData = await getFromStorage(`artist-${id}`);
        if (cachedData) return cachedData;
        throw error;
      }
    },
    staleTime: 1000 * 60 * 5,
  });
};
