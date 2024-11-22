document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.getElementById("product-container");
    const swipeLeft = document.createElement("div");
    swipeLeft.textContent = `<`;
    swipeLeft.classList.add("swipe", "swipe-left");
    productContainer.appendChild(swipeLeft);

    const swipeRight = document.createElement("div");
    swipeRight.textContent = `>`;
    swipeRight.classList.add("swipe", "swipe-right");
    productContainer.appendChild(swipeRight);

    fetch("https://bohdana2345.github.io/cards.json")
    .then((response) => response.json())
    .then((data) => {
        const title = document.createElement("h1");
        title.innerHTML = data.title;

        const productContainer = document.getElementById("product-container");
        productContainer.before(title);

        const products = data.products;
        products.forEach((product) => {
            const card = createProductCard(product);
            productContainer.appendChild(card);
        });

        initializeCartFunctions();
        initializeSwipeFunctions();
    })
    .catch((error) => console.error("Мяу, при завантаженні карток виникла помилка:", error));
});

function initializeSwipeFunctions() {
    const wrap = document.querySelector(".wrap"); 
    const cards = document.querySelectorAll(".wrap .card"); 
    const swipeLeft = document.querySelector(".swipe-left");
    const swipeRight = document.querySelector(".swipe-right");

    const cardsToShow = 4;
    let currentIndex = 1; 

    function updateVisibleCards() {
        // console.log(currentIndex);
        cards.forEach((card, index) => {
            if (index >= currentIndex && index < currentIndex + cardsToShow) {
                card.style.display = "flex"; 
                // console.log(`${index} видим`);
            } else {
                card.style.display = "none"; 
                // console.log(`${index} прихов`);
            }
        });

        if (currentIndex === 0) {
            swipeLeft.style.display = "none"; 
        } else {
            swipeLeft.style.display = "block"; 
        }

        if (currentIndex === cards.length - cardsToShow) {
            swipeRight.style.display = "none"; 
        } else {
            swipeRight.style.display = "block"; 
        }
    }

    swipeLeft.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateVisibleCards();
        }
    });

    swipeRight.addEventListener("click", () => {
        if (currentIndex < cards.length - cardsToShow) {
            currentIndex++;
            updateVisibleCards();
        }
    });
    updateVisibleCards();
}

function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("card");

    const header = document.createElement("div");
    header.classList.add("card-header");

    const title = document.createElement("div");
    title.classList.add("title");
    const categoryLink = document.createElement("a");

    if (product["category-link"]) {
        categoryLink.href = product["category-link"];
    } else {
        categoryLink.href = "#"; 
    }

    categoryLink.classList.add("category");
    categoryLink.textContent = product.category;
    title.appendChild(categoryLink);
    header.appendChild(title);

    const photoBlock = document.createElement("div");
    photoBlock.classList.add("photo-block");
    const photoLink = document.createElement("a");
    
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    img.classList.add("photo");
    photoLink.appendChild(img);
    photoBlock.appendChild(photoLink);

    const nameLink = document.createElement("a");
    if (product["name-link"]) {
        photoLink.href = product["name-link"];
        nameLink.href = product["name-link"];

    } else {
        photoLink.href = "#"; 
        nameLink.href = "#"; 
    }

    nameLink.classList.add("name");
    nameLink.textContent = product.name;

    const priceDiv = document.createElement("div");
    if (product.price === "Незабаром у продажу") {
        const newLabel = document.createElement("div");
        newLabel.classList.add("label", "new");
        newLabel.innerHTML = "новинка";
        card.appendChild(newLabel);
        const onSaleSoonDiv = document.createElement("div");
        onSaleSoonDiv.classList.add("on-sale-soon");
        onSaleSoonDiv.innerHTML = `<span class="on-sale-soon-text">незабаром у<br> продажі</span>`;
        priceDiv.appendChild(onSaleSoonDiv);
        // console.log(onSaleSoonDiv)
    } else {
        const formatPrice = (price) => {
            return new Intl.NumberFormat('uk-UA').format(price);
        };
    
        if (product.old_price) {
            // console.log(product.old_price);
            priceDiv.innerHTML = `
                <span class="old-price">${formatPrice(product.old_price)} грн</span> 
                <span class="price">${formatPrice(product.price)} грн</span>`;
        } else {
            priceDiv.innerHTML = `<span class="price">${formatPrice(product.price)} грн</span>`;
        }
        
    }

    if (product.ishit === true) {
        const topSaleLabel = document.createElement("div");
        topSaleLabel.classList.add("label", "top-sale");
        topSaleLabel.innerHTML = "хіт<br>продажів";
        card.appendChild(topSaleLabel);
    }

    const button = document.createElement("button");
    button.classList.add("sale-button");
    button.innerHTML = `<span class="sale-button-text">у корзину</span>`;

    card.appendChild(header);
    card.appendChild(photoBlock);
    card.appendChild(nameLink);
    card.appendChild(priceDiv);
    
    if (product.price !== "Незабаром у продажу") card.appendChild(button);

    return card;
}

