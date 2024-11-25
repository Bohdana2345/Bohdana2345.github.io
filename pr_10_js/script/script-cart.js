const resources = {
    en: {
        translation: {
            "title": "You have chosen:",
            "item-name": "Product Name",
            "price-per-pc": "Price per Pc",
            "amount": "Quantity",
            "sum": "Total",
            "actions": "Actions",
            "go-back-button" : "Return to Shopping",
            "top-sale": "Top seller",
            "go-to-cart": "Go to Cart",
            "payment-button": "Payment"

        }
    },
    uk: {
        translation: {
            "title": "Ви обрали:",
            "item-name" : "Назва товару",
            "price-per-pc" : "Ціна за одиницю",
            "amount" : "Кількість",
            "sum" : "Сума",
            "actions" : "Дії",
            "go-back-button" : "Повернутись до покупок",
            "new" : "Новинка",
            "top-sale": "Хіт продажу",
            "go-to-cart": "Перейти у корзину",
            "payment-button": "Оплатити"
        }
    }
};

i18next.init({
    lng: 'en', 
    debug: true,
    resources
}, function (err, t) {
    if (err) return console.error(err);
    updateContent(); 
});

function updateContent() {
    document.getElementById('title').textContent = i18next.t('title');
    document.getElementById('item-name').textContent = i18next.t('item-name');
    document.getElementById('price-per-pc').textContent = i18next.t('price-per-pc');
    document.getElementById('amount').textContent = i18next.t('amount');
    document.getElementById('actions').textContent = i18next.t('actions');
    document.getElementById('sum').textContent = i18next.t('sum');
    document.getElementById('go-back-button').textContent = i18next.t('go-back-button');
    document.getElementById('payment-button').textContent = i18next.t('payment-button');
}
    
document.getElementById('language-selector').addEventListener('change', function () {
    const selectedLanguage = this.value;
    i18next.changeLanguage(selectedLanguage, () => {
        document.documentElement.lang = selectedLanguage; 
        updateContent(); 
        displayCartItems(); 
    });
});

let cartItems = [];
function initializeCartItems() {
    const storedString = localStorage.getItem('cartItems');
    if (storedString) {
        cartItems = storedString.split('|').map(item => {
            const [name, price, quantity] = item.split(':');
            return { 
                name, 
                price: parseFloat(price.replace(/[^\d.-]/g, '')),
                
                quantity: Number(quantity) 
            };
        });
    }
    console.log(cartItems);
}

function displayCartItems() {


    const cartTableBody = document.getElementById('cart-table-body');
    cartTableBody.innerHTML = ''; 

    if (cartItems.length === 0) {
        const emptyCartMessage = i18next.language === "en" 
            ? "Your cart is empty" 
            : "Корзина пуста";
        
        cartTableBody.innerHTML = `<tr><td colspan="5">${emptyCartMessage}</td></tr>`;
        updateTotal();
        return;
    }

    cartItems.forEach((item, index) => {
        const row = document.createElement('tr');
        const deleteButtonText = i18next.language === "en" ? "Delete" : "Видалити";
        let itemPrice = item.price;
        let itemCurrency = "грн";
        let itemTotal = item.price * item.quantity;
    
        if (i18next.language === "en") {
            const exchangeRate = 41.36; 
            itemPrice = item.price / exchangeRate;
            itemCurrency = "$";
            itemTotal = (item.price * item.quantity) / exchangeRate;
        }
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${itemPrice.toLocaleString(i18next.language === "en" ? 'en-US' : 'uk-UA', { 
                minimumFractionDigits: 2 
            })} ${itemCurrency}</td>
            <td>
                <input type="number" value="${item.quantity}" min="1" data-index="${index}" class="quantity-input">
            </td>
            <td>
                ${itemTotal.toLocaleString(i18next.language === "en" ? 'en-US' : 'uk-UA', { 
                    minimumFractionDigits: 2 
                })} ${itemCurrency}
            </td>
            <td>
                <button class="delete-item-button" data-index="${index}">${deleteButtonText}</button>
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
    } 
    else {
        const alertMessage = i18next.language === "en" 
            ? "Please enter a positive integer." 
            : "Будь ласка, введіть ціле додатнє число.";
        
        alert(alertMessage);
        event.target.value = cartItems[index].quantity; 
    }
}

function handleDeleteItem(event) {
    const index = event.target.dataset.index;

    const confirmMessage = i18next.language === "en" ? "Are you sure you want to delete this item?" : "Ви впевнені, що хочете видалити цей товар?";

    const isConfirmed = window.confirm(confirmMessage);

    if (isConfirmed) {
        cartItems.splice(index, 1);
        updateLocalStorage();
        displayCartItems();
    }
}

function updateTotal() {
    const totalElement = document.getElementById('total-price');
    const exchangeRate = 41.36; 
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    let formattedTotal;
    if (i18next.language === "en") {
        formattedTotal = `Total: ${(totalPrice / exchangeRate).toLocaleString('en-US', { 
            minimumFractionDigits: 2 
        })} $`;
    } else {
        formattedTotal = `Разом до оплати: ${totalPrice.toLocaleString('uk-UA')} грн`;
    }
    totalElement.textContent = formattedTotal;
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