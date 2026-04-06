export class Order {
    constructor() {
        this.products = [];
        this.totalSum = 0;
    }
    
    addProduct(product) {
        this.products.push(product);
        this.totalSum += product.price;
        console.log(`У кошик додано: ${product.name} (${product.price} грн).`);
    }
}