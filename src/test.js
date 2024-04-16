import ProductManager from "./ProductManager.js";

const p1 = new ProductManager("./productos.json");

const product1 = {
	title: "titulo1",
	description: "desc1",
	price: 100,
	thumbnail: "thumb",
	code: "code1",
	stock: 50,
};

const product2 = {
	title: "titulo2",
	description: "desc2",
	price: 200,
	thumbnail: "thumb",
	code: "code2",
	stock: 50,
};

const product3 = {
	title: "titulo3",
	description: "desc3",
	price: 300,
	thumbnail: "thumb",
	code: "code3",
	stock: 50,
};

const product4 = {
	title: "titulo4",
	description: "desc4",
	price: 400,
	thumbnail: "thumb",
	code: "code4",
	stock: 500,
};
const product5 = {
	title: "titulo5",
	description: "desc5",
	price: 400,
	thumbnail: "thumb",
	code: "code5",
	stock: 500,
};

const product6 = {
	title: "titulo6",
	description: "desc6",
	price: 100,
	thumbnail: "thumb",
	code: "code6",
	stock: 50,
};

const product7 = {
	title: "titulo7",
	description: "desc7",
	price: 200,
	thumbnail: "thumb",
	code: "code7",
	stock: 50,
};

const product8 = {
	title: "titulo8",
	description: "desc8",
	price: 300,
	thumbnail: "thumb",
	code: "code8",
	stock: 50,
};

const product9 = {
	title: "titulo9",
	description: "desc9",
	price: 400,
	thumbnail: "thumb",
	code: "code9",
	stock: 500,
};
const product10 = {
	title: "titulo10",
	description: "desc10",
	price: 400,
	thumbnail: "thumb",
	code: "code10",
	stock: 500,
};

await p1.addProduct(product1);
await p1.addProduct(product2);
await p1.addProduct(product3);
await p1.addProduct(product4);
await p1.addProduct(product5);
await p1.addProduct(product6);
await p1.addProduct(product7);
await p1.addProduct(product8);
await p1.addProduct(product9);
await p1.addProduct(product10);

console.log(await p1.getProducts(0));
