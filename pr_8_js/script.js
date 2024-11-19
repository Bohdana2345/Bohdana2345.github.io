// function showMessage() {
//     var overlay = document.getElementById('overlay');
//     overlay.style.display = 'flex';
// }

// function closeMessage() {
//     var overlay = document.getElementById('overlay');
//     overlay.style.display = 'none';
// }

// let cart = document.getElementById('cart-button');
// cart.addEventListener("click", ()=>{

// }


// )

let cartItems = [];

function initializeCartItems() {
    const storedString = localStorage.getItem('cartItems');
    if (storedString) {
        cartItems = storedString.split('|').map(item => {
            const [name, price, quantity] = item.split(':');
            return { name, price: parseFloat(price), quantity: Number(quantity) };
        });
    }
}


window.addEventListener('DOMContentLoaded', () => {
    initializeCartItems();
    updateCartItemCount(); 
    // displayCartItems();    
});


let saleButtons = Array.from(document.getElementsByClassName('sale-button'));
console.log(saleButtons)
saleButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const card = e.target.closest('.card');
        const productName = card.querySelector('.name').textContent.trim();
        const productPrice = parseFloat(card.querySelector('.price').textContent.replace(/\s+/g, '').replace(' грн', '').trim());

        document.getElementById('modal-quantity').classList.remove('hidden');
        document.getElementById('add-to-cart-confirm').dataset.productName = productName;
        document.getElementById('add-to-cart-confirm').dataset.productPrice = productPrice;
    });
});

document.getElementById('add-to-cart-confirm').addEventListener('click', () => {
    const productName = document.getElementById('add-to-cart-confirm').dataset.productName;
    const productPrice = parseFloat(document.getElementById('add-to-cart-confirm').dataset.productPrice);
    const quantityInputElement = document.getElementById('quantity-input');
    const quantityInput = quantityInputElement.value.trim();
    const quantity = Number(quantityInput);

    if (!isNaN(quantity) && quantity > 0 && Number.isInteger(quantity)) {
        const existingItem = cartItems.find(item => item.name === productName);
        if (!existingItem) {
            cartItems.push({ name: productName, price: productPrice, quantity });
        } else {
            existingItem.quantity += quantity;
        }

        updateCartItemCount();
        updateLocalStorage(); 

        quantityInputElement.value = ''; 
        document.getElementById('modal-quantity').classList.add('hidden');
        document.getElementById('modal-message').textContent = 
            `Товар "${productName}" додано до корзини в кількості ${quantity} шт.`;
        document.getElementById('modal-success').classList.remove('hidden');
    } else {
        alert('Будь ласка, введіть ціле додатнє число.');
        quantityInputElement.value = ''; 
    }
});

document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('quantity-input').value = ''; 
    document.getElementById('modal-quantity').classList.add('hidden');
});


document.getElementById('go-to-cart').addEventListener('click', () => {
    window.location.href = 'cart.html'; 
});

document.getElementById('continue-shopping').addEventListener('click', () => {
    document.getElementById('modal-success').classList.add('hidden'); 
});

document.getElementById('cart-button').addEventListener('click', () => {
    if (cartItems.length === 0) {
        document.getElementById('empty-cart-modal').classList.remove('hidden');
    } else {
        window.location.href = 'cart.html';
    }
});


document.getElementById('close-empty-cart-modal').addEventListener('click', () => {
    document.getElementById('empty-cart-modal').classList.add('hidden');
});

function updateLocalStorage() {
    const cartString = cartItems.map(item => `${item.name}:${item.price}:${item.quantity}`).join('|');
    localStorage.setItem('cartItems', cartString);
}


// window.addEventListener('DOMContentLoaded', displayCartItems);

function updateCartItemCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cartItems.length; 
}











