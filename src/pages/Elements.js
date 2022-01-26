import styled from "styled-components";
import themeList from "../config/themeList";
import { devices } from "../assets/scss/_media";

export const SocialMain = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 20px;
    display: grid;
    justify-content: space-between;
    grid-template-columns: 60% 40%;

    --color: ${(props) => (props.color ? props.color : "#e2513a")};

    ${devices.smartphone} {
        display: flex;
        flex-direction: column;
    }

    ${devices.ipads} {
        display: flex;
        flex-direction: column;
    }

    ${devices.tablet} {
        display: flex;
        flex-direction: column;
    }

    ${devices.laptop} {
        display: flex;
        flex-direction: column;
    }

    .text {
        font-size: 18px;
        font-weight: 500;

        color: ${({ theme: { theme } }) =>
            theme === themeList.light ? "#000" : "#fff"};
    }

    .icon {
        font-size: 25px;
        font-weight: 500;

        color: ${({ theme: { theme } }) =>
            theme === themeList.light ? "#000" : "#fff"};
    }

    .social_content {
        display: flex;
        height: 100%;
        justify-content: flex-start;
        flex-direction: column;
        gap: 40px;
        width: 100%;
        padding-right: 50px;
        border-right: 1px solid var(--color);

        ${devices.smartphone} {
            border-bottom: 1px solid var(--color);
            border-right: none;
            padding: 20px;
            width: 100%;
        }

        ${devices.ipads} {
            border-bottom: 1px solid var(--color);
            border-right: none;
            padding: 20px;
            width: 100%;
        }

        ${devices.tablet} {
            border-bottom: 1px solid var(--color);
            border-right: none;
            padding: 20px;
            width: 100%;
        }

        ${devices.laptop} {
            border-bottom: 1px solid var(--color);
            border-right: none;
            padding: 20px;
            width: 100%;
        }

        .content_date {
            display: grid;
            grid-template-columns: 32% 62%;
            align-items: center;
            gap: 40px;

            ${devices.smartphone} {
                display: flex;
                flex-direction: column;
            }

            ${devices.ipads} {
                display: flex;
                flex-direction: column;
            }

            ${devices.tablet} {
                display: flex;
                flex-direction: column;
            }

            .card_images {
                width: 100%;

                ${devices.smartphone} {
                    width: auto;
                }

                ${devices.ipads} {
                    width: auto;
                }

                ${devices.tablet} {
                    width: auto;
                }
            }

            .card_publish {
                display: flex;
                flex-direction: column;
                gap: 10px;
                width: 100%;

                .publish_heading {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .add_content {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    padding: 6px 20px;
                    border-radius: 8px;

                    align-items: center;

                    color: #fff;

                    .text {
                        font-size: 12px;
                        font-weight: 500;
                        color: #fff;
                    }
                }
            }
        }

        .content_goals {
            display: flex;
            flex-direction: column;
            gap: 20px;

            .goals_heading {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }

        .content_audience {
            display: flex;
            flex-direction: column;
            gap: 20px;

            ${devices.smartphone} {
                height: 60vh;
            }

            ${devices.ipads} {
                height: 60vh;
            }

            ${devices.tablet} {
                height: 60vh;
            }

            .audience_heading {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .audience_card {
                display: grid;
                width: 100%;
                grid-template-columns: 24% 48% 24%;
                height: 200px;
                justify-content: space-between;

                ${devices.smartphone} {
                    flex-direction: column;
                    display: flex;
                    gap: 20px;
                    height: 100%;
                }

                ${devices.ipads} {
                    flex-direction: column;
                    display: flex;
                    gap: 20px;
                    height: 100%;
                }

                ${devices.tablet} {
                    flex-direction: column;
                    display: flex;
                    gap: 20px;
                    height: 100%;
                }

                .card_tengah {
                    border-radius: 8px;
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    background-color: #fff;

                    box-shadow: ${({ theme: { theme } }) =>
                        theme === themeList.light
                            ? "rgb(2 12 27 / 70%) 0px 10px 30px -30px"
                            : "rgb(0 0 0 / 70%) 0px 10px 30px -20px"};
                    color: #000;
                    flex-direction: column;

                    .judul {
                        font-size: 13px;
                        font-weight: 500;
                    }

                    .angkanya {
                        font-size: 20px;
                        font-weight: 500;

                        .angka {
                            font-size: 35px;
                        }

                        .angka_text {
                            font-size: 14px;
                            font-weight: 400;
                        }
                    }

                    .tengah {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        width: 100%;
                        height: 100%;

                        border-radius: 8px;
                        box-shadow: ${({ theme: { theme } }) =>
                            theme === themeList.light
                                ? "rgb(2 12 27 / 70%) 0px 10px 30px -30px"
                                : "rgb(0 0 0 / 70%) 0px 10px 30px -20px"};

                        .content_satu {
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            height: 100%;
                            width: 170px;
                            padding: 10px;
                            color: #fff;
                            border-radius: 8px;

                            .angkanya {
                                font-weight: 500;
                            }
                        }

                        .content_dua {
                            background-color: ${({ theme: { theme } }) =>
                                theme === themeList.light ? "#fff" : "#1f2937"};
                            color: ${({ theme: { theme } }) =>
                                theme === themeList.light ? "#000" : "#fff"};
                            height: 100%;
                            width: 140px;
                            padding: 10px;
                            border-radius: 8px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;

                            .content {
                                display: flex;
                                flex-direction: column;
                                gap: 10px;

                                .angka {
                                    font-size: 35px;
                                    font-weight: 500;
                                }

                                .angka_text {
                                    font-size: 14px;
                                    font-weight: 400;
                                }
                            }
                        }
                    }
                }

                .card {
                    border-radius: 8px;
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    background-color: ${({ theme: { theme } }) =>
                        theme === themeList.light ? "#fff" : "#1f2937"};
                    padding: 10px;

                    box-shadow: ${({ theme: { theme } }) =>
                        theme === themeList.light
                            ? "rgb(2 12 27 / 70%) 0px 10px 30px -30px"
                            : "rgb(0 0 0 / 70%) 0px 10px 30px -20px"};
                    color: ${({ theme: { theme } }) =>
                        theme === themeList.light ? "#000" : "#fff"};

                    flex-direction: column;

                    .judul {
                        font-size: 13px;
                        font-weight: 500;
                    }

                    .angkanya {
                        font-size: 20px;
                        font-weight: 500;

                        .angka {
                            font-size: 35px;
                        }

                        .angka_text {
                            font-size: 14px;
                            font-weight: 400;
                        }
                    }
                }
            }
        }
    }

    .user-pictures {
        width: 100%;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        .pembungkus {
            width: 100%;
            height: 100%;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: 120px;
                height: 120px;
                padding: 10px;
            }
        }
    }

    .card-box {
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;
        padding: 25px;
        background-color: ${({ theme: { theme } }) =>
            theme === themeList.light ? "#fdfdfd" : "#1f2937"};
        border-radius: 10px;
        transition: 0.5s;
        max-width: 240px;
        min-height: 300px;
        justify-content: space-between;
        box-shadow: rgb(2 12 27 / 70%) 0px 10px 30px -20px;

        ${devices.smartphone} {
            min-width: 240px;
        }

        ${devices.ipads} {
            min-width: 240px;
        }

        ${devices.tablet} {
            min-width: 240px;
        }

        .heading_card {
            font-size: 14px;
            font-weight: 500;
            transition: 0.5s;
            width: 150px;

            color: ${({ theme: { theme } }) =>
                theme === themeList.light ? "#000" : "#fff"};
        }

        .decsription_card {
            width: 180px;
            font-size: 14px;
            font-weight: 500;
            color: ${({ theme: { theme } }) =>
                theme === themeList.light ? "#000" : "#fff"};
            transition: 0.5s;
            text-align: center;
        }

        .form_create {
            display: flex;
            flex-direction: row;
            gap: 20px;

            .button_my-course {
                display: flex;
                align-items: center;
                /* background-color: #0f8af9; */
                padding: 10px 14px;
                border-radius: 6px;
                max-height: 100%;
                font-size: 14px;
                font-weight: 500;
                color: #fff;
                gap: 10px;
                transition: 0.3s all ease;
                box-shadow: rgb(2 12 27 / 70%) 0px 10px 30px -15px;

                &:hover {
                    background-color: #0f71c9;
                    transition: 0.3s all ease;
                    transform: scale(1.05);
                }
            }
        }
    }
    .card-box:hover {
        transform: scale(1.02);
    }
    .card-box p {
        color: #808080;
    }

    .advice_content {
        display: grid;
        grid-template-rows: 55% 40.8%;
        height: 100%;
        padding-left: 50px;
        width: 100%;
        align-items: stretch;
        gap: 40px;

        ${devices.smartphone} {
            padding: 20px 20px 50px 20px;
            width: 100%;
            /* height: 125vh; */
            display: flex;
            flex-direction: column;
        }

        ${devices.ipads} {
            padding: 20px 20px 50px 20px;
            width: 100%;
            /* height: 125vh; */
            display: flex;
            flex-direction: column;
        }

        ${devices.tablet} {
            padding: 20px 20px 50px 20px;
            width: 100%;
            /* height: 125vh; */
            display: flex;
            flex-direction: column;
        }

        ${devices.laptop} {
            padding: 20px 20px 50px 20px;
            width: 100%;
            /* height: 125vh; */
        }

        .advice {
            display: flex;
            flex-direction: column;
            gap: 20px;

            .advice_heading {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }

        .card_advice {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            gap: 20px;

            .card_nya {
                display: grid;
                grid-template-columns: 10% 88%;
                justify-content: space-between;
                width: 100%;
                align-items: center;
                padding: 10px;
                gap: 10px;
                border-radius: 8px;
                background-color: ${({ theme: { theme } }) =>
                    theme === themeList.light ? "#fff" : "#1f2937"};
                color: ${({ theme: { theme } }) =>
                    theme === themeList.light ? "#000" : "#fff"};
                box-shadow: ${({ theme: { theme } }) =>
                    theme === themeList.light
                        ? "rgb(2 12 27 / 70%) 0px 10px 30px -24px"
                        : "rgb(0 0 0 / 70%) 0px 10px 30px -20px"};
                height: 60px;

                .icon_advice {
                    font-size: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .content_advice {
                    font-size: 14px;
                    width: 100%;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    display: -webkit-box;
                    line-height: 20px;
                    overflow: hidden;
                    text-align: left;
                    text-overflow: ellipsis;
                    white-space: normal;
                }
            }
        }
    }
`;

export const ButtonTrash = styled.button`
    padding: 4px;
    border-radius: 4px;
    border: none;
    background: transparent;
    color: red;
    font-size: 14px;
    cursor: pointer;
    box-shadow: rgb(2 12 27 / 70%) 0px 10px 30px -15px;

    &:hover {
        transform: scale(1.2);
    }

    svg {
        font-size: 18px;
    }
`;

export const ButtonEdit = styled.button`
    padding: 4px;
    border-radius: 4px;
    border: none;
    background: transparent;
    color: #f7df1e;
    font-size: 14px;
    cursor: pointer;
    box-shadow: rgb(2 12 27 / 70%) 0px 10px 30px -15px;

    &:hover {
        transform: scale(1.2);
    }

    svg {
        font-size: 18px;
    }
`;
