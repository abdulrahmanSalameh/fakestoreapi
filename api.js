export async function getApiProducts() {

    let response = await fetch("https://fakestoreapi.com/products");

    let data = await response.json();

    return data;
}