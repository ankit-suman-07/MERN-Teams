const express = require('express');
const User = require('../models/UserModel'); // Importing the User model

const user_router = express.Router();

const PAGE_LIMIT = 20;
const PAGE = 3;

// Route to save a User
user_router.post('/', async (request, response) => {
    try {
        // Destructuring the required fields from the request body
        const { first_name, last_name, email, gender, avatar, domain, available } = request.body;

        // Validating if all required fields are provided, else send a 400 Bad Request response
        if (!first_name || !last_name || !email || !gender || !avatar || !domain || !available) {
            return response.status(400).send({
                message: 'Send all required fields',
            });
        }

        // Creating a new user object with the provided data
        const newUser = {
            first_name,
            last_name,
            email,
            gender,
            avatar,
            domain,
            available
        };

        // Creating a new user entry in the database using the User model
        const user = await User.create(newUser);

        // Sending a 201 Created response along with the created user object
        return response.status(201).send(user);
    } catch (error) {
        console.log(error); // Logging any errors to the console
        response.status(500).send({ message: error.message }); // Sending a 500 Internal Server Error response
    }
});

// Route to Get All Users from the database
user_router.get('/', async (request, response) => {
    try {
        // Fetching all user entries from the database
        const users = await User.find({}, null, { skip: PAGE * PAGE_LIMIT, limit: PAGE_LIMIT });

        // Sending a 200 OK response with the count of users and the user data as JSON
        return response.status(200).json({
            count: users.length,
            data: users,
        });
    } catch (error) {
        console.log(error); // Logging any errors to the console
        response.status(500).send({ message: error.message }); // Sending a 500 Internal Server Error response
    }
});

// Route to Get 1 User from the database by ID
user_router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        // Fetching a user entry by its ID from the database
        const user = await User.findById(id);

        // Sending a 200 OK response with the user data as JSON
        return response.status(200).json(user);
    } catch (error) {
        console.log(error); // Logging any errors to the console
        response.status(500).send({ message: error.message }); // Sending a 500 Internal Server Error response
    }
});

// Route to update a User
user_router.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const updatedUser = request.body; // Assuming request body contains updated user data

        // Updating the user entry in the database by its ID and returning the updated data
        const result = await User.findByIdAndUpdate(id, updatedUser, { new: true });

        // If the user is not found, send a 404 Not Found response
        if (!result) {
            return response.status(404).json({ message: 'User not found' });
        }

        // Sending a 200 OK response with the updated user data as JSON
        return response.status(200).send(result);
    } catch (error) {
        console.log(error.message); // Logging any errors to the console
        response.status(500).send({ message: error.message }); // Sending a 500 Internal Server Error response
    }
});

// Route to delete a User
user_router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        // Deleting the user entry from the database by its ID
        const result = await User.findByIdAndDelete(id);

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



module.exports = user_router; // Exporting the user_router for use in other files
