import { columns } from "@/components/modal/columns";
import { ProductsTable } from "@/components/modal/product-table";
import { buttonVariants } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";
import { Products } from "@/constants/data";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function page({ searchParams }: paramsProps) {
  const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 10;
  const country = searchParams.search || null;
  const offset = (page - 1) * pageLimit;

  // const res = await fetch(
  //   `https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${pageLimit}` +
  //     (country ? `&search=${country}` : "")
  // );
  //localhost:3000/categories/amazon/products?top=10&page=1&minPrice=100&maxPrice=500&sort=asc&type=price

  const minPrice = 100;
  const maxPrice = 500;
  const catagoryname = "amazon";
  const res =
    await fetch(`http://localhost:3000/categories/${catagoryname}/products?top=${pageLimit}&page=${page}&minPrice=${minPrice}&maxPrice=${maxPrice}&sort=asc&type=price
`);
  // console.log(await resjson());
  const productsRes = (await res.json()) as any;
  const totalProducts = productsRes.length; //1000
  const pageCount = Math.ceil(totalProducts / pageLimit);
  const products: Products[] = productsRes.products;
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <div className="flex items-start justify-between">
          {/* <Heading
            title={`Employee (${totalUsers})`}
            description="Manage employees (Server side table functionalities.)"
          /> */}
          {/* <h1>{totalUsers}</h1> */}
        </div>
        <Separator />

        <ProductsTable
          searchKey="country"
          pageNo={page}
          columns={columns}
          data={products}
          pageCount={pageCount}
        />
      </div>
    </>
  );
}
