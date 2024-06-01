"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Products } from "@/constants/data";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export const columns: ColumnDef<Products>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "productname",
    header: "NAME",
  },
  {
    accessorKey: "price",
    header: "PRICE",
  },
  {
    accessorKey: "rating",
    header: "RATING",
  },
  {
    accessorKey: "discount",
    header: "DISCOUNT",
  },
  {
    accessorKey: "availability",
    header: "AVAILABILITY",
  },
];
