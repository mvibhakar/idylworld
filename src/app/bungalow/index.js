import React from "react";
import { green, yellow, brown, blue, orange } from "../../utils";
import {
    Main,
    VariableHeightSection,
    SectionHeader,
    ContentContainer,
    FullscreenSection,
    Text,
    IconInfoItemContainer,
    CarouselImage,
    CarouselImageWithoutFit,
} from "../_shared";
import { Carousel } from 'antd';
import ScrollAnimation from "react-animate-on-scroll";
import "video-react/dist/video-react.css";
import { IconInfoItem } from "../_shared/IconInfoItem";
import { Carousel } from "antd";

export const Bungalow = () => {
    return (
        <Main>
            <VariableHeightSection first={true}>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <SectionHeader color={yellow}>Live Large</SectionHeader>
                        <Carousel autoplay>
                            <CarouselImageWithoutFit
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/Living%20Room%20%281%29.jpg"
                                alt="healthful"
                            />
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/WhatsApp%20Image%202021-06-13%20at%2011.19.55%20PM.jpeg"
                                alt="healthful"
                            />
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/WhatsApp%20Image%202021-06-13%20at%2011.19.56%20PM.jpeg"
                                alt="healthful"
                            />
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/WhatsApp%20Image%202021-06-14%20at%205.31.25%20AM.jpeg"
                                alt="healthful"
                            />
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/WhatsApp%20Image%202021-06-14%20at%205.31.26%20AM.jpeg"
                                alt="healthful"
                            />
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/WhatsApp%20Image%202021-06-14%20at%205.31.30%20AM%20%281%29.jpeg"
                                alt="healthful"
                            />
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/WhatsApp%20Image%202021-06-14%20at%205.31.30%20AM.jpeg"
                                alt="healthful"
                            />
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/WhatsApp%20Image%202021-06-14%20at%205.31.31%20AM.jpeg"
                                alt="healthful"
                            />
                        </Carousel>
                    </ScrollAnimation>
                </ContentContainer>
                <ContentContainer>
                    <IconInfoItemContainer>
                        <IconInfoItem color="yellow" title="transform" width="350px" imageName="share">
                            Idylworld offers great opportunities to share your knowledge & learn/begin something new
                            on mental, physical & spiritual level.
                            </IconInfoItem>
                        <IconInfoItem color="green" title="blend physical & digital" width="350px" imageName="blend-physical-&-digital">
                            At Idylworld, be physically in the serene natural setting yet have full, efficient
                            access to your work/school digitally.
                            </IconInfoItem>
                        <IconInfoItem color="orange" title="blend modern & traditional" width="350px" imageName="connect">
                            At Idylworld, you have an opportunity to merge new research & old traditional practices
                            for protecting the environment & build your bungalow to touch the earth lightly.
                            </IconInfoItem>
                        <IconInfoItem color="blue" title="recharged by sun, rain & wind" width="350px" imageName="energize">
                            Use the nature to recharge your life - home, car, orchard.
                            </IconInfoItem>
                        <IconInfoItem color="brown" title="be serene" width="350px" imageName="meditate">
                            At Idylworld bungalows, the indoor spaces are merged with outdoor spaces allowing you to sleep with fresh air circulating naturally. Sounds of nature lulling you into deep sleep.
                            </IconInfoItem>
                        <IconInfoItem width="350px" />
                    </IconInfoItemContainer>

                </ContentContainer>
            </VariableHeightSection>
        </Main>
    );
};
