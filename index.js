class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    addProduct(product) {
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            console.log("Todos los campos son obligatorios.");
            return;
        }

        if (this.products.some(p => p.code === product.code)) {
            console.log("El código de producto ya existe.");
            return;
        }

        product.id = this.nextId++;
        this.products.push(product);
        console.log("Producto agregado con éxito.");
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (product) {
            return product;
        } else {
            console.log("Producto no encontrado.");
        }
    }
}

const manager = new ProductManager();
manager.addProduct({
    title: "Producto 1",
    description: "Descripción del producto 1",
    price: 10,
    thumbnail: "ruta/imagen1.jpg",
    code: "P001",
    stock: 100
});
manager.addProduct({
    title: "Producto 2",
    description: "Descripción del producto 2",
    price: 20,
    thumbnail: "ruta/imagen2.jpg",
    code: "P002",
    stock: 50
});

console.log(manager.getProducts());
console.log(manager.getProductById(1));
console.log(manager.getProductById(3)); // Producto no encontrado
