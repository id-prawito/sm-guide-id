import {
    FiHome,
    FiFacebook,
    FiTwitter,
    FiLinkedin,
    FiTwitch,
    FiYoutube,
    FiVideo,
    FiUsers,
    FiMaximize,
    FiMessageSquare,
    FiSliders,
    FiEdit3,
    FiUserPlus,
    FiStar,
    FiGrid,
    FiShare2,
    FiSmile,
    FiTarget,
} from "react-icons/fi";

import {
    FaImages,
    FaInstagram,
    FaPinterestP,
    FaRegChartBar,
    FaRegClone,
    FaRegEye,
    FaSnapchatGhost,
    FaTiktok,
    FaTv,
} from "react-icons/fa";

import {
    BsArrowCounterclockwise,
    BsFilter,
    BsMic,
    BsPinAngle,
} from "react-icons/bs";

import { MdOutlineTimelapse } from "react-icons/md";

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

export const adviceData = {
    instagram: [
        {
            content: "Show case your over",
            icon: FaImages,
        },
        {
            content: "Build a universe around your brand.",
            icon: FaRegEye,
        },
        {
            content:
                "Be spontaneous & authentic with stories & instagram Lives",
            icon: FiVideo,
        },
        {
            content: "Use Influncers to reach relevant communities.",
            icon: FiUsers,
        },
        {
            content: "Study & use relevant hastags.",
            icon: FiMaximize,
        },
    ],
    facebook: [
        {
            content:
                "Post visual conetnt, video and images (Video: type of post that has the best engagement rate.)",
            icon: FaRegEye,
        },
        {
            content:
                "Rely on publications that encourage reactions from internet user.",
            icon: FiMessageSquare,
        },
        {
            content:
                "Use Facebook Ads to be visinble (Indeed, the organic reach of Facebook is increasingly low.)",
            icon: FaRegChartBar,
        },
    ],
    twitter: [
        {
            content: "Used as an additional customer support.",
            icon: FaRegClone,
        },
        {
            content:
                "Find & use popluar hastag (To be found easily by your community).",
            icon: FiMaximize,
        },
        {
            content: "Use visual content (You have only 280 characters).",
            icon: FaImages,
        },
        {
            content:
                "Requires frequency of posting and an understanding of Twitter language and humors.",
            icon: FiSliders,
        },
    ],
    linkedin: [
        {
            content:
                "Use hastags in your posts (Depending on your target and the interests of your commnunity).",
            icon: FiMaximize,
        },
        {
            content: "Share visual content (image, videos, & PDF files).",
            icon: FaImages,
        },
        {
            content: "Use storytelling to create a bond.",
            icon: FiEdit3,
        },
        {
            content: "Be coreful with your hooks to attract users.",
            icon: FiMessageSquare,
        },
        {
            content:
                "Identity the people involved in your posts(This will allow  you get addiontional reach.)",
            icon: FiUserPlus,
        },
        {
            content: "Misez sur I'engangement et sur la qualite.",
            icon: FiStar,
        },
    ],
    pinterest: [
        {
            content: "Insert relevant keywords inside yours Pinterest board.",
            icon: FiGrid,
        },
        {
            content: "Requlary pin relevant content.",
            icon: BsArrowCounterclockwise,
        },
        {
            content: "Use high definition images to communication.",
            icon: FaImages,
        },
        {
            content:
                "Create collaborative boards to gather your communicaty around your brand.",
            icon: FaTv,
        },
        {
            content: "Create rich pins for your products.",
            icon: BsPinAngle,
        },
    ],
    snapchat: [
        {
            content:
                "Snapchat makes a lot of filters availble to its users, take advantage of it!",
            icon: BsFilter,
        },
        {
            content:
                "Time-based content, so feel free to post several times a week.",
            icon: MdOutlineTimelapse,
        },
        {
            content:
                "As on other social networks, videos generate more engagement than other formats.",
            icon: FiVideo,
        },
    ],
    tiktok: [
        {
            content: "Tiktok relies a lot on video-editing and filters.",
            icon: FiSliders,
        },
        {
            content:
                "Use as much chanels as possible: Tiktok videos are often shared on other social networks.",
            icon: FiShare2,
        },
        {
            content:
                "Run Contents: it is possible to offer gifts on the network. Attrct new members to your followers base by this means.",
            icon: FiUserPlus,
        },
        {
            content:
                "Don't be too serious, Tiktok is meant to be entertaining.",
            icon: FiSmile,
        },
    ],
    twitch: [
        {
            content:
                "Have the necessary equipment (Powerful computer, camera, michrophone and a very good connection).",
            icon: BsMic,
        },
        {
            content: "Be reguler",
            icon: MdOutlineTimelapse,
        },
        {
            content: "Hold online events to bring your communicaty together.",
            icon: FiTarget,
        },
        {
            content:
                "Do video advertising prior to connect delviery (Prefoll ads or through an influencer.)",
            icon: FiVideo,
        },
        {
            content: "Test your new products.",
            icon: FiSliders,
        },
    ],
    youtube: [
        {
            content: "Products video content on a recurring basis.",
            icon: BsArrowCounterclockwise,
        },
        {
            content: "Have a visual identity.",
            icon: FaRegEye,
        },
        {
            content: "Be authentic",
            icon: FiMessageSquare,
        },
        {
            content: "Invest in good equipment.",
            icon: FiVideo,
        },
        {
            content:
                "Work on your keywords, titles and descriptions so that your channel and videos are aesily found.",
            icon: FiSliders,
        },
    ],
};

export const toolsData = {
    instagram: [
        {
            name: "instagram",
            caption: "Relevant Content Like Videos and Blog Posts",
            content: "instagram",
            icon_logo: FiTwitter,
            icon: FiTwitter,
        },
        {
            name: "instagram_2",
            caption: "Relevant Content Like Videos and Blog Posts",
            content: "instagram",
            icon_logo: FiTwitter,
            icon: FiTwitter,
        },
        {
            name: "instagram_3",
            caption: "Relevant Content Like Videos and Blog Posts",
            content: "instagram",
            icon_logo: FiTwitter,
            icon: FiTwitter,
        },
    ],
};

export default sidebarNav;
