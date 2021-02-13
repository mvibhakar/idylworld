import React from "react";
import { green } from "../../utils";
import { Carousel } from "antd";
import {
    Main,
    VariableHeightSection,
    Text,
    SectionHeader,
    SectionSubHeader,
    ContentContainer,
    CarouselImage,
    ContentImage,
    IconInfoItemContainer,
    LargeScreenOnly,
    Video,
} from "../_shared";
import styled from "styled-components";
import { IconInfoItem } from "../_shared/IconInfoItem";
import { ControlBar } from "video-react";
import ScrollAnimation from "react-animate-on-scroll";
import "video-react/dist/video-react.css";

export const Abundant = () => {
    return (
        <Main>
            <VariableHeightSection first={true}>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <SectionHeader color={green}>Idylworld is Abundant</SectionHeader>
                        <IconInfoItemContainer>
                            <IconInfoItem color="yellow" title="sunlight" width="350px">
                                Idylworld has abundant sunlight to power your home and grow your food, but since we are
                                located on the North-face, you are better protected from the effects of solar radiation.
                            </IconInfoItem>
                            <IconInfoItem color="blue" title="water" width="350px">
                                Idylworld is the best of both worlds regarding rainfall. Idylworld's rainfall is much
                                higher than Pune, but not too high like Lonavala & Mahabaleshwar. You can grow your dry
                                zone crops here, like bajra and jowar. You can grow your high rainfall crop also here,
                                like nachni.
                            </IconInfoItem>
                            <IconInfoItem color="green" title="air" width="350px">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </IconInfoItem>
                            <IconInfoItem color="brown" title="flora" width="350px">
                                Idylworld is home to over 180 different species of plants. Large, medium, small,
                                climbers, liners, important medicine plants and herbs. This plant biodiversity supports
                                many species of insects and fauna, all together important for a vibrant and healthy
                                ecosystem.
                            </IconInfoItem>
                            <IconInfoItem color="orange" title="fauna" width="350px">
                                Idylworld has animals like porcupine, pangolim, wild boar, hares, langurs, spotted dear
                                and at least 80 to 90 different species of birds including peacocks year-round.
                            </IconInfoItem>
                            <IconInfoItem width="350px" />
                        </IconInfoItemContainer>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
            <LargeScreenOnly>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <Video
                        fluid={false}
                        playsInline
                        width={800}
                        muted
                        autoPlay
                        loop={true}
                        src="https://idylworld-static.sgp1.digitaloceanspaces.com/idylworld%20monsoon.mp4"
                    >
                        <ControlBar autoHide={true} disableCompletely={true} />
                    </Video>
                </ScrollAnimation>
            </LargeScreenOnly>
        </Main>
    );
};
