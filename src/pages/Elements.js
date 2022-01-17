import styled from "styled-components";
import themeList from "../config/themeList";

export const SocialMain = styled.div`
    width: 620px;
    height: 80vh;
    padding-top: 20px;

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

        .content_date {
            display: flex;
            justify-content: space-between;

            .card_publish {
                display: flex;
                flex-direction: column;
                gap: 10px;
                width: 340px;

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
                    /* height: 30px; */
                    align-items: center;
                    /* background-color: #808080; */
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

            .audience_heading {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .audience_card {
                display: grid;
                width: 100%;
                grid-template-columns: 24% 48% 24%;
                /* gap: 10px; */
                height: 200px;
                justify-content: space-between;

                .card_tengah {
                    border-radius: 8px;
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    background-color: #fff;
                    /* padding: 10px; */
                    box-shadow: rgb(2 12 27 / 70%) 0px 10px 30px -30px;
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
                        /* background-color: #0f71c9; */
                        border-radius: 8px;

                        .content_satu {
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            height: 100%;
                            width: 140px;
                            padding: 10px;
                            color: #fff;
                            border-radius: 8px;

                            .angkanya {
                                font-weight: 500;
                            }
                        }

                        .content_dua {
                            background-color: #fff;
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
                    background-color: #fff;
                    padding: 10px;
                    box-shadow: rgb(2 12 27 / 70%) 0px 10px 30px -30px;
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
        /* cursor: pointer; */
        max-width: 240px;
        min-height: 300px;
        justify-content: space-between;
        box-shadow: rgb(2 12 27 / 70%) 0px 10px 30px -20px;

        /* outline: #0f71c9 1px solid; */

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
