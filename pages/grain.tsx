import Layout from "@/src/components/common/layout";
import GrainTable from "@/src/components/grain/table";
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

const DashboardPageGrain = () => {
    const date = useStore((state) => state.date);
    const setDate = useStore((state) => state.setDate);
    const selectedItems = useStore((state) => state.selectedItems);

    return (
        <Layout>
            <div className="text-2xl mt-4 mb-6 font-semibold">
                Grain
            </div>
            <div className="bg-white px-3 py-4 rounded">
                <div className="flex gap-4 mb-5 flex-wrap">
                    <div className="flex items-center gap-x-2">
                        <div>Tanggal</div>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[150px] pl-3 text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    {date ? (
                                        dayjs(date).format('DD/MM/YYYY')
                                    ) : (
                                        <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={date.toDate()}
                                    onSelect={(newDate) => {
                                        setDate(dayjs(newDate))
                                    }}
                                    disabled={(date) =>
                                        date > new Date() || date < new Date("1900-01-01")
                                    }
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    {!!selectedItems.length && (
                        <div className="flex items-center gap-x-2">
                            <div>Update nama bahan</div>
                            <Select defaultValue={undefined}>
                                <SelectTrigger className="w-[280px]">
                                    <SelectValue placeholder="Pilih nama bahan" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="rojolele">Rojolele</SelectItem>
                                    <SelectItem value="pandanwangi">Pandanwangi</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    )}
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

export default DashboardPageGrain;
