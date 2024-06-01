import express from "express";
import { getAllProducts } from "../../controllers/getAllProducts/products.controller";
import { getProduct } from "../../controllers/getProduct/product.controller";

const router = express.Router();
router.get("/categories/:categoryname/products", getAllProducts);
router.get("/categories/:categoryname/products/:productid", getProduct);
export default router;
