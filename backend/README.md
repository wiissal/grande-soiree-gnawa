# La Grande Soirée Gnawa - Backend API

## 📱 Overview

REST API backend for the Gnawa music festival app. Built with Node.js, Express, and PostgreSQL.

**Features:**
- Browse artists
- View event information
- Create and track ticket bookings with confirmation code
- Confirm bookings by code or email

---

## 🛠️ Tech Stack

- **Node.js** - Runtime
- **Express.js** - Web framework
- **Sequelize** - ORM
- **PostgreSQL** - Database
- **CORS** - Cross-origin support

---

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/database.js           # DB connection
│   ├── models/                      # Sequelize models
│   │   ├── Artist.js
│   │   ├── EventInfo.js
│   │   ├── Booking.js
│   │   └── index.js (relationships)
│   ├── controllers/                 # Business logic
│   │   ├── artistController.js
│   │   ├── eventController.js
│   │   └── bookingController.js
│   ├── routes/                      # API endpoints
│   │   ├── artistRoutes.js
│   │   ├── eventRoutes.js
│   │   ├── bookingRoutes.js
│   │   └── index.js
│   ├── seeders/seed.js              # Sample data
│   └── server.js                    # Main app
├── .env                             # Environment variables
└── package.json
```

---

## ⚙️ Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Create .env File
```dotenv
PORT=3000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_NAME=gnawa_db
DB_USER=postgres
DB_PASSWORD=your_password_here
FRONTEND_URL=http://localhost:19000
JWT_SECRET=gnawa_secret_key_2025
```

### 3. Create Database
```bash
psql -U postgres
CREATE DATABASE gnawa_db;
```

### 4. Seed Database
```bash
npm run seed
```

### 5. Start Server
```bash
npm run dev
```

**Output:**
```
 Database synced successfully!
 Server running on http://localhost:3000
```

---

##  API Endpoints

### Health Check
```
GET /api/health
```

### Event
```
GET /api/event                          → Get event info
```

### Artists
```
GET /api/artists                        → Get all artists
GET /api/artists/:id                    → Get artist by ID
```

### Bookings
```
POST /api/bookings                      → Create booking
GET /api/bookings/:code                 → Get booking by code
GET /api/bookings/email/:email          → Get bookings by email
```

---

##  Database Schema

### Artists Table
| Field | Type | Notes |
|-------|------|-------|
| id | INTEGER | Primary Key |
| name | STRING | Artist name |
| bio | TEXT | Description |
| photo_url | STRING | Image URL |
| performance_time | TIME | When they perform |

### EventInfo Table
| Field | Type | Notes |
|-------|------|-------|
| id | INTEGER | Primary Key |
| event_name | STRING | Festival name |
| description | TEXT | Event description |
| location | STRING | Location (Agadir) |
| event_date | DATE | Festival date |
| total_tickets | INTEGER | Total tickets |
| available_tickets | INTEGER | Remaining tickets |
| ticket_price | DECIMAL | Price per ticket |
| image_url | STRING | Banner image |

### Bookings Table
| Field | Type | Notes |
|-------|------|-------|
| id | INTEGER | Primary Key |
| confirmation_code | STRING | Unique booking code |
| user_name | STRING | Booker name |
| user_email | STRING | Booker email |
| quantity | INTEGER | Number of tickets |
| total_price | DECIMAL | Total cost |
| booking_status | ENUM | pending/confirmed/cancelled |
| artist_id | INTEGER | Foreign Key → Artist |
| event_info_id | INTEGER | Foreign Key → EventInfo |

### Relationships
```
Artist (1) ──── (Many) Booking
EventInfo (1) ──── (Many) Booking
```

---

## 🧪 Testing

Use Postman collection: `https://wissaloa1-1100130.postman.co/workspace/8e0a797f-51f4-4ef2-8f75-ef6fcbda6dde/documentation/48967576-273668b6-14a0-4627-a35f-285af4ac45e5`

Import and test all endpoints.

---

## 📝 Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start server (dev mode) |
| `npm run start` | Start server (production) |
| `npm run seed` | Populate database |

---

**Version:** 1.0.0  
**Author:** Wissal  
**Date:** December 2025