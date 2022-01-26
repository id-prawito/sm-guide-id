import React from "react";
import { NavbarMain } from "./NavbarElements";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
    const openSidebar = () => {
        document.body.classList.add("sidebar-open");
    };

    return (
        <NavbarMain>
            <div className="navbar_container">
                <div className="navbar_content">
                    <div className="form_search">
                        <HiMenuAlt3 />
                        <input
                            type="text"
                            className="form"
                            placeholder="HOW TO USE SOCIAL MEDIA FOR YOUR E-COMMERCE"
                        />
                    </div>
                    <div className="form_date">
                        <div className="text">2021</div>
                        <div className="open-sidebar" onClick={openSidebar}>
                            <HiMenuAlt3 />
                        </div>
                    </div>
                </div>
            </div>
        </NavbarMain>
    );
};

export default Navbar;
