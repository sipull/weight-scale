import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button, buttonVariants } from "@/components/ui/button";

export function AlertDelete() {
    return(
  <AlertDialog>
    <AlertDialogTrigger className={buttonVariants({
            variant:'destructive',
            size:'sm'
        })}>
        Delete
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Apakah Anda Ingin MENGHAPUS Data ini?</AlertDialogTitle>
        <AlertDialogDescription>
        Tindakan ini akan secara permanen menghapus data dari data base.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction className={buttonVariants({
            variant:'destructive'
        })}>Ya</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
    )
}
