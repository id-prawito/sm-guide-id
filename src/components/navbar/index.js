import React from "react";
import { NavbarMain } from "./NavbarElements";
import { FiBell } from "react-icons/fi";

const Navbar = () => {
    return (
        <NavbarMain>
            <div className="navbar_container">
                <div className="navbar_content">
                    <div className="form_search">
                        <FiBell />
                        <input
                            type="text"
                            className="form"
                            placeholder="HOW TO USE SOCIAL MEDIA FOR YOUR E-COMMERCE"
                        />
                    </div>
                    <div className="form_date">
                        <div className="text">2021</div>
                        <FiBell />
                    </div>
                </div>
            </div>
        </NavbarMain>
    );
};

export default Navbar;
