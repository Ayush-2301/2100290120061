import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
const baseUrl = "http://20.244.56.144/";
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { companyname } = req.params;
    const { categoryname } = req.params;
    const top = parseInt(req.query.top as string);
    const page = parseInt(req.query.page as string);
    const minPrice = parseInt(req.query.minPrice as string);
    const maxPrice = parseInt(req.query.maxPrice as string);
    const sort = req.query.sort as string;
    const type = req.query.type as string;
    const start = (page - 1) * top;
    const end = page * top;
    const products: {
      next?: {
        page: number;
        top: number;
      };
      prev?: {
        page: number;
        top: number;
      };
      products: any[];
    } = {
      products: [],
    };
    products.next = {
      page: page + 1,
      top: top,
    };

    if (start > 0)
      products.prev = {
        page: page - 1,
        top: top,
      };

    const data = await fetch(
      `${baseUrl}/company/${companyname}/${categoryname}/products?top=${end}&minPrice=${minPrice}&maxPrice=${maxPrice}`
    );
    const productsfromserver: any[] = await data.json();
    const sortedData = productsfromserver.sort((a, b) => {
      if (sort === "asc") {
        return a[type] - b[type];
      } else {
        return b[type] - a[type];
      }
    });
    const finalProducts = sortedData.map((product) => ({
      ...product,
      uuid: uuidv4(),
    }));
    products.products = finalProducts;

    res.status(200).json({ data: products });
  } catch (error) {
    console.log(error);
    res.status(400).json("somthing went wrong");
  }
};
