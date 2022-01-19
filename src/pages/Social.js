import React from "react";
import Main from "./Main";
import gambar from "../assets/img/facebook_logo.svg";
import gambar_2 from "../assets/img/facebook_text.svg";
import instagram_logo from "../assets/img/instagram_logo.svg";
import instagram_text from "../assets/img/instagram_text.svg";
import instagram_text_white from "../assets/img/instagram_text_white.svg";
import twitter_logo from "../assets/img/twitter_logo.svg";
import twitter_text from "../assets/img/twitter_text.svg";
import linkedin_logo from "../assets/img/linkedin_logo.svg";
import linkedin_text from "../assets/img/linkedin_text.svg";
import linkedin_text_white from "../assets/img/linkedin_text_white.svg";
import pinterest_logo from "../assets/img/pinterest_logo.svg";
import pinterest_text from "../assets/img/pinterest_text.svg";
import snapchat_logo from "../assets/img/snapchat_logo.svg";
import snapchat_text from "../assets/img/snapchat_text.svg";
import snapchat_text_white from "../assets/img/snapchat_text_white.svg";
import tiktok_logo from "../assets/img/tiktok_logo.svg";
import tiktok_text from "../assets/img/tiktok_text.svg";
import tiktok_text_white from "../assets/img/tiktok_text_white.svg";
import twitch_logo from "../assets/img/twitch_logo.svg";
import twitch_text from "../assets/img/twitch_text.svg";
import youtube_logo from "../assets/img/youtube_logo.svg";
import youtube_text from "../assets/img/youtube_text.svg";
import youtube_text_white from "../assets/img/youtube_text_white.svg";
import { useLocation } from "react-router-dom";

