// let products = [
//     {name: "Апельсин", category: "Фрукти", price: 10, inStock: 12},
//     {name: "Зошит", category: "Канцтовари", price: 5, inStock: 0},
//     {name: "Аромадифузор", category: "Товари_для_дому", price: 200, inStock: 5},
//     {name: "Каструля", category: "Посуд", price: 600, inStock: 0},
//     {name: "Туш", category: "Косметика", price: 200, inStock: 300}

// ]

function getAvailableProducts(products){
    let available_products = products.filter(product=> product.inStock>0);
    console.log("Наявні продукти:", available_products);
}

// getAvailableProducts(products);


function findProductByName(products){
    let name = prompt("Введіть назву товара:");
    let found_item = products.find(product=> product.name===name);
    if (found_item !== undefined){
    console.log("Інформація про заданий продукт:", found_item);
    }
    else{
        console.log("Продукта не знайдено!");
    }
    
}

// findProductByName(products);

let orders = [
    {orderId: 1, customer: [{name: "Bohdana", email: "bohdanaskochynska@gmail.com"}], items: ["Туш", "Маркер", "Перець", "Фета"], total: 245},
    {orderId: 1, customer: [{name: "Anton", email: "antonadamchuk@gmail.com"}], items: ["Крісло", "Йогурт", "Вологі салфетки", "Комікс"], total: 3080},
    {orderId: 1, customer: [{name: "Alisa", email: "alisaslobodyan@gmail.com"}], items: ["Косметичка", "Арахісова паста", "Котячий корм", "Фен"], total: 1962},
    {orderId: 1, customer:[{name: "Anton", email: "antonadamchuk@gmail.com"}], items: ["Вазон", "Курятина", "Манго", "Гель для душу"], total: 780},
    {orderId: 1, customer: [{name: "Olya", email: "olyavoloshyn@gmail.com"}], items: ["Парасоля", "Прокладки", "Куркума", "Шкарпетки"], total: 520}
]

function getTotalSpentByCustomer(orders){
    // let name = prompt("Введіть ім'я клієнта:");  - це якщо в масиві кожен клієнт має лише 1 замовлення ( ЦЕ НЕ КОМЕНТАР ЧАТА ДЖПТ)
    // let found_customer = orders.find(order=> order.customer[0].name===name);( ЦЕ НЕ КОМЕНТАР ЧАТА ДЖПТ)
    // console.log(`Загальна сума витрат клієнта ${name}: ${found_customer.total}`);( ЦЕ НЕ КОМЕНТАР ЧАТА ДЖПТ)
    let name = prompt("Введіть ім'я клієнта:");
    let found_orders = orders.filter(order=> order.customer[0].name===name);
    let sum = found_orders.reduce((accumulator, currentValue) => accumulator + currentValue.total, 0); // accumulator - зберігає результат, вкінці 0, за замовч. це з першого елемента ( ЦЕ НЕ КОМЕНТАР ЧАТА ДЖПТ)
    console.log(`Загальна сума витрат клієнта: ${sum}`);
}

// getTotalSpentByCustomer(orders)

let products = [
    {productId: 1, name: "Підсвічник", price: 600},
    {productId: 2, name: "Календар", price: 380},
    {productId: 3, name: "Дзеркало", price: 3000},
    {productId: 4, name: "Вишня", price: 3},
    {productId: 5, name: "Консилер", price: 350}
]

let purchases = [
    {purchaseId: 1, productId: 1, quantity: 3},
    {purchaseId: 2, productId: 5, quantity: 5},
    {purchaseId: 3, productId: 4, quantity: 25},
    {purchaseId: 4, productId: 2, quantity: 4},
    {purchaseId: 5, productId: 2, quantity: 6},
    {purchaseId: 6, productId: 3, quantity: 8}
]

function getTotalSales(products,purchases){
    
        let keys = [];
        let values = [];
        let result = {};
    for (let i = 0; i < products.length; i++) {
        keys.push(products[i].name);  
    }

    for (let j of purchases) {
        let current_product_id = j.productId;
        let product = products.find(product=> product.productId===current_product_id);
        console.log(product.name);
        let found_purchases = purchases.filter(purchase=> purchase.productId===current_product_id);
        console.log(found_purchases);
        let total_amount = found_purchases.reduce((accumulator, currentValue) => accumulator + currentValue.quantity * product.price, 0);
        console.log(`Товар: ${product.name}; Прибуток, отриманий від продажу товару:${total_amount}`); 
        values.push(total_amount);  
               
    }

    console.log(values);
    console.log(keys);


    for (let i = 0; i < keys.length; i++) {
        result[keys[i]] = values[i]; 
    }
    console.log(result);
    
    // let values = ["Bohdana", 25, "bohdanaskochynska@gmail.com"];
    // for (let i = 0; i < products.length; i++) {
    //     result.push(products[i].name);  
    // }
    // console.log(result);
    
    // let product = products.find(product=> product.productId===product_id);
    // let found_purchases = purchases.filter(purchase=> purchase.productId===product_id);
    // let total_amount = found_purchases.reduce((accumulator, currentValue) => accumulator + currentValue.quantity * product.price, 0);
    // console.log(`Товар: ${product.name}; Прибуток, отриманий від продажу товару:${total_amount}`); 
    // for (let i in products){

    }


getTotalSales(products,purchases);




