import styled from "styled-components";
import { devices } from "../../assets/scss/_media";
import themeList from "../../config/themeList";

export const MenuItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    gap: 20px;
    padding-left: 15%;
    transition: color 0.3s ease-in-out;

    --color: ${(props) => (props.color ? props.color : "#e2513a")};

    &:hover {
        color: var(--color);
    }

    &.active {
        color: var(--color);

        &:nth-child(3n - 2) {
            &::before {
                content: "";
                position: absolute;
                height: 60%;
                width: 5px;
                left: 0;
                top: 0;
                background-color: var(--color);
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
            }

            &::after {
                content: "";
                position: absolute;
                height: 60%;
                width: 5px;
                right: 0;
                top: 0;
                background-color: var(--color);
                border-top-right-radius: 20px;
                border-bottom-right-radius: 20px;
            }
        }

        &::before {
            content: "";
            position: absolute;
            height: 100%;
            width: 5px;
            left: 0;
            top: 0;
            background-color: var(--color);
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
        }

        &::after {
            content: "";
            position: absolute;
            height: 100%;
            width: 5px;
            right: 0;
            top: 0;
            background-color: var(--color);
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
        }
    }

    .menu_icon {
        --size: 22px;
        width: var(--size);
        height: var(--size);

        svg {
            width: 100%;
            height: 100%;
        }
    }

    .menu_text {
        font-size: 14px;
        font-weight: 500;
    }

    &:last-child {
        margin-top: auto;
    }

    &:nth-child(3n - 2) {
        border-bottom: 1.8px solid var(--color);
        padding-bottom: 20px;
    }

    .pembungkus {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .bungkus {
            display: inline-flex;
            align-items: center;
            gap: 20px;
            cursor: pointer;
        }
    }
`;

export const SidebarMain = styled.div`
    .sidebar {
        display: flex;
        align-items: stretch;
        justify-content: flex-start;
        flex-direction: column;
        color: ${({ theme: { theme } }) =>
            theme === themeList.light ? "#4e4d4f" : "#fff"};
        width: 300px;
        padding: 35px;
        background-color: ${({ theme: { theme } }) =>
            theme === themeList.light ? "#fff" : "#1f2937"};
        height: 100vh;
        position: fixed;
        gap: 20px;
        top: 0;
        z-index: 100;
        border-radius: 0px 10px 10px 0px;

        box-shadow: ${({ theme: { theme } }) =>
            theme === themeList.light
                ? "rgb(2 12 27 / 70%) 0px 10px 30px -26px"
                : "rgb(0 0 0 / 70%) 0px 10px 30px -20px"};

        ${devices.smartphone} {
            width: 100vw;
            background-color: ${({ theme: { theme } }) =>
                theme === themeList.light ? "#fff" : "#1f2937"};
            color: ${({ theme: { theme } }) =>
                theme === themeList.light ? "#4e4d4f" : "#fff"};
            z-index: 1;
            padding: 15px 35px 35px 8px;
        }
        &__logo {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding-left: 15%;
            height: 120px;

            ${devices.smartphone} {
                justify-content: space-between;
                padding-left: 8%;
            }

            img {
                --size: 40px;
                width: var(--size);
                height: var(--size);
            }

            .sidebar-close {
                cursor: pointer;
                display: none;

                ${devices.smartphone} {
                    display: initial;
                    background: transparent;
                    /* border: 1px solid #fff; */
                    border: ${({ theme: { theme } }) =>
                        theme === themeList.light
                            ? "1px solid #222"
                            : "1px solid #fff"};
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;
                }

                svg {
                    font-size: 1.4rem;
                }
            }
        }

        &__menu {
            display: flex;
            align-items: stretch;
            justify-content: flex-start;
            flex-direction: column;
            flex-grow: 1;
            gap: 30px;
            padding-bottom: 40px;

            ${devices.smartphone} {
                width: 180px;
            }
        }
    }
`;
