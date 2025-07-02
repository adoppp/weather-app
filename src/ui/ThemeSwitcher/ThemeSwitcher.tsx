import type { FC } from "react";
import classNames from "classnames/bind";

import styles from "@/ui/ThemeSwitcher/ThemeSwitcher.module.scss";

import { useTheme } from "@/utils/useTheme/useTheme";
import { Button } from "@ui/Button/Button";

const cn = classNames.bind(styles);

export const ThemeSwitcher: FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={cn("theme")}>
            <p>Change Theme (current: {theme})</p>
            <Button type="switcher" onClick={toggleTheme} active={theme === "light" ? true : false} />
        </div>
    );
};