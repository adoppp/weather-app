import type { FC } from "react";
import { CustomLineChart } from "@ui/Chart/CustomLineChart/CustomLineChart";

interface ChartProps {
    type: "line" | "bar" | "pie",
    data: { time: string; temp: number | string }[];
}


export const Chart: FC<ChartProps> = ({ type, data }) => {
    
    switch (type) {
        case "line":
            return <CustomLineChart data={data}  />
    
        default:
            return <div>Error in Chart.tsx</div>;
    }
};