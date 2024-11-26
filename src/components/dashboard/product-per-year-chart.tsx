import { Bar, BarChart, Legend, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
    { month: "Jan", grain: 186, rice: 80 },
    { month: "Feb", grain: 335, rice: 200 },
    { month: "March", grain: 237, rice: 120 },
    { month: "April", grain: 73, rice: 190 },
    { month: "May", grain: 209, rice: 130 },
    { month: "June", grain: 214, rice: 140 },
    { month: "July", grain: 186, rice: 80 },
    { month: "August", grain: 305, rice: 200 },
    { month: "Sept", grain: 237, rice: 120 },
    { month: "Oct", grain: 73, rice: 190 },
    { month: "Nov", grain: 209, rice: 130 },
    { month: "Dec", grain: 214, rice: 140 },
]

const chartConfig = {
    grain: {
        label: "Grain",
        color: "#2563eb",
    },
    rice: {
        label: "Rice",
        color: "#60a5fa",
    },
} satisfies ChartConfig

const ProductPerYearChart = () => {
    return (
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={chartData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Legend />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="grain" fill="var(--color-grain)" radius={4} />
                <Bar dataKey="rice" fill="var(--color-rice)" radius={4} />
            </BarChart>
        </ChartContainer>
    )
}

export default ProductPerYearChart;