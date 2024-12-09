## Introduction

This full-stack application is designed to provide a seamless user experience with a responsive frontend and a secure, efficient backend. The application supports user authentication using JWT, ensuring that user data is protected and sessions are managed securely.

## Features

- **Full-Stack Development:** Complete integration of frontend and backend.
- **Secure Authentication:** Implements JWT for user authentication.
- **Password Encryption:** Ensures user passwords are stored securely.
- **API-Driven:** Robust APIs to handle various functionalities.
- **Scalable Architecture:** Designed to scale with increasing user demands.
- **Like Posts:** Users can like posts to show appreciation.
- **Post Creation:** Users can create new posts.
- **Edit Posts:** Users can edit their own posts.

## Technologies Used

### Frontend

- React.js
- HTML5
- SASS
- JavaScript

### Backend

- Node.js
- Express.js
- MongoDB (or any other database you used)
- JWT (JSON Web Tokens)

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB setup (or any other database)

### Steps to Install

1. Clone the repository

2. Navigate to the project directory
    ```sh
    cd backend
    ```
3. Install backend dependencies
    ```sh
    cd backend
    npm install
    ```
4. Install frontend dependencies
    ```sh
    cd frontend
    npm install
    ```
5. Configure environment variables in `.env` file for backend (e.g., database URI, JWT secret)

6. Run the backend server
    ```sh
    cd server
    node index.js
    ```
7. Run the frontend development server
    ```sh
    cd frontend
    npm run dev
    ```


3. Open your browser and navigate to `http://localhost:3000`

