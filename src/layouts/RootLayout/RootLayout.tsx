import type { FC } from "react";
import { Outlet } from "react-router";
import classNames from "classnames/bind";

import styles from "@/layouts/RootLayout/RootLayout.module.scss";

import { SideBar } from "@/sections/SideBar/SideBar";

const cn = classNames.bind(styles);

export const Rootlayout: FC = () => {
    return (
        <div className={cn("container")}>
            <SideBar />

            <main>
                <Outlet /> 
            </main>
        </div>
    );
};