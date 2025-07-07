import { type FC } from "react";
import classNames from "classnames/bind";

import styles from "@pages/SettingsPage/SettingsPage.module.scss";

import { ThemeSwitcher } from "@/ui/ThemeSwitcher/ThemeSwitcher";

const cn = classNames.bind(styles);

const SettingsPage: FC = () => {

    return (
        <div>
            <h1 className={cn("title")}>Settings</h1>
            <ThemeSwitcher />
        </div>
    )
};

export default SettingsPage;