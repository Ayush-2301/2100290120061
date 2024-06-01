import { Request, Response } from "express";
import { products } from "../../constant/products";
export const getProduct = async (req: Request, res: Response) => {
  try {
    const productid = req.params.productid;
    const product = products.find((product) => product.id === productid);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
