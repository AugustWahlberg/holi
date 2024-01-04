# Holidaze

This project is an accommodation booking application built using React. It provides both a customer-facing interface for booking accommodations and an admin interface for managing venues and bookings.

## Prerequisites

- Node.js
- NPM

## Getting Started

Install the dependencies and start the application:
```
npm install
npm start
```

The application should be running at [http://localhost:3000](http://localhost:3000).

## NPM Scripts

- `npm start`: Starts the application in development mode.
- `npm run build`: Builds the application for production.
- `npm run format`: Formats code with Prettier.

## Features and User Guide

- **View Venues**: A user can view a list of Venues. This can be accessed from the Home page, where all venues are listed.
- **Search Venues**: A user can search for a specific Venue. Use the search bar to find your desired venue.
- **Venue Details**: A user can view a specific Venue page by id. Click on a venue to see its details and available dates.
- **Venue Availability**: A user can view a calendar with available dates for a Venue. This feature is integrated into each Venue's detail page.
- **User Registration**: A user with a stud.noroff.no email may register as a customer or a Venue manager. Use the "Register" option to sign up.
- **Booking Management**: A registered customer can create and view their upcoming bookings.
- **Login/Logout**: Registered users can log in and out. Access these features using the "Login" or "Logout" options.
- **User Avatar**: Registered users can update their avatar. Change your user avatar in your profile settings.
- **Venue Management**: A registered Venue manager can create, update, and delete a Venue they manage, and view bookings for the Venues they manage. (not done yes)

## API

The application uses the Holidaze API as documented in the [Noroff API documentation](https://nf-api.onrender.com/docs/static/index.html). For more information about how to interact with the API, refer to the [API guide](https://docs.noroff.dev/).

## Testuser
- Manager:
Username: luxluxlux8
Email: luxluxlux8@stud.noroff.no
Password: luxluxlux8

- User:
Username: Luxclient8
Email: luxclient8@stud.noroff.no
Password: luxclient8