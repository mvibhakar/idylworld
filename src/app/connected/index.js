import React from "react";
import { blue } from "../../utils";
import {
    Main,
    VariableHeightSection,
    Text,
    SectionHeader,
    SectionSubHeader,
    ContentContainer,
    ContentImage,
    IconInfoItemContainer,
} from "../_shared";
import ScrollAnimation from "react-animate-on-scroll";
import { IconInfoItem } from "../_shared/IconInfoItem";
export const Connected = () => {
    return (
        <Main>
            <VariableHeightSection first={true}>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <SectionHeader color={blue}>Stay Connected</SectionHeader>
                        <IconInfoItemContainer>
                            <IconInfoItem
                                color="yellow"
                                title="easy access to yourself"
                                width="350px"
                                imageName="kindle"
                            >
                                Connect with yourself, your natural beautiful surroundings and the world at Idylworld.
                                Natural setting of Idylworld with its serene, untouched environment pulls you out of the
                                chaos and puts you back in touch with yourself.
                            </IconInfoItem>
                            <IconInfoItem
                                color="yellow"
                                title="easy access to Mumbai & Pune"
                                width="350px"
                                imageName="access"
                            >
                                Idylworld (320 Acres) is located on the western side of Pune off the Pune-Lavasa Road in
                                Botharwadi Village. Idylworld is accessible via 4 routes - Hinjewadi, Chandani Chowk,
                                Khadakwasla & Mulshi.
                            </IconInfoItem>
                            <IconInfoItem
                                color="orange"
                                title="easy access to schools and colleges"
                                width="350px"
                                imageName="learn"
                            >
                                Learn at one of the many good schools & colleges of Pune near Idylworld. IW is
                                conveniently situated close to some of the good ICSE, CBSE, SSC & IB schools and
                                colleges of Pune.
                            </IconInfoItem>
                            <IconInfoItem
                                color="orange"
                                title="easy access to hospitals"
                                width="350px"
                                imageName="hospital"
                            >
                                Recuperate at one of the good hospitals near Idylworld. Idylworld is conveniently
                                situated close to multiple specialty hospitals of different price points.
                            </IconInfoItem>
                            <IconInfoItem color="orange" title="easy access to work" width="350px" imageName="work">
                                Work from home or anywhere in Pune west/ HInjewadi. Hi speed wi fi enables working
                                efficiently from home. Thankfully, the business hubs of PUNE west/ HInjewadi are also
                                easily accessible from Idylworld.
                            </IconInfoItem>
                            <IconInfoItem
                                color="yellow"
                                title="easy access to digital work"
                                width="350px"
                                imageName="zoom"
                            >
                                Zoom and continue your digital presence with speedy WiFi. Idylworld has already
                                installed an outdoor mesh WiFi network.
                            </IconInfoItem>
                            <IconInfoItem
                                color="yellow"
                                title="easy access to booming economy"
                                width="350px"
                                imageName="easy-access-to-booming-economy"
                            >
                                Pune is ranked #1 amongst Indian metros in Mercer’s 2019 Quality of Living Index. Pune
                                has consistently recorded a positive growth in business turnover, second only to
                                Bengaluru. Pune features among India’s top 5 real estate destinations.
                            </IconInfoItem>
                            <IconInfoItem
                                color="yellow"
                                title="easy access to malls and movie theaters"
                                width="350px"
                                imageName="easy-access-to-malls-and-movie-theaters"
                            >
                                Idylworld is ___ kms from movie theatres and mall in name the places.
                            </IconInfoItem>
                        </IconInfoItemContainer>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
        </Main>
    );
};

// keep this here for the future
{
    /* <CarouselContainer autoplay>
                        <CarouselImage src="https://idylworld-static.sgp1.digitaloceanspaces.com/puneisgoingwestlargeimage.png" />
                        <CarouselImage src="https://idylworld-static.sgp1.digitaloceanspaces.com/puneisgoingwestlargeimage.png" />
                        <CarouselImage src="https://idylworld-static.sgp1.digitaloceanspaces.com/puneisgoingwestlargeimage.png" />
                    </CarouselContainer> */
}
