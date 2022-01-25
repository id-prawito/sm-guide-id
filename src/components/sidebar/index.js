import React, { useEffect, useState } from "react";
import ThemeSwitcher from "../../config/ThemeSwicter";
import { MenuItem, SidebarMain } from "./SidebarElements";
import { FiX, FiLogOut } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import sidebarNav from "../../config/Data";
import logo from "../../assets/img/logo.png";

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const location = useLocation();

    useEffect(() => {
        const curPath = window.location.pathname.split("/sm-guide-id/")[1];

        const activeItem = sidebarNav.findIndex(
            (item) => item.section === curPath
        );

        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    const warna = (
        <>
            {location.pathname === "/instagram"
                ? "#b42694"
                : location.pathname === "/facebook"
                ? "#4267B2"
                : location.pathname === "/twitter"
                ? "#1DA1F2"
                : location.pathname === "/linkedin"
                ? "#0e76a8"
                : location.pathname === "/pinterest"
                ? "#F0002A"
                : location.pathname === "/snapchat"
                ? "#dfdd00"
                : location.pathname === "/tiktok"
                ? "#69C9D0"
                : location.pathname === "/twitch"
                ? "#9147fe"
                : location.pathname === "/youtube"
                ? "#ff0000"
                : location.pathname === "/"
                ? "#7e7e7e"
                : null}
        </>
    );

    const warna_object = warna.props.children;

    const closeSidebar = () => {
        document.querySelector(".main__content").style.transform =
            "scale(1) translateX(0)";
        setTimeout(() => {
            document.body.classList.remove("sidebar-open");
            document.querySelector(".main__content").style.transform = "";
        }, 500);
    };

    return (
        <SidebarMain color={warna_object}>
            <div className="sidebar">
                <div className="sidebar__logo">
                    <img src={logo} alt="logo" />
                    <div className="sidebar-close" onClick={closeSidebar}>
                        <FiX />
                    </div>
                </div>
                <div className="sidebar__menu">
                    {sidebarNav.map((item, index) => (
                        <MenuItem
                            color={warna_object}
                            className={`${activeIndex === index && "active"}`}
                            key={`nav-${index}`}
                            onClick={closeSidebar}
                        >
                            <div className="menu_icon">
                                <item.icon />
                            </div>
                            <div className="menu_text">
                                <Link to={item.link}>{item.text}</Link>
                            </div>
                        </MenuItem>
                    ))}
                    <MenuItem color={warna_object} className="menu_item">
                        <div className="pembungkus">
                            <div className="bungkus">
                                <div className="menu_icon">
                                    <FiLogOut />
                                </div>
                                <div className="menu_text">Logout</div>
                            </div>
                            <ThemeSwitcher />
                        </div>
                    </MenuItem>
                </div>
            </div>
        </SidebarMain>
    );
};

export default Sidebar;
