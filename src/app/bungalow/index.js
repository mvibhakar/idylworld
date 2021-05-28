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
                            <IconInfoItem color="brown" title="transform" width="350px" imageName="share">
                                Idylworld offers great opportunities to share your knowledge & learn/begin something new
                                on mental, physical & spiritual level.
                            </IconInfoItem>
                            <IconInfoItem color="green" title="blend physical & digital" width="350px" >
                                At Idylworld, be physically in the serene natural setting yet have full, efficient
                                access to your work/school digitally.
                            </IconInfoItem>
                            <IconInfoItem color="green" title="blend modern & traditional" width="350px" imageName="connect">
                                At Idylworld, you have an opportunity to merge new research & old traditional practices
                                for protecting the environment & build your bungalow to touch the earth lightly.
                            </IconInfoItem>
                            <IconInfoItem color="green" title="recharged by sun, rain & wind" width="350px" imageName="energize">
                                Use the nature to recharge your life - home, car, orchard.
                            </IconInfoItem>
                            <IconInfoItem color="green" title="be serene" width="350px" imageName="meditate">
                                At Idylworld bungalows, the indoor spaces are merged with outdoor spaces allowing you to sleep with fresh air circulating naturally. Sounds of nature lulling you into deep sleep.
                            </IconInfoItem>
                            <IconInfoItem width="350px" />
                        </IconInfoItemContainer>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
        </Main>
    );
};
