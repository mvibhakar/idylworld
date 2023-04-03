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
    Highlight,
} from "../_shared";
import { IconInfoItem } from "../_shared/IconInfoItem";
import {
    S3Key,
    breakpoint,
    yellow,
    yellowTransparent,
    brownTransparent,
    blueTransparent,
    greenTransparent,
    orangeTransparent,
} from "../../utils";
import styled from "styled-components";
import { ControlBar } from "video-react";
import ScrollAnimation from "react-animate-on-scroll";
import "video-react/dist/video-react.css";
import { Carousel } from "antd";

const HeroImage = S3Key + "idylworld-hero.jpg";
const ScrollImage = S3Key + "scroll-button.png";

export const Home = () => {
    return (
        <>
            <HeroBubble>
                Premium plots with build-to-suit options. <br />
                56 acre gated community, feature rich. <br />
                PMRDA approved. MahaRERA registered.
            </HeroBubble>
            <Main>
                <HeroSection>
                    <HeroHeader>Welcome to Idylworld, </HeroHeader>
                    <HeroTextContainer>
                        Pune's unique hill orchards <Highlight background={yellowTransparent}>community</Highlight> of{" "}
                        <Highlight background={blueTransparent}>connected</Highlight>,{" "}
                        <Highlight background={greenTransparent}>abundant</Highlight> and{" "}
                        <Highlight background={orangeTransparent}>healthful</Highlight>
                        <Highlight background={brownTransparent}>orchards</Highlight> with{" "}
                        <Highlight background={yellowTransparent}>bungalows</Highlight> for the successful, <br /> yet
                        down-to-earth, global Indian.
                    </HeroTextContainer>
                    <ScrollButton src={ScrollImage} alt="scroll" />
                </HeroSection>
                <VariableHeightSection>
                    <ContentContainer>
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                            <SectionHeader color={yellow}>Idylworld Strives To Deliver</SectionHeader>
                            <IconInfoItemContainer>
                                <IconInfoItem color="yellow" title="community" width="200px">
                                    Strong community of like minded nature loving citizens, active and youthful,
                                    conscientious & ethical nature nurturers.
                                </IconInfoItem>
                                <IconInfoItem color="blue" title="connected" width="200px">
                                    Stay connected to your inner self, your family, your digital world & your physical
                                    world, including schools, colleges, work & hospitals.
                                </IconInfoItem>
                                <IconInfoItem color="green" title="abundant" width="200px">
                                    Sunlight & solar energy, wind, rainwater harvesting, rich soil producing lots of
                                    nutritious fresh produce. Large spaces to play & perform. High return on Investment.
                                </IconInfoItem>
                                <IconInfoItem color="orange" title="healthful" width="200px">
                                    Positive thoughts, active body, equanimous mind, sharing & caring, health enriching
                                    food. Strong community & minimal impact on the environment.
                                </IconInfoItem>
                                <IconInfoItem color="brown" title="orchards" width="200px">
                                    A sound ethical, hi growth investment. One time investment in IW leads to a
                                    self-sustaining orchard, where propagation of fruit trees is organic and easy due to
                                    high quality of fruits, soil & environment.
                                </IconInfoItem>
                                <IconInfoItem color="yellow" title="bungalow" width="200px">
                                    Modern, spacious, luxurious farm house, with ample natural light and air, built in
                                    cave of trees. A sound investment with high ROI.
                                </IconInfoItem>
                            </IconInfoItemContainer>
                        </ScrollAnimation>
                    </ContentContainer>
                </VariableHeightSection>
                <VariableHeightSection>
                    <ContentContainer>
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                            <SectionHeader color={yellow}>Idylworld A to Z</SectionHeader>
                            <IconInfoItemCarousel autoplay>
                                <div>
                                    <IconInfoItemContainer>
                                        <IconInfoItem color="yellow" title="access" width="350px" type="/connected">
                                            Idylworld easily from Mumbai & Pune.
                                        </IconInfoItem>
                                        <IconInfoItem color="green" title="blend" width="350px" type="/bungalow">
                                            modern techniques of sustainable living with traditional practices of
                                            sustainability.
                                        </IconInfoItem>
                                        <IconInfoItem color="orange" title="connect" width="350px" type="/connected">
                                            with yourself, your beautiful natural surroundings, and the world at
                                            Idylworld.
                                        </IconInfoItem>
                                        <IconInfoItem color="blue" title="discover" width="350px" type="/abundant">
                                            a plethora of flora, fauna, vista points, meeting points and your perfect
                                            spot at Idylworld.
                                        </IconInfoItem>
                                    </IconInfoItemContainer>
                                </div>
                                <div>
                                    <IconInfoItemContainer>
                                        <IconInfoItem color="brown" title="energize" width="350px" type="/abundant">
                                            with abundant sunlight to power your home and grow your food.
                                        </IconInfoItem>
                                        <IconInfoItem color="yellow" title="farm" width="350px" type="/orchards">
                                            organically all year around with your own composted rich soil, without
                                            pesticides.
                                        </IconInfoItem>
                                        <IconInfoItem color="green" title="gaze" width="350px" type="/abundant">
                                            at the stars while sleeping in the open, listening to crickets, and waking
                                            to chirping birds.
                                        </IconInfoItem>
                                        <IconInfoItem color="orange" title="hike" width="350px" type="/healthful">
                                            all day long at Idylworld with over 30 kms of roads, trails, and pathways.
                                        </IconInfoItem>
                                    </IconInfoItemContainer>
                                </div>
                                <div>
                                    <IconInfoItemContainer>
                                        <IconInfoItem color="blue" title="invest" width="350px" type="/community">
                                            in landmark property and enjoy substantial growth personally and
                                            financially.
                                        </IconInfoItem>
                                        <IconInfoItem color="brown" title="jog" width="350px" type="/healthful">
                                            at Idylworld Sports Village with breeze on your face and eyes feasting on
                                            beautiful views.
                                        </IconInfoItem>
                                        <IconInfoItem color="yellow" title="kindle" width="350px" type="/community">
                                            your curious mind & interest in the new activities & experiences, with the
                                            community or by yourself.
                                        </IconInfoItem>
                                        <IconInfoItem color="green" title="learn" width="350px" type="/connected">
                                            at one of the many good schools & colleges of Pune near Idylworld.
                                        </IconInfoItem>
                                    </IconInfoItemContainer>
                                </div>
                                <div>
                                    <IconInfoItemContainer>
                                        <IconInfoItem color="orange" title="meditate" width="350px" type="/healthful">
                                            in group or private natural setting.
                                        </IconInfoItem>
                                        <IconInfoItem color="blue" title="nurture" width="350px" type="/orchards">
                                            your children by providing a very natural, healthy and engaging environment
                                            for their upbringing.
                                        </IconInfoItem>
                                        <IconInfoItem color="brown" title="observe" width="350px" type="/abundant">
                                            the horizon, sunrise and sunset.
                                        </IconInfoItem>
                                        <IconInfoItem color="yellow" title="play" width="350px" type="/healthful">
                                            a variety of sports with friends & family.
                                        </IconInfoItem>
                                    </IconInfoItemContainer>
                                </div>
                                <div>
                                    <IconInfoItemContainer>
                                        <IconInfoItem color="green" title="quench" width="350px" type="/community">
                                            your thirst at the many drinking water fountains at Idylworld.
                                        </IconInfoItem>
                                        <IconInfoItem color="orange" title="recuperate" width="350px" type="/connected">
                                            at one of the great hospitals near Idylworld.
                                        </IconInfoItem>
                                        <IconInfoItem color="blue" title="share" width="350px" type="/community">
                                            fresh produce from your garden with others in the Idylworld community.
                                        </IconInfoItem>
                                        <IconInfoItem color="brown" title="transform" width="350px" type="/bungalow">
                                            yourself and your life.
                                        </IconInfoItem>
                                    </IconInfoItemContainer>
                                </div>
                                <div>
                                    <IconInfoItemContainer>
                                        <IconInfoItem color="yellow" title="unite" width="350px" type="/healthful">
                                            your mind, body, and spirit through yoga.
                                        </IconInfoItem>
                                        <IconInfoItem color="green" title="venture" width="350px" type="/abundant">
                                            into undiscovered pockets of Idylworld any time of the day.
                                        </IconInfoItem>
                                        <IconInfoItem color="orange" title="work" width="350px" type="/connected">
                                            from home or anywhere in Pune West or Hinjewadi.
                                        </IconInfoItem>
                                        <IconInfoItem color="blue" title="xchange" width="350px" type="/community">
                                            ideas, theories & philosophies with others in the community.
                                        </IconInfoItem>
                                    </IconInfoItemContainer>
                                </div>
                                <div>
                                    <IconInfoItemContainer>
                                        <IconInfoItem color="brown" title="yield" width="350px" type="/orchards">
                                            fresh produce from land and high return on your investment.
                                        </IconInfoItem>
                                        <IconInfoItem color="yellow" title="zoom" width="350px" type="/connected">
                                            and continue your digital presence with speedy Wifi.
                                        </IconInfoItem>
                                    </IconInfoItemContainer>
                                </div>
                            </IconInfoItemCarousel>
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
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                            <SectionHeader color={yellow}>Our Inspiration</SectionHeader>
                            <SectionSubHeader>
                                <ul>
                                    <li>
                                        While planning the Idylworld community we realized that the success of a
                                        community can only be measured by the happiness of its residents.{" "}
                                    </li>
                                    <li>
                                        The UN Happiness Index Research implies that health and access to growth
                                        contribute the most towards happiness of residents of the community.{" "}
                                    </li>
                                    <li>
                                        Access to growth (vibrancy) can be best achieved through providing community
                                        features to engage all 9 human intelligences of Multiple Intelligences.
                                    </li>
                                    <li>
                                        We believe the most livable year round weather condition in India is on the
                                        north face of a hill 1000 feet above the deccan plateau with an open west side
                                        and to the western outskirts of a city. Idylworld is this rare pune west
                                        location in India.
                                    </li>
                                </ul>
                            </SectionSubHeader>
                        </ScrollAnimation>
                    </ContentContainer>
                </VariableHeightSection>
            </Main>
        </>
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
    margin-bottom: 30px;
    font-family: "Montserrat", sans-serif;
    line-height: 2.8rem;
    font-weight: bold;

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

const IconInfoItemCarousel = styled(Carousel)`
    display: flex !important;
`;

const HeroBubble = styled.div`
    margin-top: 20px;
    margin-left: 20px;
    padding: 10px 20px;
    background: ${blueTransparent};
    color: white;
    font-family: "Montserrat", sans-serif;
    line-height: 2.4rem;
    font-weight: bold;
    border-radius: 8px;
    text-align: center;
    position: absolute;
    left: 40;
    top: 120;

    @media (min-width: ${breakpoint}) {
        font-size: 16px;
    }
`;
