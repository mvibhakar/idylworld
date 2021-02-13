import React from "react";
import { blue } from "../../utils";
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
} from "../_shared";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

export const Connected = () => {
    return (
        <Main>
            <VariableHeightSection first={true}>
                <ScrollAnimation animateIn="fadeIn">
                    <ContentContainer>
                        <SectionHeader color={blue}>Idylworld is Connected</SectionHeader>
                        <Text>
                            Idylworld finds itself on the western side of Pune (IN) off the Pune-Lavasa road in
                            Botharwadi village. The site is sprawled across 320 acres. Geographically, this region
                            straddles the beginning of the Western Ghats outside Pune City.
                        </Text>
                        <ContentImage src="https://idylworld-static.sgp1.digitaloceanspaces.com/puneisgoingwestlargeimage.png" />
                        {/* <CarouselContainer autoplay>
                        <CarouselImage src="https://idylworld-static.sgp1.digitaloceanspaces.com/puneisgoingwestlargeimage.png" />
                        <CarouselImage src="https://idylworld-static.sgp1.digitaloceanspaces.com/puneisgoingwestlargeimage.png" />
                        <CarouselImage src="https://idylworld-static.sgp1.digitaloceanspaces.com/puneisgoingwestlargeimage.png" />
                    </CarouselContainer> */}
                    </ContentContainer>
                </ScrollAnimation>
            </VariableHeightSection>
            <VariableHeightSection>
                <ScrollAnimation animateIn="fadeIn">
                    <ContentContainer>
                        <SectionHeader color={blue}>Connected & Accessible</SectionHeader>
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
                    </ContentContainer>
                </ScrollAnimation>
            </VariableHeightSection>
            <VariableHeightSection>
                <ScrollAnimation animateIn="fadeIn">
                    <ContentContainer>
                        <SectionHeader color={blue}>The City of Pune</SectionHeader>
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
                    </ContentContainer>
                </ScrollAnimation>
            </VariableHeightSection>
            <VariableHeightSection>
                <ScrollAnimation animateIn="fadeIn">
                    <ContentContainer>
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
                    </ContentContainer>
                </ScrollAnimation>
            </VariableHeightSection>
            <VariableHeightSection>
                <ScrollAnimation animateIn="fadeIn">
                    <ContentContainer>
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
                    </ContentContainer>
                </ScrollAnimation>
            </VariableHeightSection>
            <VariableHeightSection>
                <ScrollAnimation animateIn="fadeIn">
                    <ContentContainer>
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
                    </ContentContainer>
                </ScrollAnimation>
            </VariableHeightSection>
            <VariableHeightSection>
                <ScrollAnimation animateIn="fadeIn">
                    <ContentContainer>
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
                    </ContentContainer>
                </ScrollAnimation>
            </VariableHeightSection>
        </Main>
    );
};
