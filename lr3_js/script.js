let book  = {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
    isRead: true,
    bookInfo(){
        console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Прочитана: ${this.isRead ? "Так": "Ні"} `)
    }
}

book.bookInfo();
// book.isRead = !book.isRead;
book.bookInfo();

let library = [
    {title: "Harry Potter and the Sorcerer's Stone",  author: "J.K. Rowling", year: 1997, isRead: true },
    {title: "The Hobbit",  author: "J.R.R. Tolkien", year: 1937, isRead: false },
    {title: "1984",  author: "George Orwell", year: 1949, isRead: true },
    {title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isRead: false},
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isRead: true},
    {title: "Moby Dick", author: "Herman Melville", year: 1851, isRead: false}
]

function displayLibrary(){
    library.forEach(book => {
        console.log(`Назва: ${book.title}, Автор: ${book.author}, Рік видання: ${book.year}, Прочитана: ${book.isRead ? "Так": "Ні"} `)
    });
}

displayLibrary();
library.push({title: "Pride and Prejudice", author: "Jane Austen", year: 1813, isRead: true});
displayLibrary();

library.sort((a,b) => a.year - b.year);
console.log("Книги, відсортовані за роком видання: ", library);

let unreadBooks = library.filter(book => !book.isRead);
console.log("Непрочитані книги: ", unreadBooks);

let tolkienBooks = library.find(book => book.author === "J.R.R. Tolkien");
console.log("Книги Толкіна: ", tolkienBooks);


function AddBookToTheLibrary(){
    let title = prompt("Введіть назву книги:");
    let author = prompt("Введіть автора книги:");
    let year = prompt("Введіть рік видання книги:");
    let isRead = prompt("Чи прочитана книга?(якщо так, введіть у строку будь-який текст, якщо ні, залиште строку порожньою)");

    library.push({title, author, year, isRead })

    displayLibrary()
}

// AddBookToTheLibrary();


function markAsRead(book) {
    if (book.isRead === false) {
        book.isRead = true;
        console.log(`Назва: ${book.title}, Автор: ${book.author}, Рік видання: ${book.year}, Прочитана: ${book.isRead ? "Так" : "Ні"} `);
    } else {
        alert("Книга вже прочитана!");
        console.log(`Назва: ${book.title}, Автор: ${book.author}, Рік видання: ${book.year}, Прочитана: ${book.isRead ? "Так" : "Ні"} `);
    }
}

markAsRead(book);

function calculateAverageYear(library) {
    let averageYear, suma = 0;
    for (let book = 0; book<library.length; book++) {
        suma+= library[book].year;
    };
    averageYear = suma/library.length;
    console.log(`Середній рік видання всіх книг у library: ${averageYear.toFixed(0)}`);
}

calculateAverageYear(library);

let coin  = {
    country: "Україна",
    material: "Срібло",
    year: 2001,
    inCollection: true,
    coinInfo(){
        console.log(`Країна: ${this.country}, Матеріал: ${this.material}, Рік випуску: ${this.year}, Наявність в колекції: ${this.inCollection ? "Є" : "Немає"} `);
    }
}

coin.coinInfo();
coin.inCollection = !coin.inCollection;
coin.coinInfo();

let collection = [
    {country: "Франція", material: "Нікель", year: 1978, inCollection: true},
    {country: "США", material: "Золото", year: 1985, inCollection: false},
    {country: "Канада", material: "Бронза", year: 2000, inCollection: true},
    {country: "Велика Британія", material: "Мідь", year: 1965, inCollection: false},
    {country: "Німеччина", material: "Срібло", year: 1995, inCollection: true},
    {country: "Австралія", material: "Алюміній", year: 2010, inCollection: false}
];

function displayCoin(){
    collection.forEach(coin => {
        console.log(`Країна: ${coin.country}, Матеріал: ${coin.material}, Рік випуску: ${coin.year}, Наявність в колекції: ${coin.inCollection ? "Є" : "Немає"} `);
    });
}

displayCoin();

collection.push({country: "Індія", material: "Золото", year: 2005, inCollection: false});
displayCoin();

collection.pop();

collection.sort((a, b) => b.year - a.year||a.country.localeCompare(b.country));
console.log("Монети, відсортовані за роком видання за спаданням(якщо роки однакові, то за країнами): ", collection);


let posessedCoins = collection.filter(coin => coin.inCollection);
console.log("Монети, наявні в колекції: ", posessedCoins);

let goldenCoins = collection.find(coin => coin.material === "Золото");
console.log("Золоті монети: ", goldenCoins); 

console.log(collection.slice(2,-1));

function AddCoinToTheCollection(){
    let country = prompt("Введіть назву країни:");
    let material = prompt("Введіть назву матеріалу:");
    let year = prompt("Введіть рік видання монети:");
    let inCollection = prompt("Чи є монети в колекції?(якщо так, введіть у строку будь-який текст, якщо ні, залиште строку порожньою)");

    collection.push({country, material, year, inCollection })

    displayCoin()
}

// AddCoinToTheCollection();

let currentYear = new Date().getFullYear();
let coinsWithAge = collection.map(coin => ({
    ...coin,  // збереження всіх полів об'єкта - ЦЕ НЕ КОМЕНТАР ЧАТА ДЖПТ
    age: currentYear - coin.year  // нове поле з віком - ЦЕ НЕ КОМЕНТАР ЧАТА ДЖПТ
}));

console.log(coinsWithAge);

function outOfCollection(coin) {
    if (coin.inCollection === true) {
        coin.inCollection = false;
        console.log(`Країна: ${coin.country}, Матеріал: ${coin.material}, Рік випуску: ${coin.year}, Наявність в колекції: ${coin.inCollection ? "Є" : "Немає"} `);
    } else {
        alert("Монети немає в колекції!");
        console.log(`Країна: ${coin.country}, Матеріал: ${coin.material}, Рік випуску: ${coin.year}, Наявність в колекції: ${coin.inCollection ? "Є" : "Немає"} `);
    }
}

outOfCollection(coin);


function countOver30YearsCoins(collection) {
    let amount = 0;
    for (let i = 0; i<collection.length; i++) {
        let coin = collection[i]; 
        if((currentYear - coin.year)>30){
        amount++;
        }
    };
    console.log(`Кількість монет, виготовлених понад 30 років тому: ${amount}`);
}

countOver30YearsCoins(collection);


