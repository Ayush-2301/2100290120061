import { Request, Response } from "express";

export const getProduct = async (req: Request, res: Response) => {
  try {
    const companyname = req.params.companyname;
    const category = req.params.category;
    const productid = req.params.productid;
  } catch (error) {}
};
