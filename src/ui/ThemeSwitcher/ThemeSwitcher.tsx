import type { FC } from "react";
import classNames from "classnames/bind";

import styles from "@/ui/ThemeSwitcher/ThemeSwitcher.module.scss";

import { Button } from "@ui/Button/Button";
import { useThemeSwitcher } from "@/ui/ThemeSwitcher/ThemeSwitcher.hooks";

const cn = classNames.bind(styles);

export const ThemeSwitcher: FC = () => {
    const { theme, toggleTheme, language } = useThemeSwitcher();

    return (
        <div className={cn("theme")}>
            <p>{`${language.settings.theme} (${language.settings.current} ${theme})`}</p>
            <Button type="switcher" onClick={toggleTheme} active={theme === "light" ? true : false} />
        </div>
    );
};