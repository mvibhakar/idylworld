import React from "react";
import {
    Main,
    FullscreenSection,
    VariableHeightSection,
    H1,
    H2,
    Text,
    SectionHeader,
    SectionSubHeader,
    ContentContainer,
    LargeScreenOnly,
} from "../_shared";
import { S3Key, breakpoint, yellow } from "../../utils";
import styled from "styled-components";
import { Player, ControlBar } from "video-react";
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
            <LargeScreenOnly>
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
            </LargeScreenOnly>
            <VariableHeightSection>
                <ContentContainer>
                    <SectionHeader color={yellow}>Meet Our Team</SectionHeader>
                    <SectionSubHeader>Ashish Vibhakar</SectionSubHeader>
                    <Text>
                        Mr. Vibhakar is an entrepreneur since 1989, having built multiple companies in the USA and
                        India. Prior to 1989, Ashish was a software research scientist at Xerox PARC, Silicon Valley,
                        USA. Ashish’s interests include music especially Indian Classical, hiking/trekking & outdoors,
                        travel, people, cooking, reading, dreams of making India and this world a better place.
                    </Text>
                    <SectionSubHeader>Jayant Kaneria</SectionSubHeader>
                    <Text>Managing Director of Mont Vert Homes. At Idylworld, he is a mentor and advisor.</Text>
                    <SectionSubHeader>Narendra Jain</SectionSubHeader>
                    <Text>
                        Managing director of Arham Corporation specializing in real estate and development for more than
                        15 years. At Idylworld he looks after Sales, Legal and Liasioning.
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
                        Mrs. Vibhakar has been a Corporate Law Attorney in India and USA for over 25 years. She has been
                        instrumental in multiple successful startups and her interests include education, travelling,
                        reading, painting, music and Indian classical dance.
                    </Text>
                    <SectionSubHeader>Ajay Parekh</SectionSubHeader>
                    <Text>
                        Mr. Parekh has been involved in Indian Real Estate for over 20 years. Apart from that, his
                        interests include travel, cricket, and raising his two daughters.
                    </Text>
                    <SectionSubHeader>Indrajeet Singh</SectionSubHeader>
                    <Text>Sales experience over 5 years.</Text>
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

const Video = styled(Player)`
    :focus {
        outline: none !important;
    }
`;

// const HighlightedText = styled.div`
//     color: white;
//     font-weight: 500;
//     display: inline;
//     padding: 0 5px;
//     margin: 0px 5px;
//     border-radius: 2px;
// `;

// const BlueHighlight = styled(HighlightedText)`
//     background: rgba(43, 144, 247, 0.7);
// `;

// const OrangeHighlight = styled(HighlightedText)`
//     background: rgba(247, 119, 43, 0.7);
// `;

// const GreenHighlight = styled(HighlightedText)`
//     background: rgba(56, 152, 48, 0.7);
// `;

// const YellowHighlight = styled(HighlightedText)`
//     background: rgba(251, 209, 89, 0.8);
// `;

// const BrownHighlight = styled(HighlightedText)`
//     background: rgba(139, 87, 42, 0.8);
// `;
