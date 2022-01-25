import { FaAngleDown, FaMinus, FaPlus } from "react-icons/fa";
import styled from "styled-components";
import { devices } from "../../assets/scss/_media";
import "./app.css";
import themeList from "../../config/themeList";

const Inner = styled.div`
    position: absolute;
    padding: 1rem;
    color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "#000" : "#fff"};
    font-size: 14px;
`;

const Header = styled.button`
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    font-size: 1rem;
    text-align: left;
    background: ${(props) => (props.color ? props.color : "#e2513a")};
    color: inherit;
    cursor: pointer;
    border-radius: ${(props) => (props.isActive ? "8px 8px 0px 0px" : "8px")};
    box-shadow: ${({ theme: { theme } }) =>
        theme === themeList.light
            ? "rgb(2 12 27 / 70%) 0px 10px 30px -24px"
            : "rgb(0 0 0 / 70%) 0px 10px 30px -20px"};
    transition: all 0.2s;

    ${devices.smartphone} {
        height: 80px;
    }

    ${devices.ipads} {
        height: 80px;
    }

    ${devices.tablet} {
        height: 80px;
    }

    .icon_nya {
        padding: 15px;
        color: #fff;

        svg {
            font-size: 30px;
            font-weight: 600;
        }
    }
`;

const HeaderIcon = styled.span`
    transform: rotate(${(props) => (props.isActive ? -180 : 0)}deg);
    transition: all 0.2s;
`;

const Pembungkus = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;
    justify-content: space-between;

    height: 100%;
    border-radius: ${(props) =>
        props.isActive ? "0px 8px 0px 0px" : "0px 8px 8px 0px"};
    color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "#000" : "#fff"};
    background-color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "#fff" : "#1f2937"};
    align-items: center;
    padding: 1rem;
    transition: all 0.2s;

    .heading_nya {
        display: flex;
        flex-direction: column;
        gap: 4px;

        .heading_name {
            font-size: 14px;
            font-weight: 600;
        }

        .heading_caption {
            font-size: 12px;
            font-weight: 400;
        }
    }
`;

const PembungkusSatu = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;
    justify-content: flex-start;
    color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "#000" : "#fff"};
    background-color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "#fff" : "#1f2937"};
    height: 100%;
    border-radius: ${(props) => (props.isActive ? "8px 8px 0px 0px" : "8px")};

    align-items: center;
    padding: 1rem;
    transition: all 0.2s;

    .icon_nya_b {
        border-radius: 10px;
        padding: 13px;
        color: #fff;
        display: flex;
        align-items: center;
        font-size: 25px;
    }

    .heading_nya {
        display: flex;
        flex-direction: column;
        gap: 4px;

        .heading_name {
            font-size: 14px;
            font-weight: 600;
        }

        .heading_caption {
            font-size: 12px;
            font-weight: 400;
        }
    }
`;

const Content = styled.div`
    position: relative;
    overflow: hidden;
    height: ${(props) => {
        const inner = document.getElementById(props.itemName);
        return `${props.isActive && inner ? inner.clientHeight : 0}px`;
    }};
    transition: height 0.35s;
    margin-top: -10px;
    border-radius: 0px 0px 5px 5px;
    color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "#000" : "#fff"};
    background-color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "#fff" : "#1f2937"};
    box-shadow: ${({ theme: { theme } }) =>
        theme === themeList.light
            ? "rgb(2 12 27 / 70%) 0px 10px 30px -24px"
            : "rgb(0 0 0 / 70%) 0px 10px 30px -20px"};
`;

const AcordionContent = ({
    onClick,
    itemName,
    itemContent,
    isActive,
    itemCaption,
    ItemLogo,
    color,
}) => {
    return (
        <>
            <Header isActive={isActive} onClick={onClick} color={color}>
                <div className="icon_nya">
                    <ItemLogo />
                </div>
                <Pembungkus isActive={isActive}>
                    <div className="heading_nya">
                        <div className="heading_name">{itemName}</div>
                        <div
                            style={{ fontSize: "14px" }}
                            className="heading_caption"
                        >
                            {itemCaption}
                        </div>
                    </div>

                    <HeaderIcon isActive={isActive}>
                        <FaAngleDown color={color} fontSize={20} />
                    </HeaderIcon>
                </Pembungkus>
            </Header>
            <Content itemName={itemName} isActive={isActive}>
                <Inner id={itemName}>{itemContent}</Inner>
            </Content>
        </>
    );
};

const AcordionContentTools = ({
    onClick,
    itemName,
    itemContent,
    isActive,
    itemCaption,
    ItemLogo,
    color,
}) => {
    return (
        <>
            <Header isActive={isActive} onClick={onClick} color={color}>
                <PembungkusSatu isActive={isActive}>
                    <div className="icon_nya_b" style={{ background: color }}>
                        <ItemLogo />
                    </div>
                    <div className="heading_nya">
                        <div
                            style={{ fontWeight: "400" }}
                            className="heading_name"
                        >
                            {itemName}
                        </div>
                        <div
                            style={{ fontWeight: "600", fontSize: "14px" }}
                            className="heading_caption"
                        >
                            {itemCaption}
                        </div>
                    </div>
                </PembungkusSatu>
                <HeaderIcon style={{ padding: "10px" }} isActive={isActive}>
                    {isActive ? (
                        <FaMinus fontSize={14} />
                    ) : (
                        <FaPlus fontSize={14} />
                    )}
                </HeaderIcon>
            </Header>
            <Content itemName={itemName} isActive={isActive}>
                <Inner id={itemName}>{itemContent}</Inner>
            </Content>
        </>
    );
};

export { AcordionContent, AcordionContentTools };
