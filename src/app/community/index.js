import React from "react";
import { green, yellow } from "../../utils";
import {
    Main,
    VariableHeightSection,
    SectionHeader,
    ContentContainer,
    FullscreenSection,
    Text,
    ContentImage,
    IconInfoItemContainer,
    CarouselImage,
} from "../_shared";
import { Carousel } from 'antd';
import ScrollAnimation from "react-animate-on-scroll";
import "video-react/dist/video-react.css";
import { IconInfoItem } from "../_shared/IconInfoItem";
import { Carousel } from "antd";
export const Community = () => {
    return (
        <Main>
            <VariableHeightSection first={true}>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <SectionHeader color={yellow}>Belong to a Hill Community</SectionHeader>
                        <Carousel autoplay>
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/master%20plan%20satellite.png"
                                alt="community"
                            />
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/DJI_0041%20%282%29.jpg"
                                alt="community"
                            />
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/DJI_0084%20%282%29.jpg"
                                alt="community"
                            />
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/IMG_4052.jpg"
                                alt="community"
                            />
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/IMG_20190728_134042801.jpg"
                                alt="community"
                            />
                        </Carousel>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
            <VariableHeightSection>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <IconInfoItemContainer>
                            <IconInfoItem color="blue" title="invest wisely" width="350px" imageName="invest">
                                You invest intelligently, you benefit personally, but when you invest wisely & ethically
                                the whole world benefits. Investment in a genuinely eco friendly, ethical & socially
                                conscious community like Idylworld will help the community and additionally help change
                                the narrative and trend towards taking care of the environment, which is needed most
                                urgently.
                            </IconInfoItem>
                            <IconInfoItem
                                color="yellow"
                                title="become an influencer"
                                width="350px"
                                imageName="become-an-influencer"
                            >
                                Be COOL, be a part of Idylworld. Reduce waste, Re-use what you can & Recycle. Host
                                outdoor events, Celebrate festivals.
                            </IconInfoItem>
                            <IconInfoItem
                                color="orange"
                                title="build an active community"
                                width="350px"
                                imageName="xchange"
                            >
                                At Idylworld, we strongly encourage vibrant, healthful, active and energised living. We
                                are sincerely committed to building a community of forward thinking,active individuals
                                with growth-mindset. A premium value is put on exchange of ideas & knowledge, to inspire
                                & get inspired.
                            </IconInfoItem>
                            <IconInfoItem
                                color="blue"
                                title="drinking fountains around the community"
                                width="350px"
                                imageName="quench"
                            >
                                To reduce single-use plastic bottles and provide clean water to residents, Idylworld has
                                committed to make drinking water outlets a part of infrastructure plan.
                            </IconInfoItem>
                            <IconInfoItem color="brown" title="night hike safely" width="350px" imageName="gaze">
                                Idylworld has closely worked with botanists, outdoor explorers and locals to create a
                                safe bubble where humans & flora/fauna can coexist & explore unadulterated nature.
                            </IconInfoItem>
                            <IconInfoItem color="blue" title="play sports" width="350px" imageName="play">
                                Idylworld Sports Village will provide the indoor/outdoor space/facility to play active
                                sports at professional or amateur level. For the fitness freak, there are tons of
                                hike/trek/run/jog possibilities. Idylworld has perfect spots for group meditation
                                sessions.
                            </IconInfoItem>
                            <IconInfoItem color="yellow" title="perform arts" width="350px" imageName="discover">
                                Idylworld Arts Village will provide the platform to the enthusiasts interested in
                                exploring arts to have fun & experience therapeutic benefits of different modes of
                                expression.
                            </IconInfoItem>
                            <IconInfoItem color="orange" title="share fresh produce" width="350px" imageName="share">
                                Sharing is caring. Spread genuine kinship with your neighbors by sharing organically
                                grown fresh produce.
                            </IconInfoItem>
                            <IconInfoItem
                                color="blue"
                                title="pray at community temple"
                                width="350px"
                                imageName="meditate"
                            >
                                Masoba Temple at Idylworld old temple that is an institution for the surrounding communities. A communal place for satsang on festivals and special occasions.
                            </IconInfoItem>
                            <IconInfoItem color="brown" title="pathways & trails" width="350px" imageName="hike">
                                At Idylworld, we have planned and paved pathways to make zipping across the community
                                easy & fun even when the community is populated.
                            </IconInfoItem>
                        </IconInfoItemContainer>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
        </Main>
    );
};
