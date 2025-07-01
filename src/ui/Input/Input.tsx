import type { FC } from "react"

interface InputProps {
    label?: string,
    value: string,
    onChange: (value: string) => void,
}

export const Input: FC<InputProps> = ({ label, value, onChange }) => {
    return <input placeholder={label} value={value} onChange={(e) => onChange(e.target.value)}  />
};