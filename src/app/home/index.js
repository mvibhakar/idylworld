import React from "react";
import {
    Main,
    FullscreenSection,
    VariableHeightSection,
    H1,
    Text,
    SectionHeader,
    SectionSubHeader,
    ContentContainer,
    LargeScreenOnly,
    IconInfoItemContainer,
    Video,
} from "../_shared";
import { IconInfoItem } from "../_shared/IconInfoItem";
import { S3Key, breakpoint, yellow } from "../../utils";
import styled from "styled-components";
import { ControlBar } from "video-react";
import ScrollAnimation from "react-animate-on-scroll";
import "video-react/dist/video-react.css";

const HeroImage = S3Key + "idylworld-hero.jpg";
const ScrollImage = S3Key + "scroll-button.png";

export const Home = () => {
    return (
        <Main>
            <HeroSection>
                <HeroHeader>Welcome to Idylworld, </HeroHeader>
                <HeroTextContainer>
                    Pune's exceptional hill orchards community of connected, abundant and healthful orchards for the
                    successful discerning global Indian.
                </HeroTextContainer>
                <ScrollButton src={ScrollImage} alt="scroll" />
            </HeroSection>
            <VariableHeightSection>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <SectionHeader color={yellow}>Idylworld Strives To Be</SectionHeader>
                        <IconInfoItemContainer>
                            <IconInfoItem color="blue" title="connected" width="200px">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </IconInfoItem>
                            <IconInfoItem color="green" title="abundant" width="200px">
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </IconInfoItem>
                            <IconInfoItem color="orange" title="healthful" width="200px">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur.
                            </IconInfoItem>
                        </IconInfoItemContainer>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
            <LargeScreenOnly>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <SectionHeader color={yellow}>Meet Idylworld</SectionHeader>
                    <Video
                        fluid={false}
                        playsInline
                        width={800}
                        muted
                        autoPlay
                        loop={true}
                        src="https://sgp1.digitaloceanspaces.com/idylworld-static/Idylworld%20Video.mp4"
                    >
                        <ControlBar autoHide={true} disableCompletely={true} />
                    </Video>
                </ScrollAnimation>
            </LargeScreenOnly>
            <VariableHeightSection>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={2}>
                        <SectionHeader color={yellow}>About Our Team</SectionHeader>
                        <SectionSubHeader>Ashish Vibhakar</SectionSubHeader>
                        <Text>
                            Mr. Vibhakar is an entrepreneur since 1989, having built multiple companies in the USA and
                            India. Prior to 1989, Ashish was a software research scientist at Xerox PARC, Silicon
                            Valley, USA. Ashish’s interests include music especially Indian Classical, hiking/trekking &
                            outdoors, travel, people, cooking, reading, dreams of making India and this world a better
                            place.
                        </Text>
                        <SectionSubHeader>Jayant Kaneria</SectionSubHeader>
                        <Text>Managing Director of Mont Vert Homes. At Idylworld, he is a mentor and advisor.</Text>
                        <SectionSubHeader>Narendra Jain</SectionSubHeader>
                        <Text>
                            Managing director of Arham Corporation specializing in real estate and development for more
                            than 15 years. At Idylworld he looks after Sales, Legal and Liasioning.
                        </Text>
                        <SectionSubHeader>Ravi Kapadia</SectionSubHeader>
                        <Text>Medical Research Scientist specializing in sustainable communities.</Text>
                        <SectionSubHeader>Ankush Mehta</SectionSubHeader>
                        <Text>
                            A pioneer in the realty sector for over 15 years specializing in marketing and legal
                            structuring.
                        </Text>
                        <SectionSubHeader>Parul Vibhakar</SectionSubHeader>
                        <Text>
                            Mrs. Vibhakar has been a Corporate Law Attorney in India and USA for over 25 years. She has
                            been instrumental in multiple successful startups and her interests include education,
                            travelling, reading, painting, music and Indian classical dance.
                        </Text>
                        <SectionSubHeader>Ajay Parekh</SectionSubHeader>
                        <Text>
                            Mr. Parekh has been involved in Indian Real Estate for over 20 years. Apart from that, his
                            interests include travel, cricket, and raising his two daughters.
                        </Text>
                        <SectionSubHeader>Indrajeet Singh</SectionSubHeader>
                        <Text>Sales experience over 5 years.</Text>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
        </Main>
    );
};

const HeroSection = styled(FullscreenSection)`
    background-image: url(${HeroImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

const HeroTextContainer = styled(ContentContainer)`
    color: white;
    margin-bottom: 80px;
    font-family: "Montserrat", sans-serif;

    @media (min-width: ${breakpoint}) {
        font-size: 20px;
    }
`;

const HeroHeader = styled(H1)`
    width: 80%;
    color: white;

    @media (min-width: ${breakpoint}) {
        width: 800px;
    }
`;

const ScrollButton = styled.img`
    width: 36px;
    margin-bottom: 40px;

    @media (min-width: ${breakpoint}) {
        width: 48px;
    }
`;