// мяу функціонал корзини:


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

    function updateCartItemCount() {
        const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = cartItems.length;
    }
    
    function updateLocalStorage() {
        const cartString = cartItems.map(item => `${item.name}:${item.price}:${item.quantity}`).join('|');
        localStorage.setItem('cartItems', cartString);
    }
    
    
    
    function initializeCartFunctions() {
        initializeCartItems(); 
        updateCartItemCount(); 
    
        const saleButtons = Array.from(document.getElementsByClassName('sale-button'));
        saleButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                document.getElementById('quantity-input').value = ''; 
                const card = e.target.closest('.card');
                const productName = card.querySelector('.name').textContent.trim();
                const productPrice = parseFloat(card.querySelector('.price').textContent.replace(/\s+/g, '').replace(' грн', '').trim());
    
                document.getElementById('modal-quantity').classList.remove('hidden');
                document.getElementById('add-to-cart-confirm').dataset.productName = productName;
                document.getElementById('add-to-cart-confirm').dataset.productPrice = productPrice;
            });
        });

        const addToCartButton = document.getElementById('add-to-cart-confirm');


addToCartButton.replaceWith(addToCartButton.cloneNode(true));

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
        
                document.getElementById('modal-quantity').classList.add('hidden');
                document.getElementById('modal-message').textContent = 
                    `Товар "${productName}" додано до корзини в кількості ${quantity} шт.`;
                document.getElementById('modal-success').classList.remove('hidden');
            } else {
                quantityInputElement.value = ''; 
                quantityInputElement.placeholder = 'ціле додатнє число';
                quantityInputElement.classList.add('error'); 
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
    }
    
    document.addEventListener("DOMContentLoaded", () => {
        initializeCartFunctions();
    });

// document.addEventListener("DOMContentLoaded", () => {
//     const wrap = document.querySelector(".wrap"); // Контейнер для карток
//     const cards = document.querySelectorAll(".card"); // Усі картки
//     const swipeLeft = document.querySelector(".swipe-left"); // Кнопка свайп вліво
//     const swipeRight = document.querySelector(".swipe-right"); // Кнопка свайп вправо

//     const cardsToShow = 4; // Скільки карток відображати одночасно
//     let currentIndex = 0; // Індекс першої видимої картки

//     // Оновлення відображення карток
//     function updateVisibleCards() {
//         cards.forEach((card, index) => {
//             if (index >= currentIndex && index < currentIndex + cardsToShow) {
//                 card.style.display = "flex"; // Відображати картку
//             } else {
//                 card.style.display = "none"; // Ховати картку
//             }
//         });
//     }

//     // Обробник для свайпу вліво
//     swipeLeft.addEventListener("click", () => {
//         if (currentIndex > 0) {
//             currentIndex--;
//             updateVisibleCards();
//         }
//     });

//     // Обробник для свайпу вправо
//     swipeRight.addEventListener("click", () => {
//         if (currentIndex < cards.length - cardsToShow) {
//             currentIndex++;
//             updateVisibleCards();
//         }
//     });

//     // Початкове відображення карток
//     updateVisibleCards();
// });
// }
