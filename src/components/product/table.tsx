import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useStore } from "@/pages/grain"
import dayjs from "dayjs"

const grainList = [
  {
    id: "INV001",
    type: "rojolele",
    typeName: "Rojo lele",
    createdAt: "2024-11-21T14:22:13.211Z",
    weight: 100,
  },
  {
    id: "INV002",
    type: "rojolele",
    typeName: "Rojo lele",
    createdAt: "2024-11-21T14:22:13.211Z",
    weight: 100,
  },
  {
    id: "INV003",
    type: "pandanwangi",
    typeName: "pandanwangi",
    createdAt: "2024-11-21T14:22:13.211Z",
    weight: 100,
  },
]

export default function GrainTable() {
  const selectedItems = useStore((state) => state.selectedItems)
  const toggleSelectedItem = useStore((state) => state.toggleSelectedItem)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">#</TableHead>
          <TableHead className="w-[100px]">No</TableHead>
          <TableHead className="w-[400px]">Nama Bahan</TableHead>
          <TableHead>Jam, Tanggal</TableHead>
          <TableHead>Berat</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {grainList.map((grain, index) => {
          const checked = selectedItems.includes(grain.id)

          return <TableRow key={grain.id}>
            <TableCell>
              <Checkbox checked={checked} onCheckedChange={() => toggleSelectedItem(grain.id)} />
            </TableCell>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{grain.typeName}</TableCell>
            <TableCell>{dayjs(grain.createdAt).format('HH:mm DD/MM/YYYY')}</TableCell>
            <TableCell>{grain.weight} Kg</TableCell>
          </TableRow>
        })}
      </TableBody>
    </Table>
  )
}  