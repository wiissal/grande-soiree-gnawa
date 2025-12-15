export const deepLinks = {
  artist: "gnawa://artist/:id",
  booking: "gnawa://booking/:code",
};

export const Linking = {
  prefixes: ["gnawa://", "https://gnawa.app/"],
  config: {
    screens: {
      "artist/[id]": "artist/:id",
      "booking/[code]": "booking/:code",
      "(tabs)": {
        screens: {
          index: "home",
          artists: "artists",
          bookings: "bookings",
        },
      },
    },
  },
};
