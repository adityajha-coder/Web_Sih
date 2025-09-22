// backend/server.js

// --- Import Core Modules ---
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

// --- Import Custom Modules ---
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

// --- Initial Configuration ---
// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB database
connectDB();

// Initialize Express app
const app = express();

// --- Middleware Setup ---
// Enable Cross-Origin Resource Sharing (CORS) to allow requests from your frontend
app.use(cors());

// Enable the Express app to parse JSON formatted request bodies
app.use(express.json());

// --- API Routes Setup ---
// All routes related to authentication (login, OTP) will be handled by authRoutes
app.use('/api/auth', require('./routes/authRoutes'));

// All routes related to civic reports (create, read, update) will be handled by reportRoutes
app.use('/api/reports', require('./routes/reportRoutes'));

// All miscellaneous routes (like the question form) will be handled by miscRoutes
app.use('/api/misc', require('./routes/miscRoutes'));

// --- Frontend Serving ---
// Serve the main HTML file for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'SIH_Civic.html'));
});

// Serve static assets from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));


// --- Error Handling Middleware ---
// Custom middleware to handle 404 Not Found errors
app.use(notFound);

// Custom middleware to handle all other errors
app.use(errorHandler);

// --- Start the Server ---
// Get the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Start listening for requests on the specified port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
