import React, { useEffect, useState } from "react";
import ThemeSwitcher from "../../config/ThemeSwicter";
import { SidebarMain } from "./SidebarElements";
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
                : null}
        </>
    );
    return (
        <SidebarMain color={warna}>
            <div className="sidebar">
                <div className="sidebar__logo">
                    <img src={logo} alt="logo" />

                    <div className="sidebar-close">
                        <FiX />
                    </div>
                </div>
                <div className="sidebar__menu">
                    {sidebarNav.map((item, index) => (
                        <div
                            className={`menu_item ${
                                activeIndex === index && "active"
                            }`}
                            key={`nav-${index}`}
                        >
                            <div className="menu_icon">
                                <item.icon />
                            </div>
                            <div className="menu_text">
                                <Link to={item.link}>{item.text}</Link>
                            </div>
                        </div>
                    ))}
                    <div className="menu_item">
                        <div className="pembungkus">
                            <div className="bungkus">
                                <div className="menu_icon">
                                    <FiLogOut />
                                </div>
                                <div className="menu_text">Logout</div>
                            </div>
                            <ThemeSwitcher />
                        </div>
                    </div>
                </div>
            </div>
        </SidebarMain>
    );
};

export default Sidebar;
