import { Suspense } from "react";
import { Outlet } from "react-router";
import classNames from "classnames/bind";

import "@/App.scss";
import 'leaflet/dist/leaflet.css';
import styles from "@/App.module.scss";

import { Navigation } from "@/components/Navigation/Navigation";
import { useApp } from "@/App.hooks";
import { Loader } from "@/components/Loader/Loader";
import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary";
import { Button } from "@/ui/Button/Button";
import { BurgerIcon, CloseIcon } from "@/assets/svg";


const cn = classNames.bind(styles);

export function App() {
    const { isHide, toggleHide, menuRef } = useApp();

    return (
        <div className={cn("container_app")}>
            <Button type="svg" className={cn("burger_icon")} onClick={toggleHide}>
                {BurgerIcon}
            </Button>

            <aside className={cn("burger_menu", isHide && "burger_hide")} ref={menuRef}>
                <Button type="svg" className={cn("close")} onClick={toggleHide}>
                    {CloseIcon}
                </Button>
                <Navigation />
            </aside>

            <aside className={cn("sidebar")}>
                <Navigation />
            </aside>

            <main>
                <Suspense fallback={<Loader />}>    
                    <Outlet />
                </Suspense>
            </main>
        </div>
    );
};