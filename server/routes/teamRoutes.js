const express = require('express');
const Team = require('../models/TeamModels'); // Importing the User model

const team_routes = express.Router();

// Route to save a User
team_routes.post('/', async (request, response) => {
    try {
        // Destructuring the required fields from the request body
        const { team_name, members } = request.body;

        // Validating if all required fields are provided, else send a 400 Bad Request response
        if (!team_name || !members) {
            return response.status(400).send({
                message: 'Send all required fields.',
            });
        }

        // Creating a new user object with the provided data
        const newTeam = {
            team_name,
            members
        };

        // Creating a new user entry in the database using the User model
        const team = await Team.create(newTeam);

        // Sending a 201 Created response along with the created user object
        return response.status(201).send(team);
    } catch (error) {
        console.log(error); // Logging any errors to the console
        response.status(500).send({ message: error.message }); // Sending a 500 Internal Server Error response
    }
});



// Route to Get All Users from the database
team_routes.get('/', async (request, response) => {
    try {
        // Fetching all user entries from the database
        const teams = await Team.find();

        // Sending a 200 OK response with the count of teams and the user data as JSON
        return response.status(200).json({
            count: teams.length,
            data: teams,
        });
    } catch (error) {
        console.log(error); // Logging any errors to the console
        response.status(500).send({ message: error.message }); // Sending a 500 Internal Server Error response
    }
});

// Route to Get 1 User from the database by ID
team_routes.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        // Fetching a user entry by its ID from the database
        const team = await Team.findById(id);

        // Sending a 200 OK response with the user data as JSON
        return response.status(200).json(team);
    } catch (error) {
        console.log(error); // Logging any errors to the console
        response.status(500).send({ message: error.message }); // Sending a 500 Internal Server Error response
    }
});



// Route to delete a User
team_routes.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        // Deleting the user entry from the database by its ID
        const result = await Team.findByIdAndDelete(id);

        // If the user is not found, send a 404 Not Found response
        if (!result) {
            return response.status(400).json({ message: 'User not found' });
        }

        // Sending a 200 OK response with a success message as JSON
        return response.status(200).send({ message: 'User deleted successfully' });
    } catch (error) {
        console.log(error.message); // Logging any errors to the console
        response.status(500).send({ message: error.message }); // Sending a 500 Internal Server Error response
    }
});

module.exports = team_routes; // Exporting the user_router for use in other files