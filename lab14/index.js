import { Product } from './models/Product.js';
import { Order } from './models/Order.js';
import { Customer } from './models/Customer.js';

console.log("=== СТАРТ ОНЛАЙН-МАГАЗИНУ (КЛАСИ ES6) ===");

// 1. Створюємо товари
const phone = new Product("iPhone 15", 40000, "Електроніка");
const headphones = new Product("AirPods", 8000, "Аксесуари");

// 2. Створюємо замовлення та додаємо товари
const myOrder = new Order();
myOrder.addProduct(phone);
myOrder.addProduct(headphones);

// 3. Створюємо покупця та додаємо йому замовлення
const customer1 = new Customer("Олександр");
customer1.addOrder(myOrder);

// 4. Переглядаємо замовлення
customer1.viewOrders();