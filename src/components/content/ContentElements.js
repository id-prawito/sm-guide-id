import styled from "styled-components";
import { devices } from "../../assets/scss/_media";

export const MainElements = styled.div`
    overflow-x: hidden;
    padding-left: 384px;

    ${devices.smartphone} {
        padding-left: 0;
        width: 100vw;
        /* overflow-x: hidden; */
    }

    /* .main {
        &__content {
            min-height: 130vh;
            padding: 48px;
            margin-right: 40px;
            transition: all 0.5s ease-in-out;

            ${devices.smartphone} {
                padding: 24px;
                position: relative;
                background-color: #1a1d29;
                z-index: 100;
                margin-right: 0;
            }
        }
    } */

    /* .main {
        &__content {
            height: 100vh;
            overflow: hidden;
            border-top-left-radius: 30px;
            border-bottom-left-radius: 30px;
            transform: scale(0.8) translateX(50%);
            transition: all 0.5s ease-in-out;
        }
    } */
`;
