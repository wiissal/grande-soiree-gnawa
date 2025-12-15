import { create } from "zustand";
export const useBookingStore = create((set) => ({
  booking: {
    fullName: "",
    email: "",
    numberOfTickets: 1,
    totalPrice: 0,
    confirmationCode: "",
  },
  setFullName: (fullName) =>
    set((state) => ({
      booking: { ...state.booking, fullName },
    })),
  setEmail: (email) =>
    set((state) => ({
      booking: { ...state.booking, email },
    })),
  setNumberOfTickets: (numberOfTickets)=>
    set((state)=> ({
      booking: {...state.booking, numberOfTickets},
    })),
  setTotalPrice: (totalPrice)=> set ((state)=>({
    booking: {...state.booking, totalPrice},
  })),
    setConfirmationCode: (confirmationCode) => set((state) => ({
    booking: { ...state.booking, confirmationCode },
  })),
 resetBooking: () => set({
    booking: {
      fullName: '',
      email: '',
      numberOfTickets: 1,
      totalPrice: 0,
      confirmationCode: '',
    },
  }),
  }));
