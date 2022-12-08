class Product {
    constructor (name = "", price = 0, stockQuantity = 0){

        this.name = name;
        this.price = price;
        this.stockQuantity = stockQuantity;
    }

    getStockValue (){
        return this.price * this.stockQuantity;
    }

}

const zadatak = new Product("Micko", 5, 10);
console.log(zadatak.getStockValue());
