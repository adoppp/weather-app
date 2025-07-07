import { type FC } from "react";
import classNames from "classnames/bind";

import styles from "@pages/SettingsPage/SettingsPage.module.scss";

import { Select } from "@/ui/Select/Select";
import { useSettingsPage } from "./SettingsPage.hooks";
import { Button } from "@/ui/Button/Button";

const cn = classNames.bind(styles);

const SettingsPage: FC = () => {
    const { lng, language, handleLng, selectOptions, theme, toggleTheme } = useSettingsPage();

    return (
        <div>
            <h1 className={cn("title")}>{language.settings.title}</h1>
            <ul className={cn("settings_list")}>
                <li>
                    <p>{`${language.settings.theme} (${language.settings.current} ${theme})`}</p>
                    <Button type="switcher" onClick={toggleTheme} active={theme === "light" ? true : false} />
                </li>
                <li>
                    <p>{language.settings.lng}</p>
                    <Select sValue={lng} options={selectOptions} onChange={handleLng} />
                </li>
            </ul>
        </div>
    );
};

export default SettingsPage;