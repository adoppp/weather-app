import type { FC } from "react";
import classNames from "classnames/bind";

import styles from "@/components/BurgerMenu/BurgerMenu.module.scss";

import { BurgerIcon, CloseIcon } from "@/assets/svg";
import { useBugerMenu } from "@/components/BurgerMenu/BurgerMenu.hooks";
import { Navigation } from "@/components/Navigation/Navigation";
import { Button } from "@/ui/Button/Button";

const cn = classNames.bind(styles);

export const BurgerMenu: FC = () => {
    const { isHide, toggleHide, menuRef } = useBugerMenu();
    
    return (
        <>
            <Button type="svg" className={cn("burger_icon")} onClick={toggleHide}>
                {BurgerIcon}
            </Button>
            <aside className={cn("burger_menu", isHide && "burger_hide")} ref={menuRef}>
                <Button type="svg" className={cn("close")} onClick={toggleHide}>
                    {CloseIcon}
                </Button>
                <Navigation />
            </aside>
        </>
    )
}