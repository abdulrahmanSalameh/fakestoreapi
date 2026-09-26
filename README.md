# Fake Store API & Firebase CRUD 🛍️

A web training project built with HTML, CSS, and JavaScript. It combines products fetched from the Fake Store API with products stored in Firebase Realtime Database.

The project demonstrates API integration, DOM manipulation, pagination, and basic database operations.

## Features

- Fetch and display products from the Fake Store API.
- Display API and database products together.
- Paginate the combined list with six products per page.
- Add database products through a separate page.
- Receive database changes through a real-time listener.
- Edit database products using browser prompts.
- Soft-delete database products to hide them from the list.

Editing and deletion are available only for database products. API products are displayed without modification controls.

## How Soft Deletion Works

Clicking Delete sets the product's `isDeleted` field to `true`.

The record remains in Firebase, but the application filters it out of the displayed products. The current interface does not include a restore feature.

## Technologies

- HTML
- CSS
- JavaScript ES Modules
- Fetch API
- Firebase JavaScript SDK
- Firebase Realtime Database

## Project Files

- `index.html` — product listing and pagination container
- `app.js` — combines products, renders cards, and handles pagination and editing
- `api.js` — fetches products from the Fake Store API
- `database.js` — Firebase configuration and database operations
- `add-product.html` — product creation form
- `add-product.js` — handles form submission
- `style.css` — page styling

## Run Locally

1. Clone or download this repository.
2. Open the project folder in VS Code.
3. Create your own Firebase project, register a web app, and enable Realtime Database.
4. Replace `firebaseConfig` in `database.js` with your configuration, including `databaseURL`.
5. Configure Realtime Database rules for your intended development environment. Read and write access depend on these rules.
6. Start a local web server, such as the VS Code Live Server extension.
7. Open `index.html` through the server and use Add Product to create a database product.

Products are stored under the `products` path. The application creates product records when the form is submitted.

An internet connection is required for the external API and Firebase services.

## Project Scope

This is a training project focused on learning API integration and database operations. It is not a production-ready store.

The current version:

- Uses browser prompts for editing.
- Does not implement user authentication.
- Needs stronger input validation and network error handling.
- Does not include payment processing or order management.
- May display an empty page if deleting the last product on the final page reduces the number of available pages.

## Author

**Abdulrahman Salameh**

[GitHub](https://github.com/abdulrahmanSalameh) · [LinkedIn](https://www.linkedin.com/in/abdulrahman-ahmad-salameh/)
