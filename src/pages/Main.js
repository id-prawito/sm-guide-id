import React from "react";
import { SocialMain } from "./Elements";
import { FiMessageSquare, FiMoreHorizontal } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import Switch from "../components/switch";
import Render from "../components/acordion";
import Card from "../components/card";
import Tools from "../components/card/tools";

const MainPage = ({
    gambar,
    gambar_2,
    text_1,
    text_2,
    color,
    angka_user,
    angka_text_user,
    angka_age,
    angka_text_age,
    angka_gender_woman,
    angka_gender_man,
    angka_key,
    angka_text_key,
    add_text,
    id,
    gambar_white,
}) => {
    const saved = localStorage.getItem("theme");

    return (
        <SocialMain color={color}>
            <div className="social_content">
                <div className="content_date">
                    <div className="card_images">
                        <div
                            style={{ outline: `${color} 1px solid` }}
                            className="card-box text-center"
                        >
                            <div className="user-pictures">
                                <div className="pembungkus">
                                    <img
                                        src={gambar}
                                        className="img-fluid"
                                        alt="User Pic"
                                    />
                                </div>
                            </div>
                            <div className="heading_card">
                                {saved === "dark" ? (
                                    <img
                                        src={gambar_white}
                                        className="img-fluid"
                                        alt="logo_text"
                                    />
                                ) : (
                                    <img
                                        src={gambar_2}
                                        className="img-fluid"
                                        alt="logo_text"
                                    />
                                )}
                            </div>
                            <div className="form_create">
                                <div
                                    style={{ backgroundColor: color }}
                                    className="button_my-course"
                                >
                                    <FiMessageSquare />
                                    <a
                                        href="/facebok"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {text_1}
                                    </a>
                                </div>
                            </div>
                            <div className="decsription_card">{text_2}</div>
                        </div>
                    </div>
                    <div className="card_publish">
                        <div className="publish_heading">
                            <div className="text">When the Publish</div>
                            <FiMoreHorizontal className="icon" />
                        </div>

                        <Switch color={color} id="senin" value={true} />
                        <Switch color={color} id="selasa" value={true} />
                        <Switch color={color} id="rabu" value={true} />
                        <Switch color={color} id="kamis" value={true} />
                        <Switch color={color} id="jumat" value={true} />
                        <Switch color={color} id="sabtu" value={true} />
                        <Switch color={color} id="minggu" value={true} />
                        <div
                            style={{ backgroundColor: color }}
                            className="add_content"
                        >
                            <div className="text">{add_text}</div>
                            <FaAngleDown />
                        </div>
                    </div>
                </div>
                <div className="content_goals">
                    <div className="goals_heading">
                        <div className="text">Goals</div>
                        <FiMoreHorizontal className="icon" />
                    </div>
                    <div className="goals_card">
                        <Render color={color} />
                    </div>
                </div>
                <div className="content_audience">
                    <div className="audience_heading">
                        <div className="text">Audience</div>
                        <FiMoreHorizontal className="icon" />
                    </div>
                    <div className="audience_card">
                        <div
                            style={{ outline: `1px solid ${color}` }}
                            className="card"
                        >
                            <div className="judul">ACTIVE USER</div>
                            <div style={{ color: color }} className="angkanya">
                                <div className="angka">{angka_user}</div>
                                <div className="angka_text">
                                    {angka_text_user}
                                </div>
                            </div>
                        </div>
                        <div className="card_tengah">
                            <div
                                style={{ backgroundColor: color }}
                                className="tengah"
                            >
                                <div className="content_satu">
                                    <div className="judul">AGE GROUP</div>
                                    <div className="angkanya">
                                        <div className="angka">{angka_age}</div>
                                        <div className="angka_text">
                                            {angka_text_age}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    style={{ outline: `1px solid ${color}` }}
                                    className="content_dua"
                                >
                                    <div className="judul">
                                        GENDER PREPARATION
                                    </div>
                                    <div className="content">
                                        <div className="gender">
                                            <div
                                                style={{ color: color }}
                                                className="angka"
                                            >
                                                {angka_gender_woman}
                                            </div>
                                            <div className="angka_text">
                                                Woman
                                            </div>
                                        </div>
                                        <div className="gender">
                                            <div
                                                style={{ color: color }}
                                                className="angka"
                                            >
                                                {angka_gender_man}
                                            </div>
                                            <div className="angka_text">
                                                Man
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{ outline: `1px solid ${color}` }}
                            className="card"
                        >
                            <div className="judul">KEY FIGURES</div>
                            <div style={{ color: color }} className="angkanya">
                                <div className="angka">{angka_key}</div>
                                <div className="angka_text">
                                    {angka_text_key}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="advice_content">
                <div className="advice">
                    <div className="advice_heading">
                        <div className="text">Advice</div>
                        <FiMoreHorizontal className="icon" />
                    </div>
                    <div className="card_advice">
                        <Card color={color} id={id} />
                    </div>
                </div>
                <div className="advice">
                    <div className="advice_heading">
                        <div
                            style={{ textTransform: "capitalize" }}
                            className="text"
                        >
                            {id} Tools
                        </div>
                        <FiMoreHorizontal className="icon" />
                    </div>
                    <Tools color={color} />
                </div>
            </div>
        </SocialMain>
    );
};

