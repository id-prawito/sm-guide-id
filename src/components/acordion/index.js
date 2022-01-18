import React, { useState } from "react";
import { AcordionContent, AcordionContentTools } from "./AcordionElements";
import { toolsData } from "../../config/Data";
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
    let items = [
        {
            name: "Header 1",
            caption: "Comunity and User Loyalti",
            content: <div>Lorem Inpsum</div>,
        },
        {
            name: "Header 2",
            caption: "Relevant Content Like Videos and Blog Posts",
            content: <div>Lorem Inpsum</div>,
        },
        {
            name: "Header 3",
            caption: "Your Product and Offers",
            content: <div>Lorem Inpsum</div>,
        },
    ];

    return (
        <div className="container">
            <Acordion items={items} color={color} />
        </div>
    );
};

export const RenderTools = ({ color }) => {
    // console.log(toolsData.instagram);

    const location = useLocation();

    console.log(location.pathname);

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
            ) : null}

            {/* <AcordionTools items={toolsData.instagram} color={color} /> */}
        </div>
    );
};

export default Render;
