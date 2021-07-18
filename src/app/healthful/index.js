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
    H3,
    CarouselImage,
} from "../_shared";
import { Carousel } from "antd";
import { IconInfoItem } from "../_shared/IconInfoItem";
import ScrollAnimation from "react-animate-on-scroll";

export const Healthful = () => {
    return (
        <Main>
            <VariableHeightSection first={true}>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <SectionHeader color={orange}>Be Healthy</SectionHeader>
                        <Carousel autoplay>
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/IMG_0304.jpg"
                                alt="healthful"
                            />
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/IMG_0298.jpg"
                                alt="healthful"
                            />
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/DJI_0079%20%282%29.jpg"
                                alt="healthful"
                            />
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/GRU_6877.jpg"
                                alt="healthful"
                            />
                            <CarouselImage
                                src="https://sites.google.com/a/ideawings.com/idylworldclassic/_/rsrc/1577197827957/config/pagetemplates/idylworld-classic-2019/60.jpg"
                                alt="healthful"
                            />
                            <CarouselImage
                                src="https://sites.google.com/a/ideawings.com/idylworldclassic/_/rsrc/1577198843603/config/pagetemplates/idylworld-classic-2019/59.jpg"
                                alt="healthful"
                            />
                        </Carousel>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
            <VariableHeightSection>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <SectionHeader color={orange}>Our Fight Against Covid-19</SectionHeader>
                        <h3>
                            Here at Idylworld, one of our number one priorities, as of January 2020, has been the fight
                            against the Covid-19 virus. As per this{" "}
                            <a
                                href="https://epaper.timesgroup.com/olive/apa/timesofindia/SharedView.Article.aspx?href=TOIM%2F2020%2F06%2F04&id=Ar00614&sk=00852CF9&viewMode=image"
                                target="_blank"
                            >
                                Times of India article
                            </a>
                            , studies have shown that people who live at higher altitudes have reported lower numbers of
                            Covid cases. With Idylworld's average altitude of 3,000 feet, we are grateful to have this
                            extra level of safety for our project and the people who populate it.{" "}
                        </h3>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
            <VariableHeightSection>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <IconInfoItemContainer>
                            <IconInfoItem color="yellow" title="fresh & pure air" width="350px" imageName="air">
                                Since there is no major metro between Idylworld & the ocean, the wind mostly comes from
                                the west, blowing across virgin forests, ensuring a pure & oxygenated breathing
                                environment. Also, over 7000 acres of reserved afforestation zones around the Idylworld
                                translate into a lower density of development & purer air.
                            </IconInfoItem>
                            <IconInfoItem color="brown" title="rich soil" width="350px" imageName="farm">
                                Practically everything can grow here, since the soil is rich, unadulterated by chemicals
                                and made richer by composting.
                            </IconInfoItem>
                            <IconInfoItem color="blue" title="yoga & meditation" width="350px" imageName="unite">
                                Idylworld is the perfect place to unite body, mind and spirit. Its quiet serenity is the
                                ideal environment to nurture your yoga and meditation practices.
                            </IconInfoItem>
                            <IconInfoItem color="green" title="nature walks & hikes" width="350px" imageName="hike">
                                Hike all day long at Idylworld with over 30 kms.of roads, trails & pathways. Jog at
                                Idylworld Sports Village with breeze caressing your face & eyes feasting on beautiful
                                views.
                            </IconInfoItem>
                            <IconInfoItem color="blue" title="fitness trail" width="350px" imageName="jog">
                                We plan to have Swiss style fitness trails (called Vitaparcours) that are interspersed
                                with exercise stations across Idylworld. The Vitaparcour circuits feature different
                                strength, endurance & flexibility exercises.
                            </IconInfoItem>
                            <IconInfoItem color="yellow" title="play sport" width="350px" imageName="play">
                                Playing a sport enhances all other positive aspects of your life. Any sport at any
                                intensity level…. Just play!
                            </IconInfoItem>
                            <IconInfoItem color="brown" title="like minded community" width="350px" imageName="xchange">
                                Idylworld values bringing together like-minded nature lovers who are passionate about
                                sustainability, organic farming, the environment & physical health.
                            </IconInfoItem>
                            <IconInfoItem width="350px" />
                        </IconInfoItemContainer>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
        </Main>
    );
};
