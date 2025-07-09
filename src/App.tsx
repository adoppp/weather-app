import { Suspense } from "react";
import { Outlet } from "react-router";
import classNames from "classnames/bind";

import "@/App.scss";
import styles from "@/App.module.scss";

import { Navigation } from "@/components/Navigation/Navigation";
import { Loader } from "@/components/Loader/Loader";
import { BurgerMenu } from "./components/BurgerMenu/BurgerMenu";


const cn = classNames.bind(styles);
export function App() {
    return (
        <div className={cn("container_app")}>
            <BurgerMenu />
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