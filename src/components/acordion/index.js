import React, { useState } from "react";
import { AcordionContent } from "./AcordionElements";

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

export default Render;
