import type { FC } from "react";
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { useCustomLineChart } from "@ui/Chart/CustomLineChart/CustomLineChart.hooks";

interface CustomLineChartProps {
    data: { time: string; temp: number | string }[];
};

export const CustomLineChart: FC<CustomLineChartProps> = ({ data }) => {
    const { CustomLabel, CustomTooltip } = useCustomLineChart();
    
    return (
        <ResponsiveContainer width="100%" height={280}>
            <LineChart data={data}>
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line dataKey="temp" stroke="#1f77b4" fill="#1f77b4" label={<CustomLabel />} />
            </LineChart>
        </ResponsiveContainer>
    );
};