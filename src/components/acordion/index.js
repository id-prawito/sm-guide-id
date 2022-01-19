import React, { useState } from "react";
import { AcordionContent, AcordionContentTools } from "./AcordionElements";
import { goalsData, toolsData } from "../../config/Data";
import { useLocation } from "react-router-dom";

const Acordion = ({ items, color }) => {
    const [active, setActive] = useState();

    const handleClick = (name) => {
        setActive(name === active ? null : name);
    };

    return (
        <div className="container_item">
            {items.map((item, i) => {
                let isActive = active === item.name;

                return (
                    <AcordionContent
                        color={color}
                        key={i}
                        onClick={() => handleClick(item.name)}
                        itemCaption={item.caption}
                        itemName={item.name}
                        itemContent={item.content}
                        ItemLogo={item.icon}
                        isActive={isActive}
                    />
                );
            })}
        </div>
    );
};

const AcordionTools = ({ items, color }) => {
    const [active, setActive] = useState();

    const handleClick = (name) => {
        setActive(name === active ? null : name);
    };

    return (
        <div className="container_item">
            {items.map((item, i) => {
                let isActive = active === item.name;

                return (
                    <AcordionContentTools
                        color={color}
                        key={i}
                        onClick={() => handleClick(item.name)}
                        itemCaption={item.caption}
                        itemName={item.name}
                        itemContent={item.content}
                        ItemLogo={item.icon}
                        isActive={isActive}
                    />
                );
            })}
        </div>
    );
};

const Render = ({ color }) => {
    const location = useLocation();

    return (
        <div className="container">
            {location.pathname === "/instagram" ? (
                <Acordion items={goalsData.instagram} color={color} />
            ) : location.pathname === "/facebook" ? (
                <Acordion items={goalsData.facebook} color={color} />
            ) : location.pathname === "/twitter" ? (
                <Acordion items={goalsData.twitter} color={color} />
            ) : location.pathname === "/linkedin" ? (
                <Acordion items={goalsData.linkedin} color={color} />
            ) : location.pathname === "/pinterest" ? (
                <Acordion items={goalsData.pinterest} color={color} />
            ) : location.pathname === "/snapchat" ? (
                <Acordion items={goalsData.snapchat} color={color} />
            ) : location.pathname === "/tiktok" ? (
                <Acordion items={goalsData.tiktok} color={color} />
            ) : location.pathname === "/twitch" ? (
                <Acordion items={goalsData.twitch} color={color} />
            ) : location.pathname === "/youtube" ? (
                <Acordion items={goalsData.youtube} color={color} />
            ) : location.pathname === "/" ? (
                <Acordion items={goalsData.home} color={color} />
            ) : null}
        </div>
    );
};

export const RenderTools = ({ color }) => {
    // console.log(toolsData.instagram);

    const location = useLocation();

    // console.log(location.pathname);

    return (
        <div className="container">
            {location.pathname === "/instagram" ? (
                <AcordionTools items={toolsData.instagram} color={color} />
            ) : location.pathname === "/facebook" ? (
                <AcordionTools items={toolsData.facebook} color={color} />
            ) : location.pathname === "/twitter" ? (
                <AcordionTools items={toolsData.twitter} color={color} />
            ) : location.pathname === "/linkedin" ? (
                <AcordionTools items={toolsData.linkedin} color={color} />
            ) : location.pathname === "/pinterest" ? (
                <AcordionTools items={toolsData.pinterest} color={color} />
            ) : location.pathname === "/snapchat" ? (
                <AcordionTools items={toolsData.snapchat} color={color} />
            ) : location.pathname === "/tiktok" ? (
                <AcordionTools items={toolsData.tiktok} color={color} />
            ) : location.pathname === "/twitch" ? (
                <AcordionTools items={toolsData.twitch} color={color} />
            ) : location.pathname === "/youtube" ? (
                <AcordionTools items={toolsData.youtube} color={color} />
            ) : location.pathname === "/" ? (
                <AcordionTools items={toolsData.home} color={color} />
            ) : null}
        </div>
    );
};

export default Render;
