import { type ChangeEvent, type FC } from "react";
import classNames from "classnames/bind";

import styles from "@ui/Select/Select.module.scss";
import { useSelect } from "@ui/Select/Select.hooks";
import { ArrowIcon } from "@/assets/svg";


const cn = classNames.bind(styles);

interface SelectProps {
    sValue: string,
    options: { oValue: string, label: string}[],
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void,
};

export const Select: FC<SelectProps> = ({ sValue, options, onChange}) => {
    const { optionsItem } = useSelect({ options });

    return (
        <div className={cn("wrapper")}>
            <select value={sValue} onChange={onChange} className={cn("select")}>
                {optionsItem}
            </select>
            <span className={cn("icon")}>
                {ArrowIcon}
            </span>
        </div>
    );
};