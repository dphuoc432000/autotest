import { useEffect, useState } from "react";

import "./hamburgerMenuButton.scss";

const HamburgerMenuButton = (props) => {
    const [toggle, setToggle] = useState(false);

    const animationHandle = (e) => {
        setToggle(!toggle);
        props.handleDisableMenu();
    };
    
    const handleMenu = () => {
        // var toggle = document.querySelector('.toggle input');
        // var animate = setInterval(() => {
        //     toggle.checked = !toggle.checked;
        // }, 3000);

        // document.querySelector('body').addEventListener('click', () => {
        //     clearInterval(animate);
        // });
    };

    return (
        <>
            <label className="toggle">
                <input type="checkbox" onChange ={animationHandle} checked={toggle}/>
                <div>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                    <svg>
                        <use xlinkHref="#path"/>
                    </svg>
                    <svg>
                        <use xlinkHref="#path"/>
                    </svg>
                </div>
            </label>
                    
            <svg xmlns="http://www.w3.org/2000/svg" style={{"display": "none"}}>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="path">
                    <path d="M22,22 L2,22 C2,11 11,2 22,2 C33,2 42,11 42,22"></path>
                </symbol>
            </svg>
            <a className="dribbble" href="https://dribbble.com/shots/5505871-Menu-toggle-close-animation" target="_blank">
                <img src="https://dribbble.com/assets/logo-small-2x-9fe74d2ad7b25fba0f50168523c15fda4c35534f9ea0b1011179275383035439.png" alt=""/>
            </a>
        </>
    );
};

export default HamburgerMenuButton;
