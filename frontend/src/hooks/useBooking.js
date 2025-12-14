import { useQuery } from "@tanstack/react-query";
import { bookingService } from "../services/bookingService";
import { getFromStorage, saveToStorage } from "../utils/storage";

export const useBookingsByEmail = (email) => {
  return useQuery({
    queryKey: ["bookings", email],
    queryFn: async () => {
      try {
        const data = await bookingService.getBookingByEmail(email);
        await saveToStorage(`bookings-${email}`, data);
        return data;
      } catch (error) {
        const cachedData = await getFromStorage(`bookings-${email}`);
        if (cachedData) return cachedData;
        throw error;
      }
    },
  });
};
export const useBookingCode = (code) => {
  return useQuery({
    queryKey: ["bookings", code],
    queryFn: async () => {
      try {
        const data = await bookingService.getBookingByCode(code);
        await saveToStorage(`bookings-${code}`, data);
        return data;
      } catch (error) {
        const cachedData = await getFromStorage(`bookings-${code}`);
        if (cachedData) return cachedData;
        throw error;
      }
    },
    staleTime: 1000 * 60 * 5,
  });
};
