import express from "express";
import { getAllProducts } from "../../controllers/getAllProducts/products.controller";

const router = express.Router();
router.get("/categories/:categoryname/products", getAllProducts);

export default router;
