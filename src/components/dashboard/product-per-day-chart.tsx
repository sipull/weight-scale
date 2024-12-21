import { Bar, BarChart, Legend, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
    { month: "First", grain: 186, rice: 80 },
    { month: "Second", grain: 305, rice: 200 },
    { month: "Third", grain: 237, rice: 120 },
    { month: "Fourth", grain: 73, rice: 190 },
]

const chartConfig = {
    grain: {
        label: "Grain",
        color: "#FFBB28",
    },
    rice: {
        label: "Rice",
        color: "#00C49F",
    },
} satisfies ChartConfig

const ProductPerMonthChart = () => {
    return (
        <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Legend />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="grain" fill="var(--color-grain)" radius={4} />
                <Bar dataKey="rice" fill="var(--color-rice)" radius={4} />
                <Bar dataKey="PandanWangi" stackId="a" fill="#8884d8" />
                <Bar dataKey="Gropak" stackId="a" fill="#82ca9d" />
            </BarChart>
        </ChartContainer>
    )
}

export default ProductPerMonthChart;