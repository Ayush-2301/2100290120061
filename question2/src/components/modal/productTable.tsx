import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const productTable = () => {
  return (
    <Table>
      <TableCaption>A list of your products.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-right">Name</TableHead>
          <TableHead className="text-right">Price</TableHead>
          <TableHead className="text-right">Rating</TableHead>
          <TableHead className="text-right">Discount</TableHead>
          <TableHead className="text-right">Available</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Laptop 1</TableCell>
          <TableCell>2236</TableCell>
          <TableCell>4.7</TableCell>
          <TableCell>63%</TableCell>
          <TableCell>yes</TableCell>
          {/* <TableCell className="text-right">$250.00</TableCell> */}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default productTable;
