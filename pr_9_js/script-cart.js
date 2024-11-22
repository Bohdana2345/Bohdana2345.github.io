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
function displayCartItems() {
    const cartTableBody = document.getElementById('cart-table-body');
    cartTableBody.innerHTML = ''; 

    if (cartItems.length === 0) {
        cartTableBody.innerHTML = '<tr><td colspan="5">Корзина пуста</td></tr>';
        updateTotal();
        return;
    }

    cartItems.forEach((item, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price.toLocaleString('uk-UA', { minimumFractionDigits: 0 })} грн</td>
            <td>
                <input type="number" value="${item.quantity}" min="1" data-index="${index}" class="quantity-input">
            </td>
            <td>
            ${(item.price * item.quantity).toLocaleString('uk-UA', { 
                minimumFractionDigits: 0, 
                maximumFractionDigits: 2 
            })} грн
            </td>
            <td>
                <button class="delete-item-button" data-index="${index}">Видалити</button>
            </td>
        `;

        cartTableBody.appendChild(row);
    });

    document.querySelectorAll('.delete-item-button').forEach(button => {
        button.addEventListener('click', handleDeleteItem);
    });

    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', handleQuantityChange);
    });

    updateTotal();
}

function handleQuantityChange(event) {

    const index = event.target.dataset.index;
    const newQuantity = Number(event.target.value);

    console.log(`Index: ${index}, New Quantity: ${newQuantity}`); 
    if (!isNaN(newQuantity) && newQuantity > 0 && Number.isInteger(newQuantity)) {
        cartItems[index].quantity = newQuantity;
        console.log(cartItems); 
        updateLocalStorage();
        displayCartItems();
    } else {
        alert('Будь ласка, введіть ціле додатнє число.');
        event.target.value = cartItems[index].quantity;
    }
}

function handleDeleteItem(event) {
    const index = event.target.dataset.index;

   
    const isConfirmed = window.confirm('Ви впевнені, що хочете видалити цей товар?');

    if (isConfirmed) {
        
        cartItems.splice(index, 1);
        updateLocalStorage();
        displayCartItems(); 
    }
}


function updateTotal() {
    const totalElement = document.getElementById('total-price');
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    totalElement.textContent = `Разом до оплати: ${totalPrice.toLocaleString('uk-UA')} грн`;
}


function updateLocalStorage() {
    const cartString = cartItems.map(item => `${item.name}:${item.price}:${item.quantity}`).join('|');
    localStorage.setItem('cartItems', cartString);
}


document.addEventListener('DOMContentLoaded', () => {
    initializeCartItems();
    displayCartItems();
});


window.addEventListener('DOMContentLoaded', displayCartItems);