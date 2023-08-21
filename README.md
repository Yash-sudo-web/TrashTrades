# TrashTrades - Trash Management and Collection Scheduling

Welcome to TrashTrades, This application solves the real-world issue of trash colllection scheduling and management that combines the power of the MERN (MongoDB, Express.js, React, Node.js) stack, along with TailwindCSS for styling, JWT auth tokens for authentication and geolocation api for location fetching.

## Table of Contents

- [Introduction](#introduction)
- [Preview](#preview)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This chat application allows users to create accounts, log in, and engage in real-time conversations with other users. The application uses the MERN stack, which is a popular choice for building full-stack web applications, along with TailwindCSS for easy and responsive styling. Passport.js provides user authentication, and Socket.io enables real-time communication between users.

## Preview

https://github.com/Yash-sudo-web/TrashTrades/assets/69838816/686cc422-e62e-4935-bfd0-102149d50f4b

## Technologies
 - MongoDB: NoSQL database for storing user data and chat messages.
 - Express.js: Web application framework for building the server.
 - React: Front-end library for building user interfaces.
 - Node.js: JavaScript runtime for server-side development.
 - JWT Tokens: Authentication Method.
 - TailwindCSS: Utility-first CSS framework for styling.
 - Axios: Promise-based HTTP client for making requests.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/): Make sure you have Node.js and npm (Node Package Manager) installed on your system.

## Installation

1. Clone this repository to your local machine using:

   ```bash
   git clone https://github.com/Yash-sudo-web/TrashTrades.git

2. Navigate to the project directory:

    ```bash
    cd TrashTrades

3. Navigate to the server directory and Install the server-side dependencies:

    ```bash
    cd server
    npm install

4. Navigate to the client directory and Install client-side dependencies:

    ```bash
    cd ..
    cd client
    npm install

## Configuration

1. Create a new .env file inside the server folder and add your environmental variables in the following order:

    ```bash
    SALT=""
    DB=""
    JWTPRIVATEKEY=""

## Usage

1. Start the client:

   ```bash
   npm start

2. Open a new terminal window/tab and navigate to the server directory and start the server:

    ```bash
    cd server
    npm start

3. Open your web browser and navigate to http://localhost:3000 to access the chat app.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow the usual GitHub fork and pull request workflow.

## License

This project is licensed under the [MIT License](https://github.com/Yash-sudo-web/TrashTrades/blob/master/LICENSE).
