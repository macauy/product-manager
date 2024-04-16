import express from "express";
import ProductManager from "./ProductManager.js";

const manager = new ProductManager("./productos.json");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/products", async (req, res) => {
	const limit = req.query.limit || 0;
	const products = await manager.getProducts(limit);
	res.send({ status: "ok", payload: products });
});

app.get("/products/:pid", async (req, res) => {
	const id = parseInt(req.params.pid);
	const product = await manager.getProductById(id);
	const status = typeof product == "object" ? "ok" : "error";
	res.send({ status: status, payload: product });
});

app.listen(8080, () => {
	console.log("Server listening on port 8080");
});
