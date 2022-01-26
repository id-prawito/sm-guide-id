import styled from "styled-components";
import { devices } from "../../assets/scss/_media";

export const MainElements = styled.div`
    overflow-x: auto;
    padding-left: 384px;
    &::-webkit-scrollbar {
        display: none;
    }

    ${devices.smartphone} {
        padding-left: 0;
        width: 100vw;
    }

    ${devices.ipads} {
        padding-left: 0;
        width: 100vw;
    }

    ${devices.tablet} {
        padding-left: 0;
        width: 100vw;
    }

    @media only screen and (min-width: 1024px) and (max-width: 1400px) {
        padding-left: 300px;
    }

    @media only screen and (min-width: 1400px) and (max-width: 1600px) {
        padding-left: 384px;
    }
`;