export const MainPageHome = ({
    gambar,
    gambar_2,
    text_1,
    text_2,
    color,
    angka_user,
    angka_text_user,
    angka_age,
    angka_text_age,
    angka_gender_woman,
    angka_gender_man,
    angka_key,
    angka_text_key,
    add_text,
    id,
    gambar_white,
}) => {
    const saved = localStorage.getItem("theme");

    return (
        <SocialMain color={color}>
            <div
                // style={{ borderRight: `1px solid ${color}` }}
                className="social_content"
            >
                <div className="content_date">
                    <div className="card_images">
                        <div
                            style={{
                                outline: `${color} 1px solid`,
                                minHeight: "360px",
                            }}
                            className="card-box text-center"
                        >
                            <div className="user-pictures">
                                <div className="pembungkus">
                                    <img
                                        style={{ display: "none" }}
                                        src={gambar}
                                        className="img-fluid"
                                        alt="User Pic"
                                    />
                                </div>
                            </div>
                            <div className="heading_card">
                                {saved === "dark" ? (
                                    <img
                                        style={{ display: "none" }}
                                        src={gambar_white}
                                        className="img-fluid"
                                        alt="logo_text"
                                    />
                                ) : (
                                    <img
                                        style={{ display: "none" }}
                                        src={gambar_2}
                                        className="img-fluid"
                                        alt="logo_text"
                                    />
                                )}
                            </div>
                            <div
                                style={{ display: "none" }}
                                className="form_create"
                            >
                                <div
                                    style={{ backgroundColor: color }}
                                    className="button_my-course"
                                >
                                    <FiMessageSquare />
                                    <a
                                        href="/facebok"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {text_1}
                                    </a>
                                </div>
                            </div>
                            <div
                                style={{ display: "none" }}
                                className="decsription_card"
                            >
                                {text_2}
                            </div>
                        </div>
                    </div>
                    <div className="card_publish">
                        <div className="publish_heading">
                            <div className="text">When the Publish</div>
                            <FiMoreHorizontal className="icon" />
                        </div>

                        <Switch color={color} id="senin" value={true} />
                        <Switch color={color} id="selasa" value={true} />
                        <Switch color={color} id="rabu" value={true} />
                        <Switch color={color} id="kamis" value={true} />
                        <Switch color={color} id="jumat" value={true} />
                        <Switch color={color} id="sabtu" value={true} />
                        <Switch color={color} id="minggu" value={true} />
                        <div
                            style={{ backgroundColor: color }}
                            className="add_content"
                        >
                            <div className="text">{add_text}</div>
                            <FaAngleDown />
                        </div>
                    </div>
                </div>
                <div className="content_goals">
                    <div className="goals_heading">
                        <div className="text">Goals</div>
                        <FiMoreHorizontal className="icon" />
                    </div>
                    <div className="goals_card">
                        <Render color={color} />
                    </div>
                </div>
                <div className="content_audience">
                    <div className="audience_heading">
                        <div className="text">Audience</div>
                        <FiMoreHorizontal className="icon" />
                    </div>
                    <div className="audience_card">
                        <div
                            style={{ outline: `1px solid ${color}` }}
                            className="card"
                        >
                            <div className="judul">ACTIVE USER</div>
                            <div style={{ color: color }} className="angkanya">
                                <div className="angka">{angka_user}</div>
                                <div className="angka_text">
                                    {angka_text_user}
                                </div>
                            </div>
                        </div>
                        <div className="card_tengah">
                            <div
                                style={{ backgroundColor: color }}
                                className="tengah"
                            >
                                <div className="content_satu">
                                    <div className="judul">AGE GROUP</div>
                                    <div className="angkanya">
                                        <div className="angka">{angka_age}</div>
                                        <div className="angka_text">
                                            {angka_text_age}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    style={{ outline: `1px solid ${color}` }}
                                    className="content_dua"
                                >
                                    <div className="judul">
                                        GENDER PREPARATION
                                    </div>
                                    <div className="content">
                                        <div className="gender">
                                            <div
                                                style={{ color: color }}
                                                className="angka"
                                            >
                                                {angka_gender_woman}
                                            </div>
                                            <div className="angka_text">
                                                Woman
                                            </div>
                                        </div>
                                        <div className="gender">
                                            <div
                                                style={{ color: color }}
                                                className="angka"
                                            >
                                                {angka_gender_man}
                                            </div>
                                            <div className="angka_text">
                                                Man
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{ outline: `1px solid ${color}` }}
                            className="card"
                        >
                            <div className="judul">KEY FIGURES</div>
                            <div style={{ color: color }} className="angkanya">
                                <div className="angka">{angka_key}</div>
                                <div className="angka_text">
                                    {angka_text_key}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="advice_content">
                <div className="advice">
                    <div className="advice_heading">
                        <div className="text">Advice</div>
                        <FiMoreHorizontal className="icon" />
                    </div>
                    <div className="card_advice">
                        <Card color={color} id={id} />
                    </div>
                </div>
                <div className="advice">
                    <div className="advice_heading">
                        <div
                            style={{ textTransform: "capitalize" }}
                            className="text"
                        >
                            {id} Tools
                        </div>
                        <FiMoreHorizontal className="icon" />
                    </div>
                    <Tools color={color} />
                </div>
            </div>
        </SocialMain>
    );
};

export default MainPage;
