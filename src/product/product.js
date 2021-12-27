class Product {
    constructor(id, type, name, version, color, price) {
    //constructor(id, type, name, version) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.version = version;
	    this.color = color;
        this.price = price;
    }
}

module.exports = Product;