const Social = () => {
    const location = useLocation();

    return (
        <>
            {location.pathname === "/instagram" ? (
                <Main
                    gambar={instagram_logo}
                    gambar_2={instagram_text}
                    gambar_white={instagram_text_white}
                    text_1="M-Commerce"
                    text_2="INSTAGRAM is SOCIAL MEDIA"
                    color="#b42694"
                    angka_user="1+ bilion"
                    angka_text_user=""
                    angka_age="71%"
                    angka_text_age="are less than 35"
                    angka_gender_woman="51.4%"
                    angka_gender_man="49.6%"
                    angka_key="90%"
                    angka_text_key="of users follow brand accounts r brand-related content."
                    add_text=""
                    id="instagram"
                />
            ) : location.pathname === "/facebook" ? (
                <Main
                    gambar={gambar}
                    gambar_2={gambar_2}
                    gambar_white={gambar_2}
                    text_1="THE MOST POPULAR"
                    text_2="FACEBOOK is SOCIAL NETWORK"
                    color="#4267B2"
                    angka_user="4.51 bilion"
                    angka_text_user=""
                    angka_age="49%"
                    angka_text_age="are in the 25-49 age group"
                    angka_gender_woman="-"
                    angka_gender_man="-"
                    angka_key="1.3 bilion"
                    angka_text_key="people use Messenger"
                    add_text=""
                    id="facebook"
                />
            ) : location.pathname === "/twitter" ? (
                <Main
                    gambar={twitter_logo}
                    gambar_2={twitter_text}
                    gambar_white={twitter_text}
                    text_1="THE MICRO"
                    text_2="BLOGGING PLATFORM"
                    color="#1DA1F2"
                    angka_user="330 million"
                    angka_text_user=""
                    angka_age="38.5%"
                    angka_text_age="are between 25 & 34 years old"
                    angka_gender_woman="61.6%"
                    angka_gender_man="38.4%"
                    angka_key="-"
                    angka_text_key="-"
                    add_text="Morning & End of the Day"
                    id="twitter"
                />
            ) : location.pathname === "/linkedin" ? (
                <Main
                    gambar={linkedin_logo}
                    gambar_2={linkedin_text}
                    gambar_white={linkedin_text_white}
                    text_1="PROFESSIONAL"
                    text_2="LINKEDIN is SOCIAL MEDIA"
                    color="#0e76a8"
                    angka_user="722 million"
                    angka_text_user=""
                    angka_age="59.9%"
                    angka_text_age="of its users are in the 25-34 years old age groupd"
                    angka_gender_woman="57%"
                    angka_gender_man="43%"
                    angka_key="-"
                    angka_text_key=""
                    add_text="Office Hourse"
                    id="linkedin"
                />
            ) : location.pathname === "/pinterest" ? (
                <Main
                    gambar={pinterest_logo}
                    gambar_2={pinterest_text}
                    gambar_white={pinterest_text}
                    text_1="PINS"
                    text_2="FOR YOURS SOCIAL MEDIA"
                    color="#F0002A"
                    angka_user="454 million"
                    angka_text_user=""
                    angka_age="38%"
                    angka_text_age="are more than 50 years old"
                    angka_gender_woman="71.1%"
                    angka_gender_man="28.9%"
                    angka_key="55%"
                    angka_text_key="of users use Pinterest to make products"
                    add_text="End of the Day"
                    id="pinterest"
                />
            ) : location.pathname === "/snapchat" ? (
                <Main
                    gambar={snapchat_logo}
                    gambar_2={snapchat_text}
                    gambar_white={snapchat_text_white}
                    text_1="FILTER USE"
                    text_2="ON SOCIAL MEDIA"
                    color="#dfdd00"
                    angka_user="293 million"
                    angka_text_user=""
                    angka_age="-"
                    angka_text_age="Most present people are between 13 & 17 years old. Followed by 18 to 20 years old"
                    angka_gender_woman="71.1%"
                    angka_gender_man="71.1%"
                    angka_key="2.1 bilion"
                    angka_text_key="people use Messanger"
                    add_text="10PM to 1AM"
                    id="snapchat"
                />
            ) : location.pathname === "/tiktok" ? (
                <Main
                    gambar={tiktok_logo}
                    gambar_2={tiktok_text}
                    gambar_white={tiktok_text_white}
                    text_1="THE NEWCOMER"
                    text_2="of SOCIAL PLATFORM"
                    color="#69C9D0"
                    angka_user="73.7 million"
                    angka_text_user="(U.S.A)"
                    angka_age="-"
                    angka_text_age="The Platform attracts users from 10 to 19 years old, followed by 20 to 29 years old"
                    angka_gender_woman="60%"
                    angka_gender_man="40%"
                    angka_key="2.6 bilion"
                    angka_text_key="download in the world"
                    add_text="After School Hourse"
                    id="tiktok"
                />
            ) : location.pathname === "/twitch" ? (
                <Main
                    gambar={twitch_logo}
                    gambar_2={twitch_text}
                    gambar_white={twitch_text}
                    text_1="THE NUMBER #1"
                    text_2="STREAMING PLATFORM"
                    color="#9147fe"
                    angka_user="30 million"
                    angka_text_user=""
                    angka_age="70%"
                    angka_text_age="are between 16 & 34 years old"
                    angka_gender_woman="-"
                    angka_gender_man="-"
                    angka_key="1.190 billion"
                    angka_text_key="minutes of stream in 2021"
                    add_text="End of the Day"
                    id="twitch"
                />
            ) : location.pathname === "/youtube" ? (
                <Main
                    gambar={youtube_logo}
                    gambar_2={youtube_text}
                    gambar_white={youtube_text_white}
                    text_1="THE MOST VIDEO"
                    text_2="of SOCIAL MEDIA"
                    color="#ff0000"
                    angka_user="2.1 bilion"
                    angka_text_user=""
                    angka_age="81%"
                    angka_text_age="U.S adults are Youtube users"
                    angka_gender_woman="56%"
                    angka_gender_man="44%"
                    angka_key="684000"
                    angka_text_key="hours of video watched every minute"
                    add_text="9PM & 11PM"
                    id="youtube"
                />
            ) : null}
        </>
    );
};

export default Social;
