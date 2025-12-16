# La Grande Soirée Gnawa - Festival Booking App

A comprehensive mobile application for booking tickets to the Gnawa World Music Festival in Agadir, Morocco. Built with React Native and Node.js backend.

##  Overview

La Grande Soirée Gnawa is a full-stack mobile application that allows users to:
- Browse festival artists and their details
- View event information
- Book tickets for performances
- Manage their bookings
- Search through booking history

##  Tech Stack

### Frontend
- **React Native** - Mobile framework
- **Expo** - React Native development platform
- **React Navigation** - Navigation library
- **React Query** - Data fetching and caching
- **Zustand** - State management
- **Ionicons** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Sequelize** - ORM for database
- **PostgreSQL** - Database
- **CORS** - Cross-Origin Resource Sharing

##  Features

### Implemented Features
✅ Splash screen with 4-second delay
✅ Bottom tab navigation (Home, Artists, Bookings, Booking Form)
✅ Festival event display with details
✅ Browse all artists with search functionality
✅ Artist detail pages with performance times
✅ Book tickets with quantity selector
✅ View booking history by email
✅ Search bookings by confirmation code, name, or email
✅ Real-time API integration
✅ Professional UI/UX design

### Screens
1. **SplashScreen** - App initialization screen
2. **HomeScreen** - Festival overview with featured artists
3. **ArtistsListScreen** - Browse all performing artists with search
4. **ArtistDetailScreen** - Individual artist information
5. **BookingFormScreen** - Ticket booking with price calculation
6. **MyBookingsScreen** - View booking history

##  Project Structure
```
grande-soiree-gnawa/
├── frontend/
│   ├── src/
│   │   ├── screens/
│   │   │   ├── HomeScreen.js
│   │   │   ├── ArtistsListScreen.js
│   │   │   ├── ArtistDetailScreen.js
│   │   │   ├── BookingFormScreen.js
│   │   │   ├── MyBookingsScreen.js
│   │   │   └── SplashScreen.js
│   │   ├── components/
│   │   │   ├── EventCard.js
│   │   │   └── ArtistCard.js
│   │   ├── navigation/
│   │   │   └── Navigator.js
│   │   ├── services/
│   │   │   ├── artistService.js
│   │   │   ├── bookingService.js
│   │   │   └── eventService.js
│   │   ├── constants/
│   │   │   ├── colors.js
│   │   │   └── api.js
│   │   ├── stores/
│   │   │   └── useBookingStore.js
│   │   └── App.js
│   └── package.json
│
└── backend/
    ├── src/
    │   ├── controllers/
    │   │   ├── artistController.js
    │   │   ├── bookingController.js
    │   │   └── eventController.js
    │   ├── models/
    │   │   ├── Artist.js
    │   │   ├── Booking.js
    │   │   ├── EventInfo.js
    │   │   └── index.js
    │   ├── routes/
    │   │   ├── artistRoutes.js
    │   │   ├── bookingRoutes.js
    │   │   └── eventRoutes.js
    │   ├── config/
    │   │   └── database.js
    │   └── server.js
    ├── seed.js
    ├── .env
    └── package.json
```

##  Installation & Setup

### Prerequisites
- Node.js (v14+)
- npm or yarn
- PostgreSQL database
- Expo 

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=gnawa_festival
DB_USER=your_db_user
DB_PASSWORD=your_db_password
PORT=3000
FRONTEND_URL=http://192.168.x.x:8081
```

4. Seed the database:
```bash
node seed.js
```

5. Start the server:
```bash
npm start
```

Server runs on `http://localhost:3000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Update `src/constants/api.js` with your backend IP:
```javascript
export const API_BASE_URL = 'http://192.168.x.x:3000/api';
```

4. Start the development server:
```bash
npm start
```

5. Run on device:
- Press `a` for Android
- Press `i` for iOS

## 📡 API Endpoints

### Artists
- `GET /api/artists` - Get all artists
- `GET /api/artists/:id` - Get single artist

### Bookings
- `POST /api/bookings` - Create new booking
- `GET /api/bookings/:code` - Get booking by confirmation code
- `GET /api/bookings/email/:email` - Get bookings by email

### Event
- `GET /api/event` - Get event information

##  Design System

### Color Palette
```
deepTeal:     #1F4D4D
burntBronze:  #8B5A3C
warmSand:     #D4A574
mistGrey:     #A9A9A9
white:        #FFFFFF
black:        #000000
```

### Typography
- **Font**: Roboto (Android), SF Pro (iOS)
- **Headers**: 22px Bold
- **Body**: 14px Regular
- **Small**: 12px Regular

##  Database Schema

### Artists Table
- id (PRIMARY KEY)
- name
- bio
- photo_url
- performance_time
- timestamps

### Bookings Table
- id (PRIMARY KEY)
- confirmation_code (UNIQUE)
- user_name
- user_email
- quantity
- total_price
- booking_status (pending, confirmed, cancelled)
- artist_id (FOREIGN KEY)
- event_info_id (FOREIGN KEY)
- timestamps

### Event Info Table
- id (PRIMARY KEY)
- event_name
- description
- location
- event_date
- total_tickets
- available_tickets
- ticket_price
- image_url
- timestamps

##  Data Flow

1. **User opens app** → Splash screen (4s) → Home screen
2. **Browse artists** → ArtistsList with search → ArtistDetail
3. **Book tickets** → BookingForm with price calculation → Success confirmation
4. **View bookings** → MyBookings → Enter email → Search results



##  Contributors

- **Wissal** - Full Stack Developer
  
##  License

MIT License - feel free to use this project for learning purposes.

##  Support

For issues or questions, please open an issue on GitHub.

---


