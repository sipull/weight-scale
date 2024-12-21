import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AddProductDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Tambah Timbangan</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tambah Timbangan</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nama Timbangan
            </Label>
            <Input
              id="name"
              defaultValue="Tambahkan Disini"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Smpan Data</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
