import styled from "styled-components";
import { backgroundBeigeColor, breakpoint } from "../../utils";

export const Icon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

export const SmallIcon = styled.img`
    width: 18px;
    height: 18px;
`;

export const Text = styled.div`
    text-align: ${(props) => props.align ?? "center"};
    font-size: 16px;
    font-weight: ${(props) => props.weight ?? "500"};
    font-family: "Montserrat", sans-serif;

    @media (min-width: ${breakpoint}) {
    }
`;

export const ContentContainer = styled(Text)`
    width: 80%;

    @media (min-width: ${breakpoint}) {
        width: 800px;
    }
`;

export const Main = styled.main`
    margin-top: 70px;
    background: ${backgroundBeigeColor};
    width: 100%;
`;

export const VariableHeightSection = styled.div`
    width: 100%;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: ${breakpoint}) {
        padding: 100px 0;
    }
`;

export const FullscreenSection = styled.div`
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LargeScreenOnly = styled(VariableHeightSection)`
    @media (max-width: ${breakpoint}) {
        display: none;
    }
`;

export const H1 = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 28px;
    text-align: center;
    font-weight: 500;
    font-family: "Work Sans", sans-serif;

    @media (min-width: ${breakpoint}) {
        font-size: 40px;
    }
`;

export const SectionHeader = styled(H1)`
    margin: 0 0 20px;
    color: ${(props) => props.color ?? "black"};
`;

export const H2 = styled.h2`
    margin: 0;
    padding: 0;
    font-size: 18px;
    text-align: center;
    font-weight: 600;

    @media (min-width: ${breakpoint}) {
        font-size: 20px;
    }
`;

export const SectionSubHeader = styled(H2)`
    margin: 20px 0 0px;
`;

export const CarouselContainer = styled.div`
    margin-top: 20px;
    width: 100%;
    overflow: hidden;
    height: 300px;
    object-fit: cover;
`;

export const CarouselImage = styled.img`
    width: 100%;
`;
