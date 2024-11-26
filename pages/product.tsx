import Layout from "@/src/components/common/layout";
import GrainTable, { InputWithLabel } from "@/src/components/product/table";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import dayjs, { Dayjs } from "dayjs";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { create } from 'zustand'
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select"
import { AddProductDialog } from "@/src/components/product/add-product-dialog";


type State = {
    selectedItems: string[]
    date: Dayjs
}

type Action = {
    toggleSelectedItem: (id: string) => void
    setDate: (date: Dayjs) => void
}

export const useStore = create<State & Action>((set) => ({
    selectedItems: [],
    toggleSelectedItem: (id) => {
        set((state) => ({
            selectedItems: state.selectedItems.includes(id)
                ? state.selectedItems.filter((item) => item !== id)
                : [...state.selectedItems, id],
        }))
    },
    date: dayjs(),
    setDate: (date) => set(() => ({
        date
    }))

}))

const DashboardProduct = () => {
    const date = useStore((state) => state.date);
    const setDate = useStore((state) => state.setDate);
    const selectedItems = useStore((state) => state.selectedItems);

    return (
        <Layout>
            <div className="text-2xl mt-4 mb-6 font-semibold">
                Produk
            </div>
            <div className="bg-white px-3 py-4 rounded">
                <div className="flex gap-4 mb-5 flex-wrap">
                    <AddProductDialog/>
                </div>

                <div className="bg-white rounded border mb-6">
                    <GrainTable />
                </div>

                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>

        </Layout>
    );
};

export default DashboardProduct;
