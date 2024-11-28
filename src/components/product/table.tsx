import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useStore } from "@/pages/grain";

const grainList = [
  {
    id: "INV001",
    type: "rojolele",
    typeName: "Pandanwangi",
    createdAt: "2024-11-21T14:22:13.211Z",
    weight: 100,
  },
  {
    id: "INV003",
    type: "pandanwangi",
    typeName: "Kemangi",
    createdAt: "2024-11-21T14:22:13.211Z",
    weight: 100,
  },
];

export default function GrainTable() {
  const selectedItems = useStore((state) => state.selectedItems);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">No</TableHead>
          <TableHead className="w-[400px]">Nama Bahan</TableHead>
          <TableHead className=" w-[150px] text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {grainList.map((grain, index) => {
          const checked = selectedItems.includes(grain.id);

          return (
            <TableRow key={grain.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{grain.typeName}</TableCell>
              <TableCell>
                <div className="space-x-3 flex justify-center">
                  <Button size="sm">Update</Button>
                  <Button variant="destructive" size="sm">Delete</Button>
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
