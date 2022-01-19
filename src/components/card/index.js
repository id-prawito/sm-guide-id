import React from "react";
import { adviceData } from "../../config/Data";

const Card = ({ id, color }) => {
    // console.log(adviceData.facebook);

    return (
        <>
            {id === "instagram" ? (
                <>
                    {adviceData.instagram.map((item, i) => (
                        <div className="card_nya" key={i}>
                            <div className="icon_advice">
                                <item.icon color={color} />
                            </div>
                            <div className="content_advice">{item.content}</div>
                        </div>
                    ))}
                </>
            ) : id === "facebook" ? (
                <>
                    {adviceData.facebook.map((item, i) => (
                        <div className="card_nya" key={i}>
                            <div className="icon_advice">
                                <item.icon color={color} />
                            </div>
                            <div className="content_advice">{item.content}</div>
                        </div>
                    ))}
                </>
            ) : id === "twitter" ? (
                <>
                    {adviceData.twitter.map((item, i) => (
                        <div className="card_nya" key={i}>
                            <div className="icon_advice">
                                <item.icon color={color} />
                            </div>
                            <div className="content_advice">{item.content}</div>
                        </div>
                    ))}
                </>
            ) : id === "linkedin" ? (
                <>
                    {adviceData.linkedin.map((item, i) => (
                        <div className="card_nya" key={i}>
                            <div className="icon_advice">
                                <item.icon color={color} />
                            </div>
                            <div className="content_advice">{item.content}</div>
                        </div>
                    ))}
                </>
            ) : id === "pinterest" ? (
                <>
                    {adviceData.pinterest.map((item, i) => (
                        <div className="card_nya" key={i}>
                            <div className="icon_advice">
                                <item.icon color={color} />
                            </div>
                            <div className="content_advice">{item.content}</div>
                        </div>
                    ))}
                </>
            ) : id === "snapchat" ? (
                <>
                    {adviceData.snapchat.map((item, i) => (
                        <div className="card_nya" key={i}>
                            <div className="icon_advice">
                                <item.icon color={color} />
                            </div>
                            <div className="content_advice">{item.content}</div>
                        </div>
                    ))}
                </>
            ) : id === "tiktok" ? (
                <>
                    {adviceData.tiktok.map((item, i) => (
                        <div className="card_nya" key={i}>
                            <div className="icon_advice">
                                <item.icon color={color} />
                            </div>
                            <div className="content_advice">{item.content}</div>
                        </div>
                    ))}
                </>
            ) : id === "twitch" ? (
                <>
                    {adviceData.twitch.map((item, i) => (
                        <div className="card_nya" key={i}>
                            <div className="icon_advice">
                                <item.icon color={color} />
                            </div>
                            <div className="content_advice">{item.content}</div>
                        </div>
                    ))}
                </>
            ) : id === "youtube" ? (
                <>
                    {adviceData.youtube.map((item, i) => (
                        <div className="card_nya" key={i}>
                            <div className="icon_advice">
                                <item.icon color={color} />
                            </div>
                            <div className="content_advice">{item.content}</div>
                        </div>
                    ))}
                </>
            ) : id === "home" ? (
                <>
                    {adviceData.home.map((item, i) => (
                        <div className="card_nya" key={i}>
                            <div
                                style={{ display: "none" }}
                                className="icon_advice"
                            >
                                <item.icon color={color} />
                            </div>
                            <div
                                style={{ display: "none" }}
                                className="content_advice"
                            >
                                {item.content}
                            </div>
                        </div>
                    ))}
                </>
            ) : null}
        </>
    );
};

export default Card;
