import React from "react";
import Utama from "./Utama";
import gambar from "../assets/img/facebook_logo.svg";
import gambar_2 from "../assets/img/facebook_text.svg";
import instagram_logo from "../assets/img/instagram_logo.svg";
import instagram_text from "../assets/img/instagram_text.svg";
import twitter_logo from "../assets/img/twitter_logo.svg";
import twitter_text from "../assets/img/twitter_text.svg";
import linkedin_logo from "../assets/img/linkedin_logo.svg";
import linkedin_text from "../assets/img/linkedin_text.svg";
import pinterest_logo from "../assets/img/pinterest_logo.svg";
import pinterest_text from "../assets/img/pinterest_text.svg";
import snapchat_logo from "../assets/img/snapchat_logo.svg";
import snapchat_text from "../assets/img/snapchat_text.svg";
import tiktok_logo from "../assets/img/tiktok_logo.svg";
import tiktok_text from "../assets/img/tiktok_text.svg";
import twitch_logo from "../assets/img/twitch_logo.svg";
import twitch_text from "../assets/img/twitch_text.svg";
import youtube_logo from "../assets/img/youtube_logo.svg";
import youtube_text from "../assets/img/youtube_text.svg";
import { useLocation } from "react-router-dom";

const Social = () => {
    const location = useLocation();

    const curPath = window.location.pathname.split("/sm-guide-id/")[1];

    console.log(curPath, location.pathname);
    return (
        <>
            {location.pathname === "/instagram" ? (
                <Utama
                    gambar={instagram_logo}
                    gambar_2={instagram_text}
                    text_1="THE MOST POPULAR"
                    text_2="INSTAGRAM SOCIAL NETWORK"
                    color="#b42694"
                    angka_user="2.1 bilion"
                    angka_text_user="deskripsi"
                    angka_age="2.1"
                    angka_text_age="deskripsi"
                    angka_gender_woman="71.1%"
                    angka_gender_man="71.1%"
                    angka_key="2.1 bilion"
                    angka_text_key="people use Messanger"
                    add_text=""
                />
            ) : location.pathname === "/facebook" ? (
                <Utama
                    gambar={gambar}
                    gambar_2={gambar_2}
                    text_1="THE MOST POPULAR"
                    text_2="FACEBOOK SOCIAL NETWORK"
                    color="#4267B2"
                    angka_user="2.1 bilion"
                    angka_text_user="deskripsi"
                    angka_age="2.1"
                    angka_text_age="deskripsi"
                    angka_gender_woman="71.1%"
                    angka_gender_man="71.1%"
                    angka_key="2.1 bilion"
                    angka_text_key="people use Messanger"
                    add_text=""
                />
            ) : location.pathname === "/twitter" ? (
                <Utama
                    gambar={twitter_logo}
                    gambar_2={twitter_text}
                    text_1="THE MOST POPULAR"
                    text_2="TWITTER SOCIAL NETWORK"
                    color="#1DA1F2"
                    angka_user="2.1 bilion"
                    angka_text_user="deskripsi"
                    angka_age="2.1"
                    angka_text_age="deskripsi"
                    angka_gender_woman="71.1%"
                    angka_gender_man="71.1%"
                    angka_key="2.1 bilion"
                    angka_text_key="people use Messanger"
                    add_text="Morning & End of the Day"
                />
            ) : location.pathname === "/linkedin" ? (
                <Utama
                    gambar={linkedin_logo}
                    gambar_2={linkedin_text}
                    text_1="THE MOST POPULAR"
                    text_2="LINKEDIN SOCIAL NETWORK"
                    color="#0e76a8"
                    angka_user="2.1 bilion"
                    angka_text_user="deskripsi"
                    angka_age="2.1"
                    angka_text_age="deskripsi"
                    angka_gender_woman="71.1%"
                    angka_gender_man="71.1%"
                    angka_key="2.1 bilion"
                    angka_text_key="people use Messanger"
                    add_text="Office Hourse"
                />
            ) : location.pathname === "/pinterest" ? (
                <Utama
                    gambar={pinterest_logo}
                    gambar_2={pinterest_text}
                    text_1="THE MOST POPULAR"
                    text_2="PINTEREST SOCIAL NETWORK"
                    color="#F0002A"
                    angka_user="2.1 bilion"
                    angka_text_user="deskripsi"
                    angka_age="2.1"
                    angka_text_age="deskripsi"
                    angka_gender_woman="71.1%"
                    angka_gender_man="71.1%"
                    angka_key="2.1 bilion"
                    angka_text_key="people use Messanger"
                    add_text="End of the Day"
                />
            ) : location.pathname === "/snapchat" ? (
                <Utama
                    gambar={snapchat_logo}
                    gambar_2={snapchat_text}
                    text_1="THE MOST POPULAR"
                    text_2="SNAPCHAT SOCIAL NETWORK"
                    color="#fffc00"
                    angka_user="2.1 bilion"
                    angka_text_user="deskripsi"
                    angka_age="2.1"
                    angka_text_age="deskripsi"
                    angka_gender_woman="71.1%"
                    angka_gender_man="71.1%"
                    angka_key="2.1 bilion"
                    angka_text_key="people use Messanger"
                    add_text="10PM to 1AM"
                />
            ) : location.pathname === "/tiktok" ? (
                <Utama
                    gambar={tiktok_logo}
                    gambar_2={tiktok_text}
                    text_1="THE MOST POPULAR"
                    text_2="TIKTOK MOST SOCIAL NETWORK"
                    color="#69C9D0"
                    angka_user="2.1 bilion"
                    angka_text_user="deskripsi"
                    angka_age="2.1"
                    angka_text_age="deskripsi"
                    angka_gender_woman="71.1%"
                    angka_gender_man="71.1%"
                    angka_key="2.1 bilion"
                    angka_text_key="people use Messanger"
                    add_text="After School Hourse"
                />
            ) : location.pathname === "/twitch" ? (
                <Utama
                    gambar={twitch_logo}
                    gambar_2={twitch_text}
                    text_1="THE MOST POPULAR"
                    text_2="TWITCH MOST SOCIAL NETWORK"
                    color="#9147fe"
                    angka_user="2.1 bilion"
                    angka_text_user="deskripsi"
                    angka_age="2.1"
                    angka_text_age="deskripsi"
                    angka_gender_woman="71.1%"
                    angka_gender_man="71.1%"
                    angka_key="2.1 bilion"
                    angka_text_key="people use Messanger"
                    add_text="End of the Day"
                />
            ) : location.pathname === "/youtube" ? (
                <Utama
                    gambar={youtube_logo}
                    gambar_2={youtube_text}
                    text_1="THE MOST POPULAR"
                    text_2="YOUTUBE MOST SOCIAL NETWORK"
                    color="#ff0000"
                    angka_user="2.1 bilion"
                    angka_text_user="deskripsi"
                    angka_age="2.1"
                    angka_text_age="deskripsi"
                    angka_gender_woman="71.1%"
                    angka_gender_man="71.1%"
                    angka_key="2.1 bilion"
                    angka_text_key="people use Messanger"
                    add_text="End of the Day"
                />
            ) : null}
        </>
    );
};

export default Social;
