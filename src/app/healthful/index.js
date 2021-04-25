import React from "react";
import { orange } from "../../utils";
import {
    Main,
    VariableHeightSection,
    Text,
    SectionHeader,
    SectionSubHeader,
    ContentContainer,
    IconInfoItemContainer,
    ContentImage,
} from "../_shared";
import { IconInfoItem } from "../_shared/IconInfoItem";
import ScrollAnimation from "react-animate-on-scroll";

export const Healthful = () => {
    return (
        <Main>
            <VariableHeightSection first={true}>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <SectionHeader color={orange}>Idylworld is Healthful</SectionHeader>
                        <ContentImage
                            src="https://idylworld-static.sgp1.digitaloceanspaces.com/idylworld-healthful.jpg"
                            alt="idylworld healthful"
                            style={{ marginTop: "0px" }}
                        />
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
