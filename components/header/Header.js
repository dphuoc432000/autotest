"use client";

import { useEffect, useState } from "react";
import "./header.css";
import HamburgerMenuButton from "../button/hamburgerMenuButton/HamburgerMenuButton";

/**
 * 
 * @param {object} props { headerTitle }
 * @returns 
 */
const Header = (props) => {

    const [headerTitle, setHeaderTitle] = useState(props.headerTitle);

    useEffect(() => {
        setHeaderTitle(props.headerTitle);
    }, [props.headerTitle]);

    return (
        <header className="h-12 flex items-center bg-tailwind_header--color">
            <h4 className="text-tailwind_header__title--color mx-5">{headerTitle}</h4>
            <HamburgerMenuButton handleDisableMenu={props.handleDisableMenu}></HamburgerMenuButton>
        </header>
    );
};

export default Header;