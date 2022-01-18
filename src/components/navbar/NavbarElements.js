import styled from "styled-components";
import themeList from "../../config/themeList";

export const NavbarMain = styled.div`
    width: 100%;

    .navbar_container {
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;

        .navbar_content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }

        .form_search {
            display: flex;
            align-items: center;
            background-color: ${({ theme: { theme } }) =>
                theme === themeList.light ? "#fff" : "#1f2937"};
            border-radius: 8px;
            color: ${({ theme: { theme } }) =>
                theme === themeList.light ? "#000" : "#fff"};
            /* color: #000; */
            padding: 6px 15px;
            gap: 10px;
            width: 520px;
            /* box-shadow: rgb(2 12 27 / 70%) 0px 10px 30px -20px; */

            box-shadow: ${({ theme: { theme } }) =>
                theme === themeList.light
                    ? "rgb(2 12 27 / 70%) 0px 10px 30px -20px"
                    : "rgb(0 0 0 / 70%) 0px 10px 30px -20px"};

            svg {
                font-size: 20px;
            }

            .form {
                outline: none;
                border-radius: 8px;
                width: 100%;
                font-size: 14px;
                height: 30px;
                letter-spacing: 1px;
                background: transparent;
                color: ${({ theme: { theme } }) =>
                    theme === themeList.light ? "#000" : "#fff"};
            }

            input::placeholder {
                color: ${({ theme: { theme } }) =>
                    theme === themeList.light ? "#000" : "#fff"};
                font-weight: 500;
            }
        }

        .form_date {
            display: flex;
            gap: 20px;

            color: ${({ theme: { theme } }) =>
                theme === themeList.light ? "#000" : "#fff"};

            svg {
                font-size: 20px;
            }
        }
    }
`;
