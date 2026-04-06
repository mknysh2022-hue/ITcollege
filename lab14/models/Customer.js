import { User } from './User.js';

export class Customer extends User {
    constructor(name) {
        super(name); // Виклик конструктора батьківського класу User
        this.orders = [];
    }
    
    addOrder(order) {
        this.orders.push(order);
        console.log(`[Система] Замовлення додано для клієнта: ${this.name}`);
    }
    
    viewOrders() {
        console.log(`\n--- ${this.getInfo()} ---`);
        console.log(`Історія замовлень (Кількість: ${this.orders.length}):`);
        this.orders.forEach((order, index) => {
            console.log(` Замовлення #${index + 1}:`);
            console.log(`  Кількість товарів: ${order.products.length}`);
            console.log(`  Загальна сума: ${order.totalSum} грн.`);
        });
        console.log("-----------------------------------");
    }
}