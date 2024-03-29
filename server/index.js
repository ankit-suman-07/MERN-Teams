// Importing required modules and dependencies
const express = require('express'); // Express framework for handling HTTP requests
const mongoose = require('mongoose'); // MongoDB ODM for interacting with MongoDB database
require('dotenv').config(); // Dotenv for loading environment variables from a .env file
const userRoutes = require('./routes/teamRoutes'); // Importing user routes from userRoutes file
const teamRoutes = require('./routes/teamRoutes');
const cors = require('cors'); // CORS middleware for enabling cross-origin requests

// Retrieving MongoDB connection URI and server port from environment variables
const MONGO_DB_URI = process.env.MONGO_DB_URI; // MongoDB connection URI
const PORT = process.env.PORT || 5000; // Server port, defaults to 5000 if not specified in environment variables

const app = express(); // Creating an instance of Express application
app.use(cors()); // Enabling CORS for all routes in the application
app.use(express.json()); // Parsing incoming JSON requests

// Connecting to MongoDB database using the provided connection URI
mongoose.connect(MONGO_DB_URI, {
});

// Using userRoutes and gameRoutes for specific routes
app.use('/api/users', userRoutes); // Routes related to users
app.use('/api/teams', teamRoutes); // Routes related to users

// Route handler for the root endpoint, sending a simple response indicating the server is working
app.get('/', (req, res) => {
    res.send("Working teams Users and Games");
});

// Route handler for the '/users' endpoint, sending a response indicating users are displayed here
app.get('/users', (req, res) => {
    res.send("Users Displayed here");
});

// Route handler for the '/games' endpoint, sending a response indicating games are displayed here
app.get('/teams', (req, res) => {
    res.send("Teams Displayed here");
});

// Starting the server and listening on the specified port
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT); // Logging a message indicating the server is running
});
