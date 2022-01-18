import styled from "styled-components";
import themeList from "../../config/themeList";

export const CheckBoxWrapper = styled.div`
    position: relative;
`;

export const Card = styled.div`
    /* background-color: #fff; */

    background-color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "#fff" : "#1f2937"};
    /* color: #000; */

    color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "#000" : "#fff"};
    border-radius: 8px;
    height: 35px;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
    display: flex;
    box-shadow: ${({ theme: { theme } }) =>
        theme === themeList.light
            ? "rgb(2 12 27 / 70%) 0px 10px 30px -15px"
            : "rgb(0 0 0 / 70%) 0px 10px 30px -20px"};
    outline: ${(props) => (props.color ? props.color : "#e2513a")} 1px solid;
    justify-content: space-between;
    position: relative;

    .warnanya {
        color: ${({ theme: { theme } }) =>
            theme === themeList.light ? "#000" : "#fff"};
    }
`;

export const CheckBoxLabel = styled.label`
    top: 0;
    left: 0;
    width: 42px;
    height: 22px;
    border-radius: 15px;
    background: #bebebe;
    cursor: pointer;
    &::after {
        content: " ";
        display: block;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        margin: 3px;
        background: #ffffff;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
        transition: 0.2s;
    }
`;
export const CheckBox = styled.input`
    opacity: 0;
    z-index: 2;
    border-radius: 15px;
    margin-right: -40px;
    width: 42px;
    height: 26px;
    cursor: pointer;
    &:checked + ${CheckBoxLabel} {
        background: ${(props) => (props.color ? props.color : "#e2513a")};
        &::after {
            content: "";
            display: block;
            border-radius: 50%;
            width: 15px;
            height: 15px;
            margin-left: 21px;
            transition: 0.2s;
        }
    }
`;

export const Pembungkus = styled.div`
    display: flex;
    align-items: center;
`;
