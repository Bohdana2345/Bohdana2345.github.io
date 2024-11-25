const resources = {
    en: {
        translation: {
            "title": "be sure to confirm your order",
            "sale-button-text" : "add to cart",
            "on-sale-soon-text" : `coming<br>soon`,
            "category-military" : "For the Military",
            "category-aerial-photography" : "For Aerial Photography",
            "category-fishing" : "For Fishing",
            "category-household" : "For Household Use",
            "new" : "New",
            "top-sale": "Top seller",
            "go-to-cart": "Go to Cart",
            "continue-shopping": "Continue Shopping",
            "modal-content-text": "Enter quantity:",
            "add-to-cart-confirm": "Add to Cart",
            "empty-cart-modal-text": "Cart is empty",
            "close-empty-cart-modal": "Close",
        }
    },
    uk: {
        translation: {
            "title": "обов'язково додайте своє замовлення",
            "sale-button-text" : "у корзину",
            "on-sale-soon-text" : "незабаром у продажі",
            "category-military" : "Для військових",
            "category-aerial-photography" : "Для аерофотозйомки",
            "category-fishing" : "Для риболовлі",
            "category-household" : "Для військових",
            "new" : "Новинка",
            "top-sale": "Хіт продажу",
            "go-to-cart": "Перейти у корзину",
            "continue-shopping": "Продовжити покупки",
            "modal-content-text": "Введіть кількість товару:",
            "add-to-cart-confirm": "Додати до корзини",
            "empty-cart-modal-text": "Корзина пуста",
            "close-empty-cart-modal": " Закрити",
        }
    }
};

function updateContent() {
    document.getElementById('title').textContent = i18next.t('title');
    document.querySelectorAll('.sale-button-text').forEach(element => {
        element.textContent = i18next.t('sale-button-text');
    });
    document.querySelectorAll('.on-sale-soon-text').forEach(element => {
        element.innerHTML = i18next.t('on-sale-soon-text');
    });
    document.querySelectorAll('.category-military').forEach(element => {
        element.innerHTML = i18next.t('category-military');
    });
    document.querySelectorAll('.category-fishing').forEach(element => {
        element.innerHTML = i18next.t('category-fishing');
    });
    document.querySelectorAll('.category-aerial-photography').forEach(element => {
        element.innerHTML = i18next.t('category-aerial-photography');
    });
    document.querySelectorAll('.category-household').forEach(element => {
        element.innerHTML = i18next.t('category-household');
    });
    document.querySelectorAll('.new').forEach(element => {
        element.innerHTML = i18next.t('new');
    });
    document.querySelectorAll('.top-sale').forEach(element => {
        element.innerHTML = i18next.t('top-sale');
    });
    document.getElementById('go-to-cart').textContent = i18next.t('go-to-cart');
    document.getElementById('continue-shopping').textContent = i18next.t('continue-shopping');
    document.getElementById('modal-content-text').textContent = i18next.t('modal-content-text');
    document.getElementById('add-to-cart-confirm').textContent = i18next.t('add-to-cart-confirm');
    document.getElementById('empty-cart-modal-text').textContent = i18next.t('empty-cart-modal-text');
    document.getElementById('close-empty-cart-modal').textContent = i18next.t('close-empty-cart-modal');
    
    
}

// document.getElementById('language-selector').addEventListener('change', function () {
//     const selectedLanguage = this.value;
    
//     // Зміна мови за допомогою i18next
//     i18next.changeLanguage(selectedLanguage, updateContent);
    
//     // Оновлення атрибута lang на сторінці
//     document.documentElement.lang = selectedLanguage;

//     console.log(document.documentElement.lang)

// });

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
        title.id = "title";
        const productContainer = document.getElementById("product-container");
        productContainer.before(title);
        const products = data.products;
        products.forEach((product) => {
            const card = createProductCard(product);
            const price1 = createProductCard(product);
            productContainer.appendChild(card);
        });

        initializeCartFunctions();
        initializeSwipeFunctions();
        i18next.init({
            lng: 'en', 
            debug: true,
            resources
        }, function (err, t) {
            if (err) return console.error(err);
            updateContent(); 
        });
    })
    .catch((error) => console.error("Мяу, при завантаженні карток виникла помилка:", error));
});


