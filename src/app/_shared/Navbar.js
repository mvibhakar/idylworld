import React, { useState } from "react";
import { backgroundBeigeColor, breakpoint, idylworldTextColor, S3Key } from "../../utils";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Drawer } from "antd";
import { Icon } from "../_shared/index";
const MenuBlackIcon = S3Key + "menu-black.png";
const CloseBlackIcon = S3Key + "close-black.png";
const IdylworldLogo = S3Key + "idylworld-logo.png";

export const Navbar = () => {
    const history = useHistory();
    const [isDrawerOpen, updateIsDrawerOpen] = useState(false);

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
                    <IdylworldHeaderLogo src={IdylworldLogo} alt="idylworld logo" onClick={() => history.push("/")} />
                    <IdylworldText onClick={() => history.push("/")}>Idylworld</IdylworldText>
                </LeftSection>
                <RightSection>
                    <nav>
                        <NavbarLinkContainer>
                            <NavbarLink onClick={() => history.push("/connected")}>Connected</NavbarLink>
                            <NavbarLink>Abundant</NavbarLink>
                            <NavbarLink>Healthful</NavbarLink>
                            <NavbarLink>Orchards</NavbarLink>
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
                                <NavbarLink onClick={() => history.push("/connected")}>Connected</NavbarLink>
                                <NavbarLink>Abundant</NavbarLink>
                                <NavbarLink>Healthful</NavbarLink>
                                <NavbarLink>Orchards</NavbarLink>
                            </ul>
                        </Drawer>
                    </nav>
                </RightSection>
            </HeaderContainer>
            <Drawer
                placement="right"
                closable={true}
                onClose={closeDrawer}
                visible={isDrawerOpen}
                closeIcon={getCloseIcon()}
            >
                <nav>
                    <ul>
                        <NavbarLink onClick={() => history.push("/connected")}>Connected</NavbarLink>
                        <NavbarLink>Abundant</NavbarLink>
                        <NavbarLink>Healthful</NavbarLink>
                        <NavbarLink>Orchards</NavbarLink>
                    </ul>
                </nav>
            </Drawer>
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
    color: black;
    margin: 20px 0;
    text-transform: uppercase;
    font-size: 16px;
    cursor: pointer;

    :hover {
        font-style: italic;
    }

    @media (min-width: ${breakpoint}) {
        margin: 0 20px;
    }
`;
