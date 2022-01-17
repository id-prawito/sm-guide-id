import React from "react";
import { SocialMain } from "./Elements";
import { FiMessageSquare, FiMoreHorizontal } from "react-icons/fi";
import facebook_logo from "../assets/img/facebook_logo.svg";
import facebook_text from "../assets/img/facebook_text.svg";
import Switch from "../components/switch";
import Render from "../components/acordion";

const Instagram = () => {
    return (
        <SocialMain>
            <div className="social_content">
                <div className="content_date">
                    <div className="card_images">
                        <div className="card-box text-center">
                            <div className="user-pictures">
                                <div className="pembungkus">
                                    <img
                                        src={facebook_logo}
                                        className="img-fluid"
                                        alt="User Pic"
                                    />
                                </div>
                            </div>
                            <div className="heading_card">
                                <img
                                    src={facebook_text}
                                    className="img-fluid"
                                    alt="logo_text"
                                />
                            </div>

                            <div className="form_create">
                                <div className="button_my-course">
                                    <FiMessageSquare />
                                    <a
                                        href="/facebok"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        THE MOST POPULAR
                                    </a>
                                </div>
                            </div>
                            <div className="decsription_card">
                                SOCIAL NETWORK
                            </div>
                        </div>
                    </div>
                    <div className="card_publish">
                        <div className="publish_heading">
                            <div className="text">When the Publish</div>
                            <FiMoreHorizontal className="icon" />
                        </div>
                        <Switch color="#0f8af9" id="senin" value={true} />
                        <Switch color="#0f8af9" id="selasa" value={true} />
                        <Switch color="#0f8af9" id="rabu" value={true} />
                        <Switch color="#0f8af9" id="kamis" value={true} />
                        <Switch color="#0f8af9" id="jumat" value={true} />
                        <Switch color="#0f8af9" id="sabtu" value={true} />
                        <Switch color="#0f8af9" id="minggu" value={true} />
                    </div>
                </div>
                <div className="content_goals">
                    <div className="goals_heading">
                        <div className="text">When the Publish</div>
                        <FiMoreHorizontal className="icon" />
                    </div>
                    <div className="goals_card">
                        <Render color="#0f8af9" />
                    </div>
                </div>
                <div className="content_audience">
                    <div className="audience_heading">
                        <div className="text">Audience</div>
                        <FiMoreHorizontal className="icon" />
                    </div>
                    <div className="audience_card">
                        <div className="card">
                            <div className="judul">ACTIVE USER</div>
                            <div className="angkanya">
                                <div className="angka">2.1 bilion</div>
                                <div className="angka_text">bilion</div>
                            </div>
                        </div>
                        <div className="card_tengah">
                            <div className="tengah">
                                <div className="content_satu">
                                    <div className="judul">AGE GROUP</div>
                                    <div className="angkanya">
                                        <div className="angka">2.1</div>
                                        <div className="angka_text"></div>
                                    </div>
                                </div>
                                <div className="content_dua">
                                    <div className="judul">
                                        GENDER PREPARATION
                                    </div>
                                    <div className="content">
                                        <div className="gender">
                                            <div className="angka">71.1%</div>
                                            <div className="angka_text">
                                                Woman
                                            </div>
                                        </div>
                                        <div className="gender">
                                            <div className="angka">71.1%</div>
                                            <div className="angka_text">
                                                Woman
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="judul">KEY FIGURES</div>
                            <div className="angkanya">
                                <div className="angka">2.1 bilion</div>
                                <div className="angka_text">
                                    people use Messanger
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SocialMain>
    );
};

export default Instagram;
