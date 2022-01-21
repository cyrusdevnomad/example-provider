class Product {
    constructor(id, type, name, version, color, price, pricexyz) {
    //constructor(id, type, name, version) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.version = version;
	    this.color = color;
        this.price = price;
        this.pricexyz = pricexyz;
    }
}

module.exports = Product;
