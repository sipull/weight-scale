import Layout from "@/src/components/common/layout";
import GrainTable from "@/src/components/grain/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
} from "@/components/ui/pagination";
import { create } from "zustand";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { FC } from "react";

type State = {
  selectedItems: string[];
  startDate: Dayjs;
  endDate: Dayjs;
};

type Action = {
  toggleSelectedItem: (id: string) => void;
  setStartDate: (date: Dayjs) => void;
  setEndDate: (date: Dayjs) => void;
};

export const useStore = create<State & Action>((set) => ({
  selectedItems: [],
  toggleSelectedItem: (id) => {
    set((state) => ({
      selectedItems: state.selectedItems.includes(id)
        ? state.selectedItems.filter((item) => item !== id)
        : [...state.selectedItems, id],
    }));
  },

  startDate: dayjs().set("hour", 0).set("minute", 0),
  setStartDate: (date) =>
    set(() => ({
      startDate: date,
    })),

  endDate: dayjs().set("hour", 23).set("minute", 59),
  setEndDate: (date) =>
    set(() => ({
      endDate: date,
    })),
}));

const DateTimePicker: FC<{
  date: Dayjs;
  setDate: (date: Dayjs) => void;
}> = ({ date, setDate }) => {
  function handleDateSelect(date: Date | undefined) {
    if (date) {
      setDate(dayjs(date));
    }
  }

  function handleTimeChange(type: "hour" | "minute", value: string) {
    const currentDate = date || dayjs();

    if (type === "hour") {
      const hour = parseInt(value, 10);
      setDate(currentDate.clone().set("hour", hour));
    } else if (type === "minute") {
      setDate(currentDate.clone().set("minute", parseInt(value, 10)));
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full pl-3 text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          {date ? (
            date.format("DD/MM/YYYY HH:mm")
          ) : (
            <span>DD/MM/YYYY HH:mm</span>
          )}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <div className="sm:flex">
          <Calendar
            mode="single"
            selected={date ? date.toDate() : undefined}
            onSelect={handleDateSelect}
            initialFocus
          />
          <div className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
            <ScrollArea className="w-64 sm:w-auto">
              <div className="flex sm:flex-col p-2">
                {Array.from({ length: 24 }, (_, i) => i)
                  .reverse()
                  .map((hour) => (
                    <Button
                      key={hour}
                      size="icon"
                      variant={
                        date && date.hour() === hour ? "default" : "ghost"
                      }
                      className="sm:w-full shrink-0 aspect-square"
                      onClick={() => handleTimeChange("hour", hour.toString())}
                    >
                      {hour}
                    </Button>
                  ))}
              </div>
              <ScrollBar orientation="horizontal" className="sm:hidden" />
            </ScrollArea>
            <ScrollArea className="w-64 sm:w-auto">
              <div className="flex sm:flex-col p-2">
                {Array.from({ length: 12 }, (_, i) => i * 5).map((minute) => (
                  <Button
                    key={minute}
                    size="icon"
                    variant={
                      date && date.minute() === minute ? "default" : "ghost"
                    }
                    className="sm:w-full shrink-0 aspect-square"
                    onClick={() =>
                      handleTimeChange("minute", minute.toString())
                    }
                  >
                    {minute.toString().padStart(2, "0")}
                  </Button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="sm:hidden" />
            </ScrollArea>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const DashboardPageGrain = () => {
  const startDate = useStore((state) => state.startDate);
  const setStartDate = useStore((state) => state.setStartDate);

  const endDate = useStore((state) => state.endDate);
  const setEndDate = useStore((state) => state.setEndDate);

  const selectedItems = useStore((state) => state.selectedItems);

  return (
    <Layout>
      <div className="text-2xl mt-4 mb-6 font-semibold">Gabah</div>
      <div className="bg-white px-3 py-4 rounded">
        <div className="flex gap-4 mb-5 flex-wrap">
          <div className="flex items-center gap-x-6">
            <div className="flex items-center gap-x-2">
              <div>Mulai</div>
              <DateTimePicker date={startDate} setDate={setStartDate} />
            </div>
            <div className="flex items-center gap-x-2">
              <div>Berakhir</div>
              <DateTimePicker date={endDate} setDate={setEndDate} />
            </div>
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
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
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
