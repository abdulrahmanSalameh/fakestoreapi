import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    onSnapshot,
    doc,
    updateDoc,
    deleteDoc
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC52EfpeQ8IuS2fYI4qpADoKbB0jsJz9a8",
    authDomain: "fakestoreapi-34fbe.firebaseapp.com",
    projectId: "fakestoreapi-34fbe",
    storageBucket: "fakestoreapi-34fbe.firebasestorage.app",
    messagingSenderId: "827435428604",
    appId: "1:827435428604:web:f409668df57b26d219c579",
    measurementId: "G-YHTGV9D278"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


let productsContainer = document.getElementById("productsContainer");


fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {

        data.map(product => {

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


            productsContainer.appendChild(card);

        })

    })


    let productForm = document.getElementById("productForm");

productForm.addEventListener("submit", async function(event) {

    event.preventDefault();


    let title = document.getElementById("productTitle").value;

    let price = document.getElementById("productPrice").value;

    let description = document.getElementById("productDescription").value;

    let image = document.getElementById("productImage").value;


    await addDoc(collection(db, "products"), {

        title: title,

        price: price,

        description: description,

        image: image

    });


    productForm.reset();

});


let firebaseProductsContainer =
    document.getElementById("firebaseProductsContainer");


onSnapshot(collection(db, "products"), function(snapshot) {

    firebaseProductsContainer.innerHTML = "";


    snapshot.forEach(function(productDoc) {

        let product = productDoc.data();

        let productId = productDoc.id;


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


        let updateButton = document.createElement("button");

        updateButton.textContent = "Update";


        let deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", async function() {

    await deleteDoc(
        doc(db, "products", productId)
    );

    });

    updateButton.addEventListener("click", async function() {

    let newTitle = prompt(
        "Enter new title:",
        product.title
    );


    let newPrice = prompt(
        "Enter new price:",
        product.price
    );


    let newDescription = prompt(
        "Enter new description:",
        product.description
    );


    let newImage = prompt(
        "Enter new image URL:",
        product.image
    );


    await updateDoc(
        doc(db, "products", productId),
        {

            title: newTitle,

            price: newPrice,

            description: newDescription,

            image: newImage

        }
    );

});


        card.appendChild(title);

        card.appendChild(price);

        card.appendChild(description);

        card.appendChild(image);

        card.appendChild(updateButton);

        card.appendChild(deleteButton);


        firebaseProductsContainer.appendChild(card);

    });

});