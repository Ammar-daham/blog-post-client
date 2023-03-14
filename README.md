# Blog Post App

This is a full-stack web application for managing blog posts. It allows users to sign up, log in, create, view, update and delete blog posts, like and comment on posts, and view other users' profiles.

## Technologies Used
* React
* Redux Toolkit
* Node.js
* Express
* MongoDB
* Bootstrap

 ## Installation 
 You should use either `npm` or `yarn` but not both. It's recommended to use `yarn` 
 
 1. Clone or download the project repository from Github.
 2. Open the terminal and navigate to the project folder.
 3. Install the required Node.js modules by running the following command:
 
 ```bash
yarn install
```

or for npm 

```bash
npm install
```

4. Start the application:

 ```bash
yarn start
```

or for npm 

```bash
npm start
```
## Features
* Authentication and Authorization: Users can sign up for a new account or log in with an existing account. The app uses JSON Web Tokens (JWTs) for authentication and authorization. Users can only manage their own blog posts and are not authorized to perform actions on others' posts.
* Blog Posts: Users can create new blog posts or view and manage existing ones. Posts can be sorted by date or number of likes. Users can like and comment on posts.
* Profiles: Users can view other users' profiles and blog posts.
* Notifications: The app displays success and error messages using notifications, which are shown for a specified amount of time before disappearing.

## Architecture
The app follows the MERN stack architecture, which includes:

* MongoDB: The database used to store user and blog post data.
* Express: The web framework used to build the backend API.
* React: The frontend library used to build the user interface.
* Node.js: The server-side JavaScript runtime used to run the backend server.

The frontend and backend are separated into two different directories in the repository, and communicate with each other via API requests.

## Testing
The app includes unit and integration tests for the backend API routes and controllers, as well as the Redux code in the frontend. Tests are run using the Jest testing framework.

## Deploying

You can check out a live demo of the app deployed on Fly.io at the following URL:

- [https://summer-water-4667.fly.dev/](https://summer-water-4667.fly.dev/)

In this demo, you can sign up for a new account, log in with an existing one, create and delete blog posts, and like and comment on other users' posts. Note that the demo data is reset periodically, so any changes you make will not persist.

Give it a try and let me know what you think!
