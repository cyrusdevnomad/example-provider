class Product {
    constructor(id, type, name, version, color, price, priceabc) {
    //constructor(id, type, name, version) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.version = version;
	    this.color = color;
        this.price = price;
        this.priceabc = priceabc;
    }
}

module.exports = Product;