function initializeSwipeFunctions() {
    const wrap = document.querySelector(".wrap"); 
    const cards = document.querySelectorAll(".wrap .card"); 
    const swipeLeft = document.querySelector(".swipe-left");
    const swipeRight = document.querySelector(".swipe-right");

    if (!swipeLeft || !swipeRight) {
        console.error("Кнопки свайпу не знайдено");
        return;
    }

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

    if (product.categoryLink!=false) {
        categoryLink.href = product.categoryLink;
    } else {
        categoryLink.href = "#"; 
    }

    categoryLink.classList.add("category");
    categoryLink.textContent = product.category;
    if(categoryLink.textContent ==="Для військових")
    {
        categoryLink.classList.add("category-military");
    }
    else if(categoryLink.textContent ==="Для риболовлі"){
        categoryLink.classList.add("category-fishing");

    }
    else if(categoryLink.textContent ==="Для аерофотозйомки"){
        categoryLink.classList.add("category-aerial-photography");

    }
    else if(categoryLink.textContent ==="Для домогосподарства"){
        categoryLink.classList.add("category-household");

    }
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
    if (product.nameLink) {
        photoLink.href = product.nameLink;
        nameLink.href = product.nameLink;

    } else {
        photoLink.href = "#"; 
        nameLink.href = "#"; 
    }

    nameLink.classList.add("name");
    nameLink.textContent = product.name;

    const priceDiv = document.createElement("div");
    
    if (product.isNovelty === true) {
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
        
        

        
        async function getExchangeRate() {
            const apiKey = 'e46f5ee52caef8f2f68ec91b'; // API, не дивіться 🔞
            const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
            const cachedRate = localStorage.getItem('exchangeRate');
            if (cachedRate) {
                return parseFloat(cachedRate);  
            }
        
            try {
                const response = await fetch(url);
                const data = await response.json();
        
                if (data.result === "success") {
                    const rate = data.conversion_rates.UAH;
                    localStorage.setItem('exchangeRate', rate);
                    return rate;
                } else {
                    console.error("Не вдалося отримати курс валют.");
                    return 40;
                }
            } catch (error) {
                console.error("Помилка при отриманні курсу:", error);
                return 40; 
            }
        }

        async function formatPriceInUSD(price, exchangeRate) {
            const priceInUSD = price / exchangeRate; 
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(priceInUSD);  
        }
        
        async function displayPrices() {
            const exchangeRate = await getExchangeRate();
        
            if (document.documentElement.lang === "en") {
                if (product.oldPrice !== false) {
                    const formattedOldPrice = await formatPriceInUSD(product.oldPrice, exchangeRate);
                    const formattedPrice = await formatPriceInUSD(product.price, exchangeRate);
                    priceDiv.innerHTML = `
                        <span class="old-price">${formattedOldPrice}</span>
                        <span class="price">${formattedPrice}</span>`;
                } else {
                    const formattedPrice = await formatPriceInUSD(product.price, exchangeRate);
                    priceDiv.innerHTML = `<span class="price">${formattedPrice}</span>`;
                }
            } else if (document.documentElement.lang === "uk") {
                if (product.oldPrice !== false) {
                    priceDiv.innerHTML = `
                        <span class="old-price">${formatPrice(product.oldPrice)} грн</span>
                        <span class="price">${formatPrice(product.price)} грн</span>`;
                } else {
                    priceDiv.innerHTML = `<span class="price">${formatPrice(product.price)} грн</span>`;
                }
            }
        }
        
        displayPrices();
        
        if (document.documentElement.lang === "en") {
            if (product.oldPrice !== false) {
                priceDiv.classList.add('price-without-old-price');
                priceDiv.innerHTML = `
                    <span class="old-price">${formatPriceInUSD(product.oldPrice)} USD</span> 
                    <span class="price">${formatPriceInUSD(product.price)} USD</span>`;
            } else {
                priceDiv.innerHTML = `<span class="price">${formatPriceInUSD(product.price)} USD</span>`;
            }
        } else if (document.documentElement.lang === "uk") {
            if (product.oldPrice !== false) {
                priceDiv.classList.add('price-without-old-price');
                priceDiv.innerHTML = `
                    <span class="old-price">${formatPrice(product.oldPrice)} грн</span> 
                    <span class="price">${formatPrice(product.price)} грн</span>`;
            } else {
                priceDiv.innerHTML = `<span class="price">${formatPrice(product.price)} грн</span>`;
            }
        }
        
        document.getElementById('language-selector').addEventListener('change', async function () {
            const selectedLanguage = this.value;
            i18next.changeLanguage(selectedLanguage, updateContent);
            document.documentElement.lang = selectedLanguage;
            await displayPrices();
            const exchangeRate = await getExchangeRate();
            if (document.documentElement.lang === "en") {
                if (product.oldPrice !== false) {
                    priceDiv.classList.add('price-without-old-price');
                    priceDiv.innerHTML = `
                        <span class="old-price">${await formatPriceInUSD(product.oldPrice, exchangeRate)} USD</span> 
                        <span class="price">${await formatPriceInUSD(product.price, exchangeRate)} USD</span>`;
                } else {
                    priceDiv.innerHTML = `<span class="price">${await formatPriceInUSD(product.price, exchangeRate)} USD</span>`;
                }
            } else if (document.documentElement.lang === "uk") {
                if (product.oldPrice !== false) {
                    priceDiv.classList.add('price-without-old-price');
                    priceDiv.innerHTML = `
                        <span class="old-price">${formatPrice(product.oldPrice)} грн</span> 
                        <span class="price">${formatPrice(product.price)} грн</span>`;
                } else {
                    priceDiv.innerHTML = `<span class="price">${formatPrice(product.price)} грн</span>`;
                }
            }
        });
    }

    if (product.isHit === true) {
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
    
    if (product.price != false) card.appendChild(button);

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
                const quantityInputElement = document.getElementById('quantity-input');
                quantityInputElement.placeholder = '';
                quantityInputElement.style.borderColor = 'black';
                document.getElementById('quantity-input').value = ''; 
                const card = e.target.closest('.card');
                const productName = card.querySelector('.name').textContent.trim();
                let productPriceText;
                let productPrice = parseFloat(productPriceText);
                const language = document.documentElement.lang;
                if (language === 'en') {
                    productPriceText = card.querySelector('.price')
                        .textContent
                        .replace(/\s+/g, '')
                        .replace('$', '')
                        .replace(',', ''); 
                    productPrice = parseFloat(productPriceText) * 41.36; 
                } else {
                    productPriceText = card.querySelector('.price')
                        .textContent
                        .replace(/\s+/g, '')
                        .replace(' грн', '')
                        .replace(',', ''); 
                    productPrice = parseFloat(productPriceText); 
                }
                
                console.log(productPriceText)
               
                console.log(productPrice)
                document.getElementById('modal-quantity').classList.remove('hidden');
                document.getElementById('add-to-cart-confirm').dataset.productName = productName;
                document.getElementById('add-to-cart-confirm').dataset.productPrice = productPrice;
            });
        });

        const addToCartButton = document.getElementById('add-to-cart-confirm');


addToCartButton.replaceWith(addToCartButton.cloneNode(true));

        document.getElementById('add-to-cart-confirm').addEventListener('click', () => {
            const quantityInputElement = document.getElementById('quantity-input');
            const productName = document.getElementById('add-to-cart-confirm').dataset.productName;
            const productPrice = parseFloat(document.getElementById('add-to-cart-confirm').dataset.productPrice);
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
                if(document.documentElement.lang ==='en'){
                    document.getElementById('modal-message').textContent = 
                    `The product "${productName}" has been added to the cart in a quantity of ${quantity} pcs.`;
                }
                if(document.documentElement.lang ==='uk'){
                    document.getElementById('modal-message').textContent = 
                    `Товар "${productName}" додано до корзини в кількості ${quantity} шт.`;
                }
                document.getElementById('modal-success').classList.remove('hidden');
            } else {
                quantityInputElement.value = ''; 
               
                
                if(document.documentElement.lang==='en'){

                    quantityInputElement.placeholder = 'positive integer';

                }
                else if(document.documentElement.lang==='uk'){
                quantityInputElement.placeholder = 'ціле додатнє число';
                }
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