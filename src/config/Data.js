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
    FiGitPullRequest,
    FiLink2,
} from "react-icons/fi";

import {
    FaBullhorn,
    FaBuysellads,
    FaDelicious,
    FaImages,
    FaInstagram,
    FaInstagramSquare,
    FaPinterestP,
    FaRegChartBar,
    FaRegClone,
    FaRegEye,
    FaSnapchatGhost,
    FaTiktok,
    FaTv,
    FaTwitterSquare,
} from "react-icons/fa";

import {
    BsAppIndicator,
    BsArrowCounterclockwise,
    BsBezier2,
    BsCast,
    BsEye,
    BsFilter,
    BsFunnel,
    BsJournalCheck,
    BsMegaphone,
    BsMic,
    BsPatchCheck,
    BsPinAngle,
    BsPinterest,
    BsTools,
    BsUiChecks,
} from "react-icons/bs";

import {
    BiCategoryAlt,
    BiCustomize,
    BiExtension,
    BiHive,
    BiScreenshot,
    BiShare,
    BiShoppingBag,
    BiSlider,
    BiTargetLock,
    BiVideo,
} from "react-icons/bi";

import {
    MdAutoGraph,
    MdDynamicForm,
    MdOutlineAmpStories,
    MdOutlineAnalytics,
    MdOutlineProductionQuantityLimits,
    MdOutlineTimelapse,
    MdPostAdd,
    MdQueuePlayNext,
} from "react-icons/md";

import { GiMoebiusTrefoil } from "react-icons/gi";
import { SiCanva, SiChatbot } from "react-icons/si";

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
    home: [
        {
            content: "Build a universe around your brand.",
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
            name: "E-COMMERCE",
            caption: "Bussiness",
            content: "instagram",
            icon: BiShoppingBag,
        },
        {
            name: "PRO INSTAGRAM",
            caption: "Canva",
            content: "instagram",
            icon: FaInstagramSquare,
        },
        {
            name: "PRODUCT PAGE",
            caption: "Snappt",
            content: "instagram",
            icon: MdOutlineProductionQuantityLimits,
        },
        {
            name: "STORIES",
            caption: "Mojo",
            content: "instagram",
            icon: MdOutlineAmpStories,
        },
        {
            name: "VIDEO EDITING",
            caption: "In Shot",
            content: "instagram",
            icon: BiScreenshot,
        },
    ],

    home: [
        {
            name: "1",
            caption: " ",
            content: " ",
            icon: BiShoppingBag,
        },
        {
            name: "2",
            caption: " ",
            content: " ",
            icon: FaInstagramSquare,
        },
        {
            name: "3",
            caption: " ",
            content: " ",
            icon: MdOutlineProductionQuantityLimits,
        },
        {
            name: "4",
            caption: " ",
            content: " ",
            icon: MdOutlineAmpStories,
        },
        {
            name: "5",
            caption: " ",
            content: " ",
            icon: BiScreenshot,
        },
    ],
    facebook: [
        {
            name: "PROMOTE",
            caption: "Meta for Bussiness",
            content: "instagram",
            icon: FaBullhorn,
        },
        {
            name: "REPORTING",
            caption: "Insight",
            content: "instagram",
            icon: BsCast,
        },
        {
            name: "MEASURE",
            caption: "Pixel",
            content: "instagram",
            icon: BsFunnel,
        },
        {
            name: "ANALYZE FACEBOOK",
            caption: "IQ",
            content: "instagram",
            icon: MdOutlineAnalytics,
        },
    ],
    twitter: [
        {
            name: "PRO TWITTER",
            caption: "Bussines",
            content: "instagram",
            icon: FaTwitterSquare,
        },
        {
            name: "POSTING",
            caption: "Twetdeck",
            content: "instagram",
            icon: MdPostAdd,
        },
        {
            name: "ANALYZE TWITTER",
            caption: "Buffer",
            content: "instagram",
            icon: MdOutlineAnalytics,
        },
        {
            name: "BENCHMARK",
            caption: "Talkwalker",
            content: "instagram",
            icon: MdDynamicForm,
        },
    ],
    linkedin: [
        {
            name: "REPORTING",
            caption: "Campaign Manager",
            content: "instagram",
            icon: BsBezier2,
        },
        {
            name: "AUTOMATE",
            caption: "Prospection",
            content: "instagram",
            icon: BsFunnel,
        },
        {
            name: "ANALYZE LINKEDIN",
            caption: "LeadFuze",
            content: "instagram",
            icon: MdOutlineAnalytics,
        },
    ],
    pinterest: [
        {
            name: "PRO PINTEREST",
            caption: "BISNIS",
            content: "instagram",
            icon: BsPinterest,
        },
        {
            name: "CREATION",
            caption: "Canva",
            content: "instagram",
            icon: SiCanva,
        },
        {
            name: "ANALYZE PINTEREST",
            caption: "Tailwind",
            content: "instagram",
            icon: MdOutlineAnalytics,
        },
    ],
    snapchat: [
        {
            name: "ANALYZE SNAPCHAT",
            caption: "Snaplytics",
            content: "instagram",
            icon: MdOutlineAnalytics,
        },
        {
            name: "WEBLINKS",
            caption: "Paperclip",
            content: "instagram",
            icon: FiLink2,
        },
    ],
    tiktok: [
        {
            name: "CREATE",
            caption: "LightMV",
            content: "instagram",
            icon: MdQueuePlayNext,
        },
        {
            name: "EDIT",
            caption: "BeeCut",
            content: "instagram",
            icon: FaDelicious,
        },
    ],
    twitch: [
        {
            name: "ADS",
            caption: "Advertising",
            content: "instagram",
            icon: FaBuysellads,
        },
        {
            name: "STUDIO",
            caption: "Open Broadcast Software (OBS)",
            content: "instagram",
            icon: BiCategoryAlt,
        },
        {
            name: "LIVE",
            caption: "StreamLabs",
            content: "instagram",
            icon: GiMoebiusTrefoil,
        },
        {
            name: "CHATBOT",
            caption: "NightBot",
            content: "instagram",
            icon: SiChatbot,
        },
    ],
    youtube: [
        {
            name: "ANALYZE YOUTUBE",
            caption: "Analytics",
            content: "instagram",
            icon: MdOutlineAnalytics,
        },
        {
            name: "BOOST",
            caption: "TubeBuddy",
            content: "instagram",
            icon: FaDelicious,
        },
        {
            name: "EDIT",
            caption: "KineMaster",
            content: "instagram",
            icon: FaDelicious,
        },
    ],
};

