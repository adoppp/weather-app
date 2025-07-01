import type { FC } from "react";
import type { LabelProps } from "recharts";

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
    const CustomLabel: FC = ({ x, y, value }: LabelProps) => {
        //if i want to customize y axis
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
            <g>
                <rect x={xCoord - 12} y={yCoord + 18} width={24} height={20} fill="#0B131E" rx={4} />
                <text x={xCoord} y={yCoord + 32} fill="#F9F9F9" fontSize={14} textAnchor="middle">
                    {value}
                </text>
            </g>
        )
    };

    const CustomTooltip: FC<CustomTooltipProps> = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div style={{ backgroundColor: '#0B131E', border: '1px solid #fff', borderRadius: "15px", padding: "12px" }}>
                    <p style={{marginBottom: "4px"}}><strong>{label}</strong></p>
                    {payload.map((entry, index) => (
                        <p key={`item-${index}`} style={{ color: entry.color }}>
                            {entry.name}: {entry.value}°
                        </p>
                    ))}
                </div>
            );
        };
        
        return null;
    };

    return { CustomLabel, CustomTooltip };
};