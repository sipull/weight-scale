import Layout from "@/src/components/common/layout";
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
import { AddProductDialog } from "@/src/components/scale/add-product-dialog";
import ProductTable from "@/src/components/scale/table";


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
    return (
        <Layout>
            <div className="text-2xl mt-4 mb-6 font-semibold">
                Timbangan
            </div>
            <div className="bg-white px-3 py-4 rounded">
                <div className="flex gap-4 mb-5 flex-wrap">
                    <AddProductDialog />
                </div>

                <div className="bg-white rounded border mb-6">
                    <ProductTable />
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
