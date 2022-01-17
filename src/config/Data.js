import {
    FiHome,
    FiFacebook,
    FiTwitter,
    FiLinkedin,
    FiTwitch,
    FiYoutube,
} from "react-icons/fi";

import {
    FaInstagram,
    FaPinterestP,
    FaSnapchatGhost,
    FaTiktok,
} from "react-icons/fa";

const sidebarNav = [
    {
        link: "/",
        section: "home",
        icon: FiHome,
        text: "Home",
    },
    {
        link: "/instagram",
        section: "instagram",
        icon: FaInstagram,
        text: "Instagram",
    },
    {
        link: "/facebook",
        section: "facebook",
        icon: FiFacebook,
        text: "Facebook",
    },
    {
        link: "/twitter",
        section: "twitter",
        icon: FiTwitter,
        text: "Twitter",
    },
    {
        link: "/linkedin",
        section: "linkedin",
        icon: FiLinkedin,
        text: "Linkedin",
    },
    {
        link: "/pinterest",
        section: "pinterest",
        icon: FaPinterestP,
        text: "Pinterest",
    },
    {
        link: "/snapchat",
        section: "snapchat",
        icon: FaSnapchatGhost,
        text: "Snapchat",
    },
    {
        link: "/tiktok",
        section: "tiktok",
        icon: FaTiktok,
        text: "Tiktok",
    },
    {
        link: "/twitch",
        section: "twitch",
        icon: FiTwitch,
        text: "Twitch",
    },
    {
        link: "/youtube",
        section: "youtube",
        icon: FiYoutube,
        text: "Youtube",
    },
];

export default sidebarNav;
