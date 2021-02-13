import React from "react";
import { orange } from "../../utils";
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

export const Healthful = () => {
    return (
        <Main>
            <VariableHeightSection first={true}>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <SectionHeader color={orange}>Idylworld is Healthful</SectionHeader>
                        <SectionSubHeader>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </SectionSubHeader>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
            <VariableHeightSection>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <SectionHeader color={orange}>Fresh & Pure Air</SectionHeader>
                        <Text>
                            Between Idylworld and the ocean, there is no major metro or settlement. The wind mostly
                            comes from the west, blowing across virgin forests before reaching Idylworld, ensuring a
                            pure and oxygenated breathing environment. Also, over 7000 acres of reserved afforestation
                            zones around the area translate into a lower density of development and Purer Air.
                        </Text>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
            <VariableHeightSection>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <SectionHeader color={orange}>Rich Soil</SectionHeader>
                        <SectionSubHeader>
                            The soil at Idylworld is not like the alkali soils found elsewhere. Practically everything
                            grows here!
                        </SectionSubHeader>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
            <VariableHeightSection>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <SectionHeader color={orange}>Endless Opportunities for Activity & Interaction</SectionHeader>
                        <IconInfoItemContainer>
                            <IconInfoItem color="green" title="nature walks & hikes" width="350px">
                                Beyond your 1-acre home, you'll have acces to explore paths, roads and trails across our
                                320-acre campus for short or long nature walks, hikes and runs.
                            </IconInfoItem>
                            <IconInfoItem color="blue" title="yoga & meditation" width="350px">
                                Idylworld is the perfect place to unite body, mind and spirit. Its quiet serenity is the
                                ideal environment to nurture your yoga and meditation practices.
                            </IconInfoItem>
                            <IconInfoItem color="orange" title="fitness trails" width="350px">
                                Swiss style fitness trails (called Vitaparcours) are intespersed with exercise stations
                                across Idylworld. The Vitaparcour circuits feature different strength, endurance and
                                flexibility exercises.
                            </IconInfoItem>
                            <IconInfoItem color="brown" title="like-minded community" width="350px">
                                Idylworld values bringing together like-minded nature lovers who are passionate about
                                sustainability, organic farming, the environment and physical health.
                            </IconInfoItem>
                        </IconInfoItemContainer>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
        </Main>
    );
};
