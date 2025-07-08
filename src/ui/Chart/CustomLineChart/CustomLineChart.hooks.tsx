import type { FC } from "react";
import type { LabelProps } from "recharts";

import { useTheme } from "@/utils/useTheme/useTheme";

interface PayloadEntry {
    name: string;
    value: string | number;
    color: string;
};

interface CustomTooltipProps {
    active?: boolean;
    payload?: PayloadEntry[];
    label?: string | number;
};

export const useCustomLineChart = () => {
    const { theme } = useTheme();

    const CustomLabel: FC = ({ x, y, value }: LabelProps) => {
        const yCoord =
            typeof y === 'number'
                ? y
                : typeof y === 'string'
                    ? parseFloat(y)
                    : 0;
        
        const xCoord =
        typeof x === 'number'
            ? x
            : typeof x === 'string'
                ? parseFloat(x)
                : 0;
    
        return (
                <text x={xCoord} y={yCoord + 32} fill={`${theme === "light" ? "#7d481b" : "#1f77b4"}`} fontSize={16} textAnchor="middle">
                    {value}
                </text>
        )
    };

    const CustomTooltip: FC<CustomTooltipProps> = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div style={{ backgroundColor: theme === "light" ? "rgb(238, 122, 71, 0.7)" : "rgb(31, 119, 180, 0.7)", border: `1px solid ${theme === "light" ? "#7d481b" : "#fffdf6"}`, borderRadius: "15px", padding: "12px" }}>
                    <p style={{marginBottom: "4px", color: theme === "light" ? "#7d481b" : "#202B3B"}}><strong>{label}</strong></p>
                    {payload.map((entry, index) => (
                        <p key={`item-${index}`} style={{ color: "#fffdf6" }}>
                            {entry.name}: {entry.value}°
                        </p>
                    ))}
                </div>
            );
        };
        
        return null;
    };

    return { CustomLabel, CustomTooltip, theme };
};