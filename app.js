import { getApiProducts } from "./api.js";

import {
    getProducts,
    updateProduct,
    softDeleteProduct
} from "./database.js";


let productsContainer = document.getElementById("productsContainer");
let paginationContainer = document.getElementById("pagination");

let apiProducts = [];
let databaseProducts = [];

let currentPage = 1;
let productsPerPage = 6;


// Get products from Fake Store API
async function loadApiProducts() {

    apiProducts = await getApiProducts();

    renderProducts();
}


// Get products from Realtime Database
getProducts(function(products) {

    databaseProducts = products.filter(product => {
        return product.isDeleted !== true;
    });

    renderProducts();
});


// Combine API products and Database products
function getAllProducts() {

    let api = apiProducts.map(product => {
        return {
            ...product,
            source: "api"
        };
    });

    let database = databaseProducts.map(product => {
        return {
            ...product,
            source: "database"
        };
    });

    return [...api, ...database];
}


// Display products
function renderProducts() {

    let allProducts = getAllProducts();

    productsContainer.innerHTML = "";

    let start = (currentPage - 1) * productsPerPage;
    let end = start + productsPerPage;

    let productsForPage = allProducts.slice(start, end);

    productsForPage.forEach(product => {
        createProductCard(product);
    });

    renderPagination(allProducts.length);
}


// Create product card
function createProductCard(product) {

    let card = document.createElement("div");
    card.className = "card";


    let title = document.createElement("h2");
    title.textContent = product.title;


    let price = document.createElement("p");
    price.textContent = "Price: $" + product.price;


    let description = document.createElement("p");
    description.textContent = product.description;


    let image = document.createElement("img");
    image.src = product.image;


    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(description);
    card.appendChild(image);


    // Update and Delete only for Database products
    if (product.source === "database") {

        let updateButton = document.createElement("button");
        updateButton.textContent = "Update";


        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";


        updateButton.addEventListener("click", async function() {

            let newTitle = prompt("Enter new title:", product.title);
            let newPrice = prompt("Enter new price:", product.price);
            let newDescription = prompt("Enter new description:", product.description);
            let newImage = prompt("Enter new image URL:", product.image);


            if (
                newTitle === null ||
                newPrice === null ||
                newDescription === null ||
                newImage === null
            ) {
                return;
            }


            await updateProduct(product.id, {
                title: newTitle,
                price: newPrice,
                description: newDescription,
                image: newImage
            });

        });


        deleteButton.addEventListener("click", async function() {

            await softDeleteProduct(product.id);

        });


        card.appendChild(updateButton);
        card.appendChild(deleteButton);
    }


    productsContainer.appendChild(card);
}


// Pagination
function renderPagination(totalProducts) {

    paginationContainer.innerHTML = "";

    let totalPages = Math.ceil(totalProducts / productsPerPage);


    for (let i = 1; i <= totalPages; i++) {

        let button = document.createElement("button");

        button.textContent = i;


        button.addEventListener("click", function() {

            currentPage = i;

            renderProducts();

        });


        paginationContainer.appendChild(button);
    }
}


loadApiProducts();