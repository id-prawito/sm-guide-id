import { Route, Routes } from "react-router-dom";
import React from "react";
import MainContent from "../components/content";
import Dashboard from "../pages/Dashboard";
import Social from "../pages/Social";

const RouteSite = () => {
    return (
        <Routes>
            <Route path="/" element={<MainContent />}>
                <Route index element={<Dashboard />} />
                <Route path="instagram" element={<Social />} />
                <Route path="facebook" element={<Social />} />
                <Route path="twitter" element={<Social />} />
                <Route path="linkedin" element={<Social />} />
                <Route path="pinterest" element={<Social />} />
                <Route path="snapchat" element={<Social />} />
                <Route path="tiktok" element={<Social />} />
                <Route path="twitch" element={<Social />} />
                <Route path="youtube" element={<Social />} />
            </Route>
        </Routes>
    );
};

export default RouteSite;
