# Fake Store API & Firebase CRUD 🛍️

A web training project built with HTML, CSS, and JavaScript to practice fetching API data, manipulating the DOM, and performing CRUD operations with Cloud Firestore.

## Features

- Fetch and display products from the Fake Store API.
- Show product titles, prices, descriptions, and images.
- Add products to a separate Cloud Firestore collection.
- Display Firestore products with real-time updates.
- Edit Firestore products using browser prompts.
- Delete products from Cloud Firestore.

## How It Works

The page displays two independent product collections:

1. **Fake Store API products:** fetched from an external API and displayed on the page.
2. **Firestore products:** created through the form and stored in a Firebase project.

Adding, editing, or deleting Firestore products does not change the products returned by the Fake Store API.

## Technologies

- HTML
- CSS
- JavaScript
- Fetch API
- Firebase JavaScript SDK
- Cloud Firestore

## Run Locally

1. Download or clone this repository.
2. Open the project folder in VS Code.
3. To use your own database, create a Firebase project with a web app and enable Cloud Firestore.
4. Replace the `firebaseConfig` values in `app.js` with your web app's configuration.
5. Configure Firestore access rules for your intended development environment. Database access depends on these rules.
6. Serve the project using a local web server, such as the VS Code Live Server extension.
7. Open `index.html` through the local server.

An internet connection is required for the external API and Firebase services.

## Project Scope

This is a learning project focused on API integration and basic database operations.

The current version uses browser prompts for editing and does not include user authentication. Input validation, network error handling, and mobile layouts are areas for further improvement.

## Files

- `index.html` — page structure and product form
- `style.css` — page and product card styling
- `app.js` — API requests, DOM updates, and Firestore operations

## Author

**Abdulrahman Salameh**

[GitHub](https://github.com/abdulrahmanSalameh) · [LinkedIn](https://www.linkedin.com/in/abdulrahman-ahmad-salameh/)
