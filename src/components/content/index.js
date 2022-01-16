import React from "react";
import Navbar from "../navbar";
import Sidebar from "../sidebar";
import { Outlet } from "react-router-dom";

const MainContent = () => {
    return (
        <>
            <Sidebar />
            <div className="main">
                <div className="main__content">
                    <Navbar />
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default MainContent;
