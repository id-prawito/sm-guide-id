import React from "react";
import Navbar from "../navbar";
import Sidebar from "../sidebar";
import { Outlet } from "react-router-dom";
import { MainElements } from "./ContentElements";

const MainContent = () => {
    return (
        <>
            <Sidebar />
            <MainElements>
                <div className="main__content">
                    <Navbar />
                    <Outlet />
                </div>
            </MainElements>
        </>
    );
};

export default MainContent;
