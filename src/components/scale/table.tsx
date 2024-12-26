import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useStore } from "@/pages/grain";
import { AlertDelete } from "./alert-dialog-delete";
import { UpdateProductDialog } from "./dialog-update";
import dayjs from "dayjs";
import useScalesQuery from "@/src/queries/useScalesQuery";

const grainList = [
  {
    id: "INV001",
    type: "Gabah",
    typeName: "Gabah",
    createdAt: "2024-11-21T14:22:13.211Z",
    weight: 100,
  },
  {
    id: "INV003",
    type: "Beras",
    typeName: "Beras",
    createdAt: "2024-11-21T14:22:13.211Z",
    weight: 100,
  },
];

export default function ProductTable() {
  const { data } = useScalesQuery();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">No</TableHead>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead className="w-[400px]">Nama Timbangan</TableHead>
          <TableHead className="w-[400px]">Jam, Tanggal</TableHead>
          <TableHead className=" w-[150px] text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.scales?.map((grain, index) => {
          return (
            <TableRow key={grain.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{"23897463"}</TableCell>
              <TableCell>{grain.typeName}</TableCell>
              <TableCell>
                {dayjs(grain.createdAt).format("HH:mm DD/MM/YYYY")}
              </TableCell>
              <TableCell>
                <div className="space-x-3 flex justify-center">
                  <UpdateProductDialog />
                  <AlertDelete />
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
