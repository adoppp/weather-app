import { type ChangeEvent, type FC } from "react";
import classNames from "classnames/bind";

import styles from "@pages/SettingsPage/SettingsPage.module.scss";

import { ThemeSwitcher } from "@/ui/ThemeSwitcher/ThemeSwitcher";

import { useLocalisation } from "@/utils/useLocalisation/useLocalisation";
import localisation from "@/data/lng/localisation.json";

const cn = classNames.bind(styles);

const SettingsPage: FC = () => {
    const { lng, setLanguage } = useLocalisation();
    const language = localisation[lng];
    
    const handleLng = (e: ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value as "en" | "ru")
    };

    return (
        <div>
            <h1 className={cn("title")}>{language.settings.title}</h1>
            <ThemeSwitcher />
            <select value={lng} onChange={(lng) => handleLng(lng)}>
                <option value="en">En</option>
                <option value="ru">Ru</option>
                <option value="ua">Ua</option>
                <option value="de">De</option>
            </select>
        </div>
    )
};

export default SettingsPage;