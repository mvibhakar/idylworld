import React from "react";
import { green, yellow } from "../../utils";
import {
    Main,
    VariableHeightSection,
    SectionHeader,
    ContentContainer,
    FullscreenSection,
    Text,
    IconInfoItemContainer
} from "../_shared";
import ScrollAnimation from "react-animate-on-scroll";
import "video-react/dist/video-react.css";
import { IconInfoItem } from "../_shared/IconInfoItem";
export const Bungalow = () => {
    return (
        <Main>
            <VariableHeightSection first={true}>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <SectionHeader color={yellow}>Live Large</SectionHeader>
                        <IconInfoItemContainer>
                            <IconInfoItem color="brown" title="transform" width="350px" type="/bungalow">
                                Idylworld offers great opportunities to share your knowledge & learn/begin something new
                                on menal, physical & spiritual level.
                            </IconInfoItem>
                            <IconInfoItem color="green" title="blend physical & digital" width="350px" type="/bungalow">
                                At Idylworld, be physically in the serene natural setting yet have full, efficient
                                access to your work/school digitally.
                            </IconInfoItem>
                            <IconInfoItem color="green" title="blend modern & traditional" width="350px" type="/bungalow">
                                At Idylworld, you have an opportunity to merge new research & old traditional practices
                                for protecting the environment & build your bungalow to touch the earth lightly.
                            </IconInfoItem>
                            <IconInfoItem color="green" title="recharged by sun, rain & wind" width="350px" type="/bungalow">
                                At Idylworld, you have an opportunity to merge new research & old traditional practices
                                for protecting the environment & build your bungalow to touch the earth lightly.
                            </IconInfoItem>
                            <IconInfoItem color="green" title="be serene" width="350px" type="/bungalow">
                                At Idylworld bungalows, the indoor spaces are merged with outdoor spaces allowing you to sleep with fresh air circulating naturally. Sounds of nature lulling you into deep sleep.
                            </IconInfoItem>
                            <IconInfoItem width="350px" />
                        </IconInfoItemContainer>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
            {/* <VariableHeightSection>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <SectionHeader color={yellow}>
                            Blend Modern Techniques of Sustainable Living with Traditional Practices of Sustainability
                        </SectionHeader>
                        <Text>
                            Modern world is obsessively researching and designing new measures to deal with the burning
                            issue of climate change. Interestingly, Indian villages have always had tried and tested
                            practices which are eco friendly and should not be left behind or forgotten. At IW, we
                        </Text>
                        <SectionHeader color={yellow}>
                            Blend Physical & Digital Lives with the Best of Both Worlds
                        </SectionHeader>
                        <Text>
                            At IW your dilemma of wanting to be in serene natural world and needing to be in the digital
                            modern world is resolved. You can be where you want to be physically yet have full access to
                            your work and school life, digitally.
                        </Text>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
            <VariableHeightSection>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <SectionHeader color={yellow}>Harvest Rainwater, Solar Energy & Wind Energy</SectionHeader>
                        <Text>
                            With depletion of natural resources and climate change, humans are required to become greedy
                            to get most out of Mother nature! Thankfully, Mother Nature blesses our use of all that it
                            provides to preserve the planet. We at IW are greedy when it comes to rainwater, solar and
                            wind energy harvesting. Our business model is based on numbers of carbon foot print, air
                            quality, and not solely on profits & revenue.
                        </Text>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
            <VariableHeightSection>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <SectionHeader color={yellow}>Sleep Peacefully in the Serenity</SectionHeader>
                        <Text>
                            Good night’s restful sleep requires more than a comfortable bed and airconditioned room. A
                            person who has ever slept under a tree, in grass, in the open will tread a luxurious bedroom
                            with sleeping in the open readily. At IW, the homes are designed such that the nature is
                            brought into your living spaces, making it possible to sleep with fresh air circulating
                            naturally, natural sounds of birds and air lulling you to serenity and sleep.
                        </Text>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
            <VariableHeightSection>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <SectionHeader color={yellow}>Transform Yourself and Your Life</SectionHeader>
                        <Text>
                            Ageing has two sides - on the positive side of hte coin you have wisdom, sense of
                            achievement and secured feeling of having managed well, that can soon lead to the urge to
                            pass on that wisdom to someone younger, inexperienced, trying to navigate life and its ups n
                            downs. The other side of the coin could be regret… regret of not having drawn your bucket
                            list, not having tried items on your bucket list while your time is spread thin in
                            supporting family lead their lives or fulfilling their dreams. It is possible to have a
                            drastic positive flip on either of these two scenarios. Begin now! Your one decision to make
                            IW your home can open many doors. Many life transforming opportunities to change your life
                            on mental, physical and spiritual level are inherently tied into buying and owning a home at
                            IW, simply due to the lay of the land and the vision of the team at IW.
                        </Text>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection> */}
        </Main>
    );
};
