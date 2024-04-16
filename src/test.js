import ProductManager from "./ProductManager.js";

const p1 = new ProductManager("./productos.json");

let product1 = {
	title: "titulo1",
	description: "desc1",
	price: 100,
	thumbnail: "thumb",
	code: "code1",
	stock: 50,
};

let product2 = {
	title: "titulo2",
	description: "desc2",
	price: 200,
	thumbnail: "thumb",
	code: "code2",
	stock: 50,
};

let product3 = {
	title: "titulo3",
	description: "desc3",
	price: 300,
	thumbnail: "thumb",
	code: "code3",
	stock: 50,
};

let product4 = {
	title: "titulo4",
	description: "desc4",
	price: 400,
	thumbnail: "thumb",
	code: "code4",
	stock: 500,
};
let product5 = {
	title: "titulo5",
	description: "desc5",
	price: 400,
	thumbnail: "thumb",
	code: "code5",
	stock: 500,
};

await p1.addProduct(product1);
await p1.addProduct(product2);
await p1.addProduct(product3);
await p1.addProduct(product4);
await p1.addProduct(product5);

console.log(await p1.getProducts(0));
