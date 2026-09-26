import { addProduct } from "./database.js";


let productForm = document.getElementById("productForm");


productForm.addEventListener("submit", async function(event) {

    event.preventDefault();


    let product = {
        title: document.getElementById("productTitle").value,
        price: document.getElementById("productPrice").value,
        description: document.getElementById("productDescription").value,
        image: document.getElementById("productImage").value
    };


    await addProduct(product);


    productForm.reset();

    alert("Product added successfully");
});