export const goalsData = {
    home: [
        {
            name: "1",
            caption: " ",
            content: " ",
            icon: FiStar,
        },
        {
            name: "2",
            caption: " ",
            content: "",
            icon: FiSliders,
        },
        {
            name: "3",
            caption: " ",
            content: "",
            icon: BsAppIndicator,
        },
    ],
    instagram: [
        {
            name: "Highlighting",
            caption: "Your activity, your feed represent your identity",
            content: "instagram",
            icon: FiStar,
        },
        {
            name: "Showcase Instagram",
            caption: "Your products and your universe",
            content: "instagram",
            icon: FiSliders,
        },
        {
            name: "Link with your community",
            caption: "By showing the backstage of your company",
            content: "instagram",
            icon: BsAppIndicator,
        },
    ],
    facebook: [
        {
            name: "Build",
            caption: "Communicaty & user loyalty",
            content: "instagram",
            icon: BsTools,
        },
        {
            name: "Share",
            caption: "Relevant content like videos & blog posts",
            content: "instagram",
            icon: BiShare,
        },
        {
            name: "Showcase Facebook",
            caption: "Your products and offres. Information about your company",
            content: "instagram",
            icon: BiExtension,
        },
    ],
    twitter: [
        {
            name: "Online Monitoring",
            caption: "& e-reputation control",
            content: "instagram",
            icon: FaRegEye,
        },
        {
            name: "React to the news",
            caption: "and interect with your community",
            content: "instagram",
            icon: FiMessageSquare,
        },
        {
            name: "Improve your visibility",
            caption: "Buffer",
            content: "instagram",
            icon: BiHive,
        },
    ],
    linkedin: [
        {
            name: "Develop your network",
            caption: "& prospect",
            content: "instagram",
            icon: FiShare2,
        },
        {
            name: "Promote your bussiness",
            caption: "Show your expertise & improve your visibility",
            content: "instagram",
            icon: FiEdit3,
        },
        {
            name: "Share industry-related content",
            caption: "and promote your company's universe",
            content: "instagram",
            icon: FiUsers,
        },
    ],
    pinterest: [
        {
            name: "Showcase your products",
            caption: "& gain visibility",
            content: "instagram",
            icon: BsEye,
        },
        {
            name: "Generate traffic",
            caption: "on your website & improve your SEO",
            content: "instagram",
            icon: BiSlider,
        },
        {
            name: "Generate Leads",
            caption: "",
            content: "instagram",
            icon: BiTargetLock,
        },
    ],
    snapchat: [
        {
            name: "Bond with your community",
            caption: "and show case your universe",
            content: "instagram",
            icon: BsPatchCheck,
        },
        {
            name: "Create & share",
            caption: "viral content",
            content: "instagram",
            icon: BiShare,
        },
        {
            name: "Show your creativity",
            caption: "promote your products",
            content: "instagram",
            icon: BiCustomize,
        },
    ],
    tiktok: [
        {
            name: "Create challenges",
            caption: "relevant to your company and community",
            content: "instagram",
            icon: BsMegaphone,
        },
        {
            name: "Create and share",
            caption: "to bond with the youngers generatuions",
            content: "instagram",
            icon: BsUiChecks,
        },
        {
            name: "Humanize your company",
            caption: "and communicate with the platform's users",
            content: "instagram",
            icon: BsAppIndicator,
        },
    ],
    twitch: [
        {
            name: "Target a young & connected auidience",
            caption: "refreshing your company's image",
            content: "instagram",
            icon: FiTarget,
        },
        {
            name: "Stand out from the competition",
            caption: "by inventing & innovating",
            content: "instagram",
            icon: FiGitPullRequest,
        },
        {
            name: "Showcase your expertise",
            caption: "& reinforce your company's trust",
            content: "instagram",
            icon: BsEye,
        },
    ],
    youtube: [
        {
            name: "Build and federate",
            caption: "a communicaty, gain notorienty & virality",
            content: "instagram",
            icon: BsJournalCheck,
        },
        {
            name: "Enchange your SEO",
            caption: "& bring traffic, humanize your bussines",
            content: "instagram",
            icon: MdAutoGraph,
        },
        {
            name: "Showcase your products",
            caption: "& bring a new dimension to your company",
            content: "instagram",
            icon: BiVideo,
        },
    ],
};

export default sidebarNav;
