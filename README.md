# Goal App

This repository contains the source code for a Goal App build with MERN Stack, which is a web application for managing goals. It provides CRUD (Create, Read, Update, Delete) APIs with authentication middleware, custom error handling, JWT (JSON Web Tokens), and bcrypt for password hashing.

## Technologies Used

### Backend

- **Node.js**: A JavaScript runtime environment for executing JavaScript code server-side.
- **Express**: A web application framework for Node.js, providing robust features for building APIs.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **MongoDB**: A NoSQL database for storing data in a JSON-like format.
- **bcryptjs**: A library for hashing passwords securely.
- **jsonwebtoken**: A library for generating and verifying JSON Web Tokens.
- **nodemon**: A utility that automatically restarts the Node.js application when file changes are detected.

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for managing application state.
- **Redux Toolkit**: An official, opinionated, batteries-included toolset for efficient Redux development.

## Features

- **CRUD Operations**: Users can create, read, update, and delete goals.
- **Authentication Middleware**: Implements middleware for user authentication.
- **Custom Error Handler**: Provides a custom error handler for better error management.
- **JWT Authentication**: Utilizes JSON Web Tokens for authentication and authorization.
- **Password Hashing**: Uses bcrypt for securely hashing user passwords.

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install` in both the backend and frontend directories.
4. Set up your MongoDB database and configure the connection in the backend.
5. Start the backend server by running `npm start` or `npm run server` development with nodemon.
6. Start the frontend server by running `npm run dev`.

## License

This project is licensed under the MIT License.
