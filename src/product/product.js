class Product {
    constructor(id, type, name, version, color, newField) {
    //constructor(id, type, name, version) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.version = version;
	    this.color = color;
        this.newField = newField;
    }
}

module.exports = Product;
