# Yoga Master

This is a yoga class booking application. It allows users to explore different yoga classes, book a class, and manage their bookings. The application is split into a frontend and a backend. You can visit the webiste here [https://master-yoga.vercel.app/](https://master-yoga.vercel.app/)

# Frontend

The frontend of this is application built with React, TypeScript, and Tailwind CSS. The application is designed for booking yoga classes and has separate interfaces for users and admins.

## Features

-   **User Interface**: Users can register and log in to the application. They can view all available yoga classes, search for specific classes, and apply filters to narrow down their options. Users can also view detailed information about each class on a separate page and book their preferred yoga class.

-   **Admin Interface**: Admins can log in to a separate interface where they can view all yoga classes, search for specific classes, and apply filters. Admins also have the ability to add new yoga classes to the platform.

## Setup

-   Clone the repository to your local machine.

```
https://github.com/adnan25042001/yoga-booking-app.git
```

-   Install the dependencies.

```
npm install
```

## Running the Application

You can run the application using the following command in the root directory of the project:

```
npm run dev
```

# Backend

This is a backend application built with Node.js, Express.js, MongoDB, Mongoose, JWT, and bcrypt. The application is designed to manage user authentication and yoga class data for the Yoga Booking App.

## Models

The application contains two main models:

-   `User`: Represents the users of the application.
-   `YogaClass`: Represents the yoga classes that users can book.

## API Endpoints

The application provides several API endpoints:

-   `POST /auth/signup`: Register a new user.
-   `POST /auth/login`: Login a user.
-   `POST /auth/admin/login`: Login an admin.
-   `GET /yoga/getall`: Get all yoga classes (available for everybody).
-   `POST /yoga/add`: Add a new yoga class (only admin can add classes).
-   `GET /yoga/get/:id`: Get details of a specific yoga class (available for everybody).

## Setup

-   Clone the repository to your local machine.

```
https://github.com/adnan25042001/yoga-booking-app.git
```

-   Install the dependencies.

```
npm install
```

## Running the Application

You can run the application using the following command in the root directory of the project:

```
npm run dev
```

or

```
nodemon
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
