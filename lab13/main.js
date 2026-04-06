// 1. Конструктор Product (Товар)
function Product(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
}

// 2. Конструктор Order (Замовлення)
function Order() {
    this.products = [];
    this.totalSum = 0;
}

// Використовуємо прототипне наслідування для додавання методу до Order
Order.prototype.addProduct = function(product) {
    this.products.push(product);
    this.totalSum += product.price;
    console.log(`[Кошик] Додано: ${product.name} (${product.price} грн). Загальна сума: ${this.totalSum} грн.`);
};

// 3. Конструктор Customer (Клієнт)
function Customer(name) {
    this.name = name;
    this.orders = [];
}

// Прототипне наслідування для методів Customer
Customer.prototype.addOrder = function(order) {
    this.orders.push(order);
    console.log(`[Система] Замовлення успішно оформлено для клієнта ${this.name}.`);
};

Customer.prototype.viewOrders = function() {
    console.log(`\n--- Історія замовлень клієнта: ${this.name} ---`);
    if (this.orders.length === 0) {
        console.log("Замовлень ще немає.");
        return;
    }
    this.orders.forEach((order, index) => {
        console.log(`Замовлення #${index + 1}:`);
        console.log(`  Кількість товарів: ${order.products.length}`);
        console.log(`  Сума до оплати: ${order.totalSum} грн.`);
        console.log(`  Деталі:`, order.products);
    });
    console.log("---------------------------------------");
};

// === ПЕРЕВІРКА РОБОТИ ПРОГРАМИ ===
console.log("=== СТАРТ РОБОТИ ОНЛАЙН-МАГАЗИНУ ===");

// Створюємо товари
const phone = new Product("iPhone 15", 40000, "Електроніка");
const caseCover = new Product("Чохол синій", 500, "Аксесуари");
const laptop = new Product("MacBook Air", 55000, "Електроніка");

// Створюємо замовлення та додаємо товари
const firstOrder = new Order();
firstOrder.addProduct(phone);
firstOrder.addProduct(caseCover);

const secondOrder = new Order();
secondOrder.addProduct(laptop);

// Створюємо клієнта і прив'язуємо замовлення
const customer1 = new Customer("Олександр");
customer1.addOrder(firstOrder);
customer1.addOrder(secondOrder);

// Переглядаємо історію
customer1.viewOrders();