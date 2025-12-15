const sequelize = require("../config/database");
const { Artist, EventInfo, Booking } = require("../models");

const generateConfirmationCode = () => {
  return "GNAWA--" + Math.random().toString(36).substring(2, 9).toUpperCase();
};
const seedDatabase = async () => {
  try {
    console.log("Syncing database");
    await sequelize.sync({ force: true }); //Drop old tables and recreate new ones
    console.log("Database synced");

    console.log("Seeding artists");
    const artists = await Artist.bulkCreate([
      {
        name: "Hamid El Kasri",
        bio: "Legendary Gnawa master musician known for his soulful guembri performances and spiritual depth",
        photo_url: "https://via.placeholder.com/300x300?text=Hamid+El+Kasri",
        performance_time: "19:00:00",
      },
      {
        name: "Hindi Zahra",
        bio: "International Gnawa sensation blending traditional rhythms with contemporary arrangements",
        photo_url: "https://via.placeholder.com/300x300?text=Hindi+Zahra",
        performance_time: "19:45:00",
      },
      {
        name: "Mehdi Quamom",
        bio: "Contemporary Gnawa artist bringing innovation while honoring traditional roots",
        photo_url: "https://via.placeholder.com/300x300?text=Mehdi+Quamom",
        performance_time: "20:30:00",
      },
      {
        name: "Oum",
        bio: "Powerful Moroccan vocalist fusing Gnawa with world music influences",
        photo_url: "https://via.placeholder.com/300x300?text=Oum",
        performance_time: "21:15:00",
      },
      {
        name: "Maalem Mahmoud Gania",
        bio: "Master of the guembri and spiritual Gnawa tradition from Tlemcen",
        photo_url: "https://via.placeholder.com/300x300?text=Mahmoud+Gania",
        performance_time: "22:00:00",
      },
      {
        name: "Marchane",
        bio: "Innovative Gnawa ensemble creating electrifying fusion performances",
        photo_url: "https://via.placeholder.com/300x300?text=Marchane",
        performance_time: "22:45:00",
      },
      {
        name: "Mehdi Nassouli",
        bio: "Talented Gnawa musician blending traditional and modern Gnawa sounds",
        photo_url: "https://via.placeholder.com/300x300?text=Mehdi+Nassouli",
        performance_time: "23:30:00",
      },
      {
        name: "Omar Hayat",
        bio: "Emerging Gnawa artist bringing fresh perspectives to traditional music",
        photo_url: "https://via.placeholder.com/300x300?text=Omar+Hayat",
        performance_time: "00:15:00",
      },
    ]);
    console.log(`${artists.length} artist created!`);
    
    console.log("Seeding event info");
    const event = await EventInfo.create({
      event_name: "La Grande Soirée Gnawa",
      description:
        "The ultimate celebration of Gnawa heritage featuring Morocco's greatest artists performing traditional and contemporary Gnawa music. An unforgettable night of cultural celebration in beautiful Agadir.",
      location: "Agadir, Morocco",
      event_date: new Date("2025-12-15 18:00:00"),
      total_tickets: 500,
      available_tickets: 500,
      ticket_price: 199.99,
      image_url: "https://via.placeholder.com/600x400?text=Gnawa+Festival",
    });
    console.log("Event info created");

    console.log("Seeding booking");
    await Booking.bulkCreate([
      {
        confirmation_code: generateConfirmationCode(),
        user_name: "Amal El-idrissi",
        user_email: "amal.elidrissi@gmail.com",
        quantity: 2,
        total_price: 399.98,
        booking_status: "confirmed",
        artist_id: artists[0].id, // Hamid El Kasri
        event_info_id: event.id,
      },
      {
        confirmation_code: generateConfirmationCode(),
        user_name: "Mohammed Benali",
        user_email: "mohammed@gmail.com",
        quantity: 1,
        total_price: 199.99,
        booking_status: "confirmed",
        artist_id: artists[1].id, // Hindi Zahra
        event_info_id: event.id,
      },
      {
        confirmation_code: generateConfirmationCode(),
        user_name: "Aisha malki",
        user_email: "aisha@gmail.com",
        quantity: 3,
        total_price: 599.97,
        booking_status: "pending",
        artist_id: artists[2].id, // Mehdi Quamom
        event_info_id: event.id,
      },
      {
        confirmation_code: generateConfirmationCode(),
        user_name: "Hassan Karim",
        user_email: "hassan@gmail.com",
        quantity: 1,
        total_price: 199.99,
        booking_status: "confirmed",
        artist_id: artists[3].id, // Oum
        event_info_id: event.id,
      },
      {
        confirmation_code: generateConfirmationCode(),
        user_name: "Sara pellele",
        user_email: "sara@gmail.com",
        quantity: 2,
        total_price: 399.98,
        booking_status: "confirmed",
        artist_id: artists[4].id, // Mahmoud Gania
        event_info_id: event.id,
      },
      {
        confirmation_code: generateConfirmationCode(),
        user_name: "Karim Elmir",
        user_email: "karim@gmail.com",
        quantity: 4,
        total_price: 799.96,
        booking_status: "confirmed",
        artist_id: artists[5].id, // Marchane
        event_info_id: event.id,
      },
    ]);
    console.log("Booking created");
    console.log("Database seeding completed successfully!");
    process.exit(0);
  } catch (error) {
    console.log("seeding failed:", error);
    process.exit(1);
  }
};
seedDatabase();
