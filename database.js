import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";

import {
    getDatabase,
    ref,
    push,
    onValue,
    update
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyC52EfpeQ8IuS2fYI4qpADoKbB0jsJz9a8",
    authDomain: "fakestoreapi-34fbe.firebaseapp.com",
    databaseURL: "https://fakestoreapi-34fbe-default-rtdb.firebaseio.com",
    projectId: "fakestoreapi-34fbe",
    storageBucket: "fakestoreapi-34fbe.firebasestorage.app",
    messagingSenderId: "827435428604",
    appId: "1:827435428604:web:f409668df57b26d219c579",
    measurementId: "G-YHTGV9D278"
};


const app = initializeApp(firebaseConfig);

const db = getDatabase(app);


// Add product
export async function addProduct(product) {

    let productsRef = ref(db, "products");

    await push(productsRef, {
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.image,
        isDeleted: false
    });
}


// Get products
export function getProducts(callback) {

    let productsRef = ref(db, "products");

    onValue(productsRef, function(snapshot) {

        let data = snapshot.val();

        if (!data) {
            callback([]);
            return;
        }

        let products = Object.entries(data).map(([id, product]) => {

            return {
                id: id,
                ...product
            };

        });

        callback(products);
    });
}


// Update product
export async function updateProduct(id, newData) {

    let productRef = ref(db, "products/" + id);

    await update(productRef, newData);
}


// Soft delete product
export async function softDeleteProduct(id) {

    let productRef = ref(db, "products/" + id);

    await update(productRef, {
        isDeleted: true
    });
}