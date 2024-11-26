import { Bar, BarChart, Legend, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
    { month: "Sun", grain: 186, rice: 80 },
    { month: "Mon", grain: 305, rice: 200 },
    { month: "Tues", grain: 237, rice: 120 },
    { month: "Wednes", grain: 73, rice: 190 },
    { month: "Thurs", grain: 209, rice: 130 },
    { month: "Fri", grain: 214, rice: 140 },
    { month: "Satur", grain: 237, rice: 120 },
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

const ProductPerWeekChart = () => {
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

export default ProductPerWeekChart;