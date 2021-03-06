import React from "react";
import { green } from "../../utils";
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
import { Carousel } from 'antd';
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
                        <SectionHeader color={green}>Enjoy Abundance</SectionHeader>
                        <Carousel autoplay>
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/Copy%20of%20IMG_5315.jpg"
                                alt="abundant"
                            />
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/DJI_0057%20%282%29.jpg"
                                alt="abundant"
                            />
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/DSC_3325.jpg"
                                alt="abundant"
                            />
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/IMG_3861.jpg"
                                alt="abundant"
                            />
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/IMG_3872-2.JPG"
                                alt="abundant"
                            />
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/IMG_4028.jpg"
                                alt="abundant"
                            />
                            <CarouselImage
                                src="https://sites.google.com/a/ideawings.com/idylworldclassic/_/rsrc/1577198210595/config/pagetemplates/idylworld-classic-2019/54.jpg"
                                alt="abundant"
                            />
                        </Carousel>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
            <VariableHeightSection>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        {/* <SectionHeader color={green}>Enjoy Abundance</SectionHeader> */}
                        <IconInfoItemContainer>
                            <IconInfoItem color="yellow" title="sunlight" width="350px" imageName="energize">
                                Idylworld has abundant sunlight to power your home & grow your food. Since it is located
                                on the north-face, you are better protected from the effects of solar radiation.
                            </IconInfoItem>
                            <IconInfoItem color="blue" title="water" width="350px" imageName="yield">
                                Idylworld gets moderate rainfall, higher than Pune flat land and less than Lonavla and
                                Mahabaleshwar allowing growing "dry zone" crops like Bajra & Jowar and "high rainfall"
                                crops like Nachni.
                            </IconInfoItem>
                            <IconInfoItem color="green" title="air" width="350px" imageName="air">
                                Idylworld air is fresh & clean, since there is no metro/city between Idyworld & the
                                ocean on the west.
                            </IconInfoItem>
                            <IconInfoItem color="brown" title="flora" width="350px" imageName="blend">
                                Idylworld is home to over 180 different species of plants including many medicinal
                                plants & herbs. This plant biodiversity supports many species of insects & fauna, making
                                Idyworld’s ecosystem vibrant & healthy.
                            </IconInfoItem>
                            <IconInfoItem color="orange" title="fauna" width="350px" imageName="fauna">
                                Idylworld has animals like porcupine, pangolin, wild boar, hares, langurs, spotted deer
                                and atleast 80-90 species of birds including peacocks.
                            </IconInfoItem>
                            <IconInfoItem color="yellow" title="stars" width="350px" imageName="gaze">
                                Gaze at stars while sleeping in the open, listening to chirping birds.
                            </IconInfoItem>
                            <IconInfoItem color="blue" title="horizon" width="350px" imageName="observe">
                                At Idylworld observe the horizon, sunrise and sunset. Spectacular natural views.
                            </IconInfoItem>
                            <IconInfoItem width="350px" />
                        </IconInfoItemContainer>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
            <LargeScreenOnly>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <SectionHeader color={green}>Our Beautiful Site</SectionHeader>
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
