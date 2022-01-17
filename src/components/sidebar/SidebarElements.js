import styled from "styled-components";

export const SidebarMain = styled.div`
    .sidebar {
        display: flex;
        align-items: stretch;
        justify-content: flex-start;
        flex-direction: column;
        color: #4e4d4f;
        width: 320px;
        background-color: #fff;
        height: 100vh;
        position: fixed;
        top: 0;
        z-index: 100;
        border-radius: 0px 10px 10px 0px;
        box-shadow: rgb(2 12 27 / 70%) 0px 10px 30px -26px;

        &__logo {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 171px;

            img {
                --size: 55px;
                width: var(--size);
                height: var(--size);
            }

            .sidebar-close {
                cursor: pointer;
                display: none;

                svg {
                    font-size: 2rem;
                }
            }
        }

        &__menu {
            display: flex;
            align-items: stretch;
            justify-content: flex-start;
            flex-direction: column;
            flex-grow: 1;
            gap: 35px;
            padding-bottom: 40px;

            .menu_item {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                position: relative;
                gap: 20px;
                padding-left: 15%;
                transition: color 0.3s ease-in-out;

                &:hover {
                    color: #8624db;
                }

                &.active {
                    font-weight: 700;
                    color: #8624db;

                    &::before {
                        content: "";
                        position: absolute;
                        height: 100%;
                        width: 5px;
                        left: 0;
                        top: 0;
                        background-color: #8624db;
                        border-top-right-radius: 20px;
                        border-bottom-right-radius: 20px;
                    }
                }

                .menu_icon {
                    --size: 30px;
                    width: var(--size);
                    height: var(--size);

                    svg {
                        width: 100%;
                        height: 100%;
                    }
                }

                &:last-child {
                    margin-top: auto;
                }

                .pembungkus {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    padding-right: 30px;

                    .bungkus {
                        display: inline-flex;
                        align-items: center;
                        gap: 20px;
                        cursor: pointer;
                    }
                }
            }
        }
    }
`;
