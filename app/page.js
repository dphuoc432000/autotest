"use client";

import Header from "@/components/header/Header";
import Menu from "@/components/menu/Menu";
import { useState } from "react";

export default function Home() {

    const [disableMenu, setDisableMenu] = useState(true);

    const handleDisableMenu = () => {
        setDisableMenu(!disableMenu);
    };

    return (
        <>
            <Header 
                headerTitle={"Workspace"}
                handleDisableMenu={handleDisableMenu}
            ></Header>
            <main>
                {
                    !disableMenu && <Menu disableMenu={disableMenu}></Menu>
                }
            </main>
        </>
    );
}
