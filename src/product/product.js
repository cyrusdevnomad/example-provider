class Product {
    constructor(id, type, name, version, color) {
    //constructor(id, type, name, version) {
        this.uiid = id;
        this.type = type;
        this.name = name;
        this.version = version;
	    this.color = color;
    }
}

module.exports = Product;
