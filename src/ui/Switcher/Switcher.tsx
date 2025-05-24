import { toggleTheme } from "@/storage/reducers/themeSlice";
import { themeSelector } from "@/storage/selectors/themeSelector";
import { Switch } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"

export const Switcher = () => {
    const dispatch = useDispatch();
    const theme = useSelector(themeSelector);

    const handleToggle = () => {
        dispatch(toggleTheme());
    };

    return (
        <>
            <Switch onChange={handleToggle} checked={theme === "light"} />
            {theme}
        </>
    )
}