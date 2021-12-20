import React, { useState } from "react";
import {
    backgroundBeigeColor,
    blue,
    breakpoint,
    brown,
    green,
    idylworldTextColor,
    orange,
    S3Key,
    yellow,
} from "../../utils";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Drawer } from "antd";
import { Icon, SmallIcon } from "../_shared/index";
const MenuBlackIcon = S3Key + "menu-black.png";
const CloseBlackIcon = S3Key + "close-black.png";
const IdylworldLogo = S3Key + "idylworld-logo.png";
const PhoneBlackIcon = S3Key + "phone-black.png";
const EmailBlackIcon = S3Key + "email-black.png";

export const Navbar = () => {
    const history = useHistory();
    const [isDrawerOpen, updateIsDrawerOpen] = useState(false);
    const path = window.location.pathname;
    console.log(path);

    const openDrawer = () => {
        updateIsDrawerOpen(true);
    };

    const closeDrawer = () => {
        updateIsDrawerOpen(false);
    };

    const getCloseIcon = () => {
        return <Icon src={CloseBlackIcon} alt="exit" />;
    };

    return (
        <>
            <HeaderContainer>
                <LeftSection>
                    <IdylworldHeaderLogo
                        src={IdylworldLogo}
                        alt="idylworld logo"
                        onClick={() => {
                            history.push("/");
                            window.scrollTo(0, 0);
                        }}
                    />
                    <IdylworldText
                        onClick={() => {
                            history.push("/");
                            window.scrollTo(0, 0);
                        }}
                    >
                        Idylworld
                    </IdylworldText>
                </LeftSection>
                <RightSection>
                    <nav>
                        <NavbarLinkContainer>
                            <NavbarLink
                                bold={path === "/community"}
                                color={path === "/community" ? yellow : "black"}
                                onClick={() => {
                                    history.push("/community");
                                    window.scrollTo(0, 0);
                                }}
                            >
                                Community
                            </NavbarLink>
                            <NavbarLink
                                bold={path === "/connected"}
                                color={path === "/connected" ? blue : "black"}
                                onClick={() => {
                                    history.push("/connected");
                                    window.scrollTo(0, 0);
                                }}
                            >
                                Connected
                            </NavbarLink>
                            <NavbarLink
                                bold={path === "/abundant"}
                                color={path === "/abundant" ? green : "black"}
                                onClick={() => {
                                    history.push("/abundant");
                                    window.scrollTo(0, 0);
                                }}
                            >
                                Abundant
                            </NavbarLink>
                            <NavbarLink
                                bold={path === "/healthful"}
                                color={path === "/healthful" ? orange : "black"}
                                onClick={() => {
                                    history.push("/healthful");
                                    window.scrollTo(0, 0);
                                }}
                            >
                                Healthful
                            </NavbarLink>
                            <NavbarLink
                                bold={path === "/orchards"}
                                color={path === "/orchards" ? brown : "black"}
                                onClick={() => {
                                    history.push("/orchards");
                                    window.scrollTo(0, 0);
                                }}
                            >
                                Orchards
                            </NavbarLink>
                            <NavbarLink
                                bold={path === "/bungalow"}
                                color={path === "/bungalow" ? yellow : "black"}
                                onClick={() => {
                                    history.push("/bungalow");
                                    window.scrollTo(0, 0);
                                }}
                            >
                                Bungalow
                            </NavbarLink>
                        </NavbarLinkContainer>
                        <MenuButton src={MenuBlackIcon} alt="menu" onClick={openDrawer} />
                        <Drawer
                            placement="right"
                            closable={true}
                            onClose={closeDrawer}
                            visible={isDrawerOpen}
                            closeIcon={getCloseIcon()}
                        >
                            <ul>
                                <NavbarLink
                                    bold={path === "/community"}
                                    color={path === "/community" ? yellow : "black"}
                                    onClick={() => {
                                        history.push("/community");
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    Community
                                </NavbarLink>
                                <NavbarLink
                                    bold={path === "/connected"}
                                    color={path === "/connected" ? blue : "black"}
                                    onClick={() => {
                                        history.push("/connected");
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    Connected
                                </NavbarLink>
                                <NavbarLink
                                    bold={path === "/abundant"}
                                    color={path === "/abundant" ? green : "black"}
                                    onClick={() => {
                                        history.push("/abundant");
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    Abundant
                                </NavbarLink>
                                <NavbarLink
                                    bold={path === "/healthful"}
                                    color={path === "/healthful" ? orange : "black"}
                                    onClick={() => {
                                        history.push("/healthful");
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    Healthful
                                </NavbarLink>
                                <NavbarLink
                                    bold={path === "/orchards"}
                                    color={path === "/orchards" ? brown : "black"}
                                    onClick={() => {
                                        history.push("/orchards");
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    Orchards
                                </NavbarLink>
                                <NavbarLink
                                    bold={path === "/bungalow"}
                                    color={path === "/bungalow" ? yellow : "black"}
                                    onClick={() => {
                                        history.push("/bungalow");
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    Bungalow
                                </NavbarLink>
                            </ul>
                            <div style={{ borderTop: "1px solid black" }}>
                                <BottomBarItem>MAHARERA P52100023443</BottomBarItem>
                                <BottomBarItem>+91 8554 9822 03</BottomBarItem>
                                <BottomBarItem>sales@idylworld.com</BottomBarItem>
                            </div>
                        </Drawer>
                    </nav>
                </RightSection>
            </HeaderContainer>
            <BottomBarContainer>
                <BottomBarItem>MAHARERA P52100023443</BottomBarItem>
                <FooterItem>
                    <FooterItemIcon src={PhoneBlackIcon} alt="phone" side="left" />
                    <ContentText>+91 8554 9822 03</ContentText>
                </FooterItem>
                <FooterItem>
                    <FooterItemIcon src={EmailBlackIcon} alt="email" side="left" />
                    <ContentText>sales@idylworld.com</ContentText>
                </FooterItem>
            </BottomBarContainer>
        </>
    );
};

const IdylworldHeaderLogo = styled.img`
    width: 32px;
    height: 32px;
    margin-right: 10px;

    @media (min-width: ${breakpoint}) {
        width: 42px;
        height: 42px;
    }
`;

const HeaderContainer = styled.header`
    height: 70px;
    background: ${backgroundBeigeColor};
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    z-index: 10;
`;

const BottomBarContainer = styled.div`
    height: 40px;
    background: ${backgroundBeigeColor};
    width: 100%;
    position: fixed;
    top: 70px;
    left: 0;
    display: none;
    z-index: 10;

    @media (min-width: ${breakpoint}) {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
    }
`;

const BottomBarItem = styled.div`
    font-size: 16px;
    margin: 20px 0;

    @media (min-width: ${breakpoint}) {
        margin: 0;
    }
`;

const LeftSection = styled.div`
    padding: 0 20px;
    width: calc(100vw - 64px);
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (min-width: ${breakpoint}) {
        width: 30%;
    }
`;

const RightSection = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 0 20px;

    @media (min-width: ${breakpoint}) {
        width: 70%;
    }
`;

const IdylworldText = styled.h1`
    color: ${idylworldTextColor};
    font-weight: 500;
    margin: 0;
    cursor: pointer;
    letter-spacing: 0.5px;

    @media (min-width: ${breakpoint}) {
        font-size: 36px;
    }
`;

const MenuButton = styled(Icon)`
    display: block;

    @media (min-width: ${breakpoint}) {
        display: none;
    }
`;

const NavbarLinkContainer = styled.ul`
    display: none;

    @media (min-width: ${breakpoint}) {
        display: flex;
        flex-direction: row;
    }
`;

const NavbarLink = styled.li`
    color: ${(props) => props.color};
    margin: 20px 0;
    text-transform: uppercase;
    font-size: 16px;
    cursor: pointer;
    font-weight: ${(props) => (props.bold ? "bold" : "normal")};

    :hover {
        font-style: italic;
    }

    @media (min-width: ${breakpoint}) {
        margin: 0 20px;
    }
`;

const ContentText = styled.div`
    font-size: 16px;
    font-weight: 400;
`;

const FooterItemIcon = styled(SmallIcon)`
    margin-right: 10px;
`;

const FooterItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
