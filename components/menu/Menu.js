import { useEffect, useState } from "react";
import Row from "./row/Row";
import MenuCssModule from "./menu.module.css";

const recentlyliArr = [
    {
        id: "1",
        class: "main",
        title: "Recently",
    },    
    {
        id: "workplace_a",
        class: "sub",
        title: "workplace A",
    }
];

const workplacesiArr = [
    {
        id: "2",
        class: "main",
        title: "Workplaces",
    },    
    {
        id: "workplace_a",
        class: "sub",
        title: "workplace A",
    },
    {
        id: "workplace_b",
        class: "sub",
        title: "workplace B",
    },    
    {
        id: "workplace_c",
        class: "sub",
        title: "workplace C",
    },
];

const Menu = (props) => {
    useEffect(() => {
        if(!props.disableMenu){
            document.getElementsByClassName(MenuCssModule.ul)[0].style.width = "17%";
        }
    }, [props.disableMenu]);

    return (
        <ul className={MenuCssModule.ul}>
            {recentlyliArr.map((el) => 
                <Row key={el.id} class={el.class} title={el.title}></Row>
            )}
            {workplacesiArr.map((el) => 
                <Row key={el.id} class={el.class} title={el.title}></Row>
            )}
        </ul>
    );

};

export default Menu;