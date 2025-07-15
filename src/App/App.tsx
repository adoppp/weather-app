import { Suspense } from "react";
import { Outlet } from "react-router";
import classNames from "classnames/bind";

import "@/App/App.scss";
import styles from "@/App/App.module.scss";

import { Navigation } from "@/App/Navigation/Navigation";
import { Loader } from "@/components/Loader/Loader";
import { BurgerMenu } from "@/App/BurgerMenu/BurgerMenu";


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