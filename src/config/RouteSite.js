import { Route, Routes } from "react-router-dom";
import React from "react";
import MainContent from "../components/content";
import Dashboard from "../pages/Dashboard";
import Blank from "../pages/Blank";

const RouteSite = () => {
    return (
        <Routes>
            <Route path="/" element={<MainContent />}>
                <Route index element={<Dashboard />} />
                <Route path="instagram" element={<Blank />} />
                <Route path="twitter" element={<Blank />} />
                <Route path="linkedin" element={<Blank />} />
                <Route path="facebook" element={<Blank />} />
                <Route path="pinterest" element={<Blank />} />
                <Route path="snapchat" element={<Blank />} />
                <Route path="tiktok" element={<Blank />} />
                <Route path="twice" element={<Blank />} />
            </Route>
        </Routes>
    );
};

export default RouteSite;
