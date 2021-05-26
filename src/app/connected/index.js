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
    IconInfoItemContainer
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
                            <IconInfoItem color="yellow" title="easy access to yourself" width="350px" type="/connected">
                                Connect with yourself, your natural beautiful surroundings and the world at Idylworld. Natural setting of Idylworld with its serene, untouched environment pulls you out of the chaos and puts you back in touch with yourself.
                        </IconInfoItem>
                            <IconInfoItem color="yellow" title="easy access to Mumbai & Pune" width="350px" type="/connected">
                                Idylworld (320 Acres) is located on the western side of Pune off the Pune-Lavasa Road in Botharwadi Village. Idylworld is accessible via 4 routes - Hinjewadi, Chandani Chowk, Khadakwasla & Mulshi.
                        </IconInfoItem>
                            <IconInfoItem color="orange" title="easy access to schools and colleges" width="350px" type="/connected">
                                Learn at one of the many good schools & colleges of Pune near Idylworld. IW is conveniently situated close to some of the good ICSE, CBSE, SSC & IB schools and colleges of Pune.
                        </IconInfoItem>
                            <IconInfoItem color="orange" title="easy access to hospitals" width="350px" type="/connected">
                                Recuperate at one of the good hospitals near Idylworld. Idylworld is conveniently situated close to multiple specialty hospitals of different price points.
                        </IconInfoItem>
                            <IconInfoItem color="orange" title="easy access to work" width="350px" type="/connected">
                                Work from home or anywhere in Pune west/ HInjewadi. Hi speed wi fi enables working efficiently from home. Thankfully, the business hubs of PUNE west/ HInjewadi are also easily accessible from Idylworld.
                        </IconInfoItem>
                            <IconInfoItem color="yellow" title="easy access to digital work" width="350px" type="/connected">
                                Zoom and continue your digital presence with speedy WiFi. Idylworld has already installed an outdoor mesh WiFi network.
                        </IconInfoItem>
                            <IconInfoItem color="yellow" title="easy access to booming economy" width="350px" type="/connected">
                                Pune is ranked #1 amongst Indian metros in Mercer’s 2019 Quality of Living Index.Pune has consistently recorded a positive growth in business turnover, second only to Bengaluru. Pune features among India’s top 5 real estate destinations.
                        </IconInfoItem>
                            <IconInfoItem color="yellow" title="easy access to malls and movie theaters" width="350px" type="/connected">
                                Idylworld is ___ kms from movie theatres and mall in name the places.
                        </IconInfoItem>
                        </IconInfoItemContainer>


                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
            {/* <VariableHeightSection>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <SectionSubHeader>
                            Idylworld finds itself on the western side of Pune (IN) off the Pune-Lavasa road in
                            Botharwadi village. The site is sprawled across 320 acres. Geographically, this region
                            straddles the beginning of the Western Ghats outside Pune City.
                        </SectionSubHeader>
                        <ContentImage
                            src="https://idylworld-static.sgp1.digitaloceanspaces.com/puneisgoingwestlargeimage.png"
                            alt="pune map"
                        />
                        <SectionHeader color={blue}>Accessible & Centrally Located</SectionHeader>
                        <SectionSubHeader>Idylworld is accessible via 4 routes:</SectionSubHeader>
                        <Text>
                            <b>Hinjewadi</b>, <b>Chandani Chowk</b>, <b>Khadakwasla</b> and <b>Mulshi</b>.
                        </Text>
                        <SectionSubHeader>Idylworld is located:</SectionSubHeader>
                        <Text>
                            <b>10 Minutes</b> from National Highway (Paud to Raigad) & Pirangut Industrial Hub <br />
                            <b>20 Minutes</b> from Ring Road (14-Lane) & Pune Ring Road Metro (Through Bhugaon) <br />
                            <b>30 Minutes</b> from Chandani Chowk & NH4 (Mumbai-Bangalore Highway) <br />
                            <b>30 Minutes</b> from Hinjawadi IT Park
                        </Text>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
            <VariableHeightSection>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <SectionHeader color={blue}>The Growth of Pune</SectionHeader>
                        <Text align="left">
                            - Ranked #1 amongst India metros in Mercer’s 2019 Quality of Living Index. <br />
                            <br />
                            - Among India’s Top 5 real estate destinations. <br />
                            <br />
                            - Pune records a positive growth in business turnover, second only to Bengaluru. <br />
                            <br />- India’s seventh largest metropolitan economy with its sixth highest per capita
                            income. <br />
                            <br />
                            - Historically famous as an educational hub, the city has witnessed a significant growth in
                            the IT/ITeS, industrial and hospitality sectors. <br />
                            <br />- 40% of its area is under green cover, pleasant climate, a booming job market and a
                            cosmopolitan vibe.
                        </Text>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
            <VariableHeightSection>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <SectionHeader color={blue}>Pune is Moving West</SectionHeader>
                        <Text>
                            Closer and better connected to Mumbai (India’s commercial capital), Western Pune is growing
                            much faster than its saturated Eastern counterpart. Leading industries include:
                            <br />
                            <br />
                            <b>
                                IT/ITeS
                                <br />
                                <br />
                                Automobiles
                                <br />
                                <br />
                                Education
                                <br />
                                <br />
                                Hospitality
                                <br />
                                <br />
                                Manufacturing
                                <br />
                                <br />
                                Infrastructure
                            </b>
                        </Text>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
            <VariableHeightSection>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <SectionHeader color={blue}>Nearby Hospitals</SectionHeader>
                        <Text>
                            <b>15 Minutes Away</b>
                            <br />
                            Shraddha Hospital
                            <br />
                            Shrikrupa Hospital
                            <br />
                            Sanjeevan Hospital
                            <br />
                            Aastha Orthopaedic and Pediatric Hospital
                            <br />
                            <br />
                            <b>20 Minutes Away</b>
                            <br />
                            Dynaneshwari Hospital
                            <br />
                            Shree Ganesh Hospital
                            <br />
                            Surya Hospital
                            <br />
                            Mulshi Multispecialty Hospital
                            <br />
                            <br />
                            <b>30 Minutes Away</b>
                            <br />
                            Asian Speciality Hospital
                            <br />
                            <br />
                            <b>35 to 40 Minutes Away</b>
                            <br />
                            Prime Multispeciality Hospital
                            <br />
                            Chellaram Hospital - Diabetes Care & Multispeciality
                            <br />
                            Bavdhan Medicare Centre
                            <br />
                            Sahyadri Hospital
                            <br />
                            <br />
                            <b>45 Minutes Away</b>
                            <br />
                            Ruby Hall General Hospital
                            <br />
                            <br />
                            <b>50 Minutes Away</b>
                            <br />
                            Jupiter Hospital
                        </Text>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
            <VariableHeightSection>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <SectionHeader color={blue}>Nearby Schools</SectionHeader>
                        <Text>
                            <b>20-25 Minutes Away</b>
                            <br />
                            Indus International School
                            <br />
                            Sanskriti School
                            <br />
                            Heritage International School
                            <br />
                            Mount Litera Zee School Hinjawadi
                            <br />
                            <br />
                            <b>30-35 Minutes Away</b>
                            <br />
                            Avatar Academy
                            <br />
                            Sri Sri Ravi Shankar Vidya Mandir
                            <br />
                            Rainbow International
                            <br />
                            <br />
                            <b>40-45 Minutes Away</b>
                            <br />
                            Vidya Valley School
                            <br />
                            Mahindra World School
                            <br />
                            Ryan International School
                            <br />
                            Mahindra International School
                            <br />
                            Edify International School
                            <br />
                            Sayadhri International School
                            <br />
                            Pawar Public School
                            <br />
                            Global Indian International School
                            <br />
                            New India School
                            <br />
                            City International School
                            <br />
                            Mahesh Vidyalaya English Medium
                            <br />
                            <br />
                            <b>50-60 Minutes Away</b>
                            <br />
                            Akshara International School
                            <br />
                            The Ecole Heritage School
                            <br />
                            Millenium National School
                            <br />
                            Jyotirmay International School
                        </Text>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
            <VariableHeightSection>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <SectionHeader color={blue}>Nearby Colleges</SectionHeader>
                        <Text>
                            <b>15-25 Minutes Away</b>
                            <br />
                            Pune Institue of Business Management
                            <br />
                            Bharati Vidyapeeth College Of Engineering
                            <br />
                            VIT's PVP College of Architecture
                            <br />
                            Liberty Institute of Fashion Technology
                            <br />
                            Symbiosis Institute of Skill Development
                            <br />
                            <br />
                            <b>30-35 Minutes Away</b>
                            <br />
                            Indian Institue of Cost and Management
                            <br />
                            Ambrosia Institue of Hotel Management
                            <br />
                            Padmabhushan Vasantdada Patil Institute Of Technology
                            <br />
                            Modern College of Agriculture Biotechnology
                            <br />
                            FLAME University
                            <br />
                            <br />
                            <b>40-45 Minutes Away</b>
                            <br />
                            International Institute of Information Technology
                            <br />
                            Symbiosis Institute Of International Business
                            <br />
                            Symbiosis Centre for Management and Human Resource Development
                            <br />
                            International School of Business & Media
                            <br />
                            Symbiosis International (Deemed University)
                            <br />
                            Mahindra United World College
                        </Text>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection> */}
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
