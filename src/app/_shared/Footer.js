import React from "react";
import styled from "styled-components";
import { backgroundBeigeColor, breakpoint, S3Key } from "../../utils";
import { SmallIcon } from "../_shared/index";

const PhoneBlackIcon = S3Key + "phone-black.png";
const EmailBlackIcon = S3Key + "email-black.png";
const LocationBlackIcon = S3Key + "location-black.png";
const FacebookBlackIcon = S3Key + "facebook-black.png";
const InstagramBlackIcon = S3Key + "instagram-black.png";
const TwitterBlackIcon = S3Key + "twitter-black.png";

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterSection side="left">
                <FooterHeader>Chat With Us</FooterHeader>
                <FooterItem>
                    <FooterItemIcon src={PhoneBlackIcon} alt="phone" side="left" />
                    <ContentText>+91 83083 29038</ContentText>
                </FooterItem>
                <FooterItem>
                    <FooterItemIcon src={EmailBlackIcon} alt="email" side="left" />
                    <ContentText>info@idylworld.com</ContentText>
                </FooterItem>
                <FooterItem>
                    <FooterItemIcon src={LocationBlackIcon} alt="location" side="left" />
                    <ContentText>123 Idylworld</ContentText>
                </FooterItem>
            </FooterSection>
            <FooterSection side="right">
                <FooterHeader>Follow Us</FooterHeader>
                <FooterItem>
                    <FooterItemIcon src={FacebookBlackIcon} alt="facebook" side="right" />
                    <ContentText>Facebook</ContentText>
                </FooterItem>
                <FooterItem>
                    <FooterItemIcon src={InstagramBlackIcon} alt="instagram" side="right" />
                    <ContentText>Instagram</ContentText>
                </FooterItem>
                <FooterItem>
                    <FooterItemIcon src={TwitterBlackIcon} alt="twitter" side="right" />
                    <ContentText>Twitter</ContentText>
                </FooterItem>
            </FooterSection>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
    min-height: 200px;
    width: 100%;
    background: ${backgroundBeigeColor};
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (min-width: ${breakpoint}) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const FooterSection = styled.div`
    padding: 20px 0;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: ${breakpoint}) {
        padding: 0 40px;
        width: auto;
        align-items: ${(props) => (props.side === "left" ? "flex-start" : "flex-end")};
    }
`;

const ContentText = styled.div`
    font-size: 16px;
    font-weight: 400;
`;

const FooterHeader = styled(ContentText)`
    text-transform: uppercase;
    margin: 10px 0;
`;

const FooterItemIcon = styled(SmallIcon)`
    margin-right: 10px;
`;

const FooterItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 7px 0;
`;
