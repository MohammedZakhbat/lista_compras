let products = [];

const input = document.getElementById("productInput");
const removeInput = document.getElementById("removeInput");

const list = document.getElementById("list");
const count = document.getElementById("count");
const last = document.getElementById("last");

function addProduct() {

    const value = input.value.trim();

    if (value === "") {
        alert("Escribe un producto");
        return;
    }

    products.push(value);

    input.value = "";

    updateUI();
}

function removeProduct() {

    if (products.length === 0) {
        alert("No hay productos");
        return;
    }

    const i = parseInt(removeInput.value) - 1;

    if (isNaN(i) || i < 0 || i >= products.length) {
        alert("Número inválido");
        return;
    }

    products.splice(i, 1);

    removeInput.value = "";

    updateUI();
}

function updateUI() {

    list.innerHTML = "";

    for (let i = 0; i < products.length; i++) {

        list.innerHTML += `
            <li class="flex justify-between bg-white border rounded-lg px-3 py-2 shadow-sm">
                <span>${i + 1}. ${products[i]}</span>
            </li>
        `;
    }

    count.textContent = products.length;

    last.textContent =
        products.length > 0
            ? products[products.length - 1]
            : "Ninguno";
}
