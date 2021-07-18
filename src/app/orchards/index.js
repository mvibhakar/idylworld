import React from "react";
import { brown } from "../../utils";
import {
    Main,
    VariableHeightSection,
    SectionHeader,
    SectionSubHeader,
    ContentContainer,
    IconInfoItemContainer,
    ContentImage,
    CarouselImage,
} from "../_shared";
import { Carousel } from "antd";
import { IconInfoItem } from "../_shared/IconInfoItem";
import ScrollAnimation from "react-animate-on-scroll";

export const Orchards = () => {
    return (
        <Main>
            <VariableHeightSection first={true}>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <SectionHeader color={brown}>Nurture Yourself</SectionHeader>
                        <Carousel autoplay>
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/13.jpeg"
                                width="400px"
                            ></CarouselImage>
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/abundance.png"
                                width="400px"
                            ></CarouselImage>
                            <CarouselImage
                                src="https://sites.google.com/a/ideawings.com/idylworldclassic/_/rsrc/1577199889050/config/pagetemplates/idylworld-classic-2019/45.jpg"
                                width="400px"
                            />
                            <CarouselImage
                                src="https://sites.google.com/a/ideawings.com/idylworldclassic/_/rsrc/1577199451372/config/pagetemplates/idylworld-classic-2019/34.jpg"
                                width="400px"
                            />
                            <CarouselImage
                                src="https://sites.google.com/a/ideawings.com/idylworldclassic/_/rsrc/1577198115353/config/pagetemplates/idylworld-classic-2019/51.jpg"
                                width="400px"
                            />
                            <CarouselImage
                                src="https://sites.google.com/a/ideawings.com/idylworldclassic/_/rsrc/1577199856589/config/pagetemplates/idylworld-classic-2019/44.jpg"
                                width="400px"
                            />
                        </Carousel>
                        <SectionSubHeader>
                            One acre at Idylworld would allow any resident to be exceptionally self-sufficient.
                            Residents can grow the family’s worth of fruits & veggies, house a large solar array and
                            windmill for energy, store excess wind or solar as hydroelectric energy, harvest rainwater
                            to fulfill all their needs, grow many trees, build a house (or two), and still have enough
                            left over for private walking trails and nature nooks!
                        </SectionSubHeader>
                        <Carousel autoplay>
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/DJI_0054%20%281%29.jpg"
                                alt="pune orchards"
                            />
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/DJI_0218.JPG"
                                alt="pune orchards"
                            />
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/farm%20house%20section%20pond.jpg"
                                alt="pune orchards"
                            />
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/DSC_3367%20%281%29.jpg"
                                alt="pune orchards"
                            />
                            <CarouselImage
                                src="https://idylworld-static.sgp1.digitaloceanspaces.com/orchird%203d%20view.jpg"
                                alt="pune orchards"
                            />
                        </Carousel>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
            <VariableHeightSection>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <SectionHeader color={brown}>Advantages of an Idylworld Home</SectionHeader>
                        <IconInfoItemContainer>
                            <IconInfoItem color="green" title="privacy" width="350px">
                                Mountain plots afford maximum privacy, away from the hustle and bustle. Especially at
                                Idylworld, which is setback 1.5km from and 100 metres above the State Highway. In your
                                secluded property, you can have all the peace and quiet that your heart desires.
                            </IconInfoItem>
                            <IconInfoItem color="orange" title="magnificent views" width="350px">
                                Being at a higher elevation allows panoramic views of the natural environment. Having an
                                amazing view from the comfort of your home can give you a daily dose of bliss.
                            </IconInfoItem>
                            <IconInfoItem color="blue" title="reduced energy bills" width="350px" imageName="transform">
                                This natural ventilation, while a source of fresh air, also aids in decreasing the
                                energy bills of your home by becoming less reliant on artificial cooling.
                            </IconInfoItem>
                            <IconInfoItem color="brown" title="unique architectural features" width="350px">
                                A mountain home allows the owner to be creative and customize to include certain
                                architectural details, like a walk-out ground floor, high ceilings with exposed beams
                                and panoramic floor-to-ceiling windows.
                            </IconInfoItem>
                            <IconInfoItem color="yellow" title="plenty of natural light" width="350px">
                                All the windows, high ceilings, and walkout basement in a mountain home let more natural
                                light in, transforming the residence into a bright, beautiful and energy-efficient
                                space.
                            </IconInfoItem>
                            <IconInfoItem
                                color="green"
                                title="composting, landscaping & gardening"
                                width="350px"
                                imageName="compost"
                            >
                                With Idylworld Orchards, the homeowner has the option of doing away with manicured lawns
                                and simply leaving the natural surrounding as it is, or going all out with landscaping
                                and gardening.
                            </IconInfoItem>
                        </IconInfoItemContainer>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
            <VariableHeightSection>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <SectionHeader color={brown}>Each Plot Comes With</SectionHeader>
                        <SectionSubHeader>
                            Fencing
                            <br />
                            <br />
                            Security
                            <br />
                            <br />
                            Driveway & Landing
                            <br />
                            <br />
                            Electric Connection
                            <br />
                            <br />
                            Water Connection
                            <br />
                            <br />
                            Optional Rainwater Harvesting
                            <br />
                            <br />
                            Optional Drip Irrigation
                            <br />
                            <br />
                            Pre-designed Fully Sustainable Home Options
                        </SectionSubHeader>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
        </Main>
    );
};
