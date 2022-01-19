import React from "react";
import { MainPageHome } from "./Main";
import instagram_logo from "../assets/img/instagram_logo.svg";
import instagram_text from "../assets/img/instagram_text.svg";
import instagram_text_white from "../assets/img/instagram_text_white.svg";

const Dashboard = () => {
    return (
        <MainPageHome
            gambar={instagram_logo}
            gambar_2={instagram_text}
            gambar_white={instagram_text_white}
            text_1=""
            text_2=""
            color="#7e7e7e"
            angka_user=""
            angka_text_user=""
            angka_age=""
            angka_text_age=""
            angka_gender_woman=""
            angka_gender_man=""
            angka_key=""
            angka_text_key=""
            add_text=""
            id="home"
        />
    );
};

export default Dashboard;
