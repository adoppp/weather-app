import type { FC } from "react";
import type { LabelProps } from "recharts";

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
                <rect x={xCoord - 10} y={yCoord - 26} width={20} height={16} fill="#0d1117" rx={4} />
                <text x={xCoord} y={yCoord - 20} fill="#F9F9F9" fontSize={14} textAnchor="middle">
                    {value}
                </text>
            </g>
        )
    };

    return { CustomLabel };
};