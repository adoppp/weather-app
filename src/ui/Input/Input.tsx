import type { FC } from "react"
import classNames from "classnames/bind";

import styles from "@/ui/Input/Input.module.scss";

interface InputProps {
    label?: string,
    value: string,
    onChange: (value: string) => void,
}

const cn = classNames.bind(styles);

export const Input: FC<InputProps> = ({ label, value, onChange }) => {
    return <input placeholder={label} value={value} onChange={(e) => onChange(e.target.value)} className={cn("input")}  />
};