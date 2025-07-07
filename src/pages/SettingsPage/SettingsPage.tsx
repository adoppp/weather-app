import { type ChangeEvent, type FC } from "react";
import classNames from "classnames/bind";

import styles from "@pages/SettingsPage/SettingsPage.module.scss";

import { ThemeSwitcher } from "@/ui/ThemeSwitcher/ThemeSwitcher";
import { useLocalisation } from "@/utils/useLocalisation/useLocalisation";

const cn = classNames.bind(styles);

const SettingsPage: FC = () => {
    const { lng, setLanguage } = useLocalisation();
    
    const handleLng = (e: ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value as "en" | "ru")
    };

    return (
        <div>
            <h1 className={cn("title")}>Settings</h1>
            <ThemeSwitcher />
            <select value={lng} onChange={(lng) => handleLng(lng)}>
                <option value="en">En</option>
                <option value="ru">Ru</option>
            </select>
        </div>
    )
};

export default SettingsPage;