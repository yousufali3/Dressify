# Dressify

## Description

**Dressify** is a web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to virtually try on clothing by overlaying garment images onto their own photos. This platform offers a fun and interactive way to see how different outfits look on you before making a purchase, making online shopping more engaging and personalized.

## Features

- **User Authentication:** Secure user registration and login system using JWT.
- **Photo Upload:** Users can upload their own photos to use as a base image.
- **Garment Upload:** Upload images of garments to virtually try them on.
- **Realistic Overlays:** The application overlays the garment image onto the user's photo to create a realistic try-on experience.
- **Saved Outfits:** Save your favorite outfit combinations to your profile.
- **Responsive Design:** Fully responsive design for a seamless experience on both desktop and mobile devices.

## Tech Stack

### Frontend

- **React.js**
- **Tailwind CSS** for styling
- **Axios** for HTTP requests

### Backend

- **Node.js** with **Express.js**
- **MongoDB** with **Mongoose** for database management
- **Multer** for handling file uploads
- **JWT (JSON Web Token)** for authentication

## Installation

### Prerequisites

- **Node.js** and **npm** installed
- **MongoDB** installed and running

### Backend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/dressify.git
    cd dressify
    ```

2. Install backend dependencies:

    ```bash
    cd backend
    npm install
    ```

3. Create a `.env` file in the backend directory and add the following:

    ```env
    PORT=5000
    MONGO_URI=your_mongo_db_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Start the backend server:

    ```bash
    npm run dev
    ```

### Frontend Setup

1. Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2. Install frontend dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Register or log in to your account.
3. Upload a photo of yourself and a garment image.
4. Use the virtual fitting tool to see how the garment looks on you.
5. Save your favorite outfits to your profile.

## Contributing

We welcome contributions to **Dressify**! If you have an idea for a new feature or find a bug, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
