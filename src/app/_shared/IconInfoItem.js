import React from "react";
import styled from "styled-components";
import { Text } from "../_shared";
import {
    blueGradientBottom,
    blueGradientTop,
    breakpoint,
    greenGradientBottom,
    greenGradientTop,
    orangeGradientBottom,
    orangeGradientTop,
    S3Key,
} from "../../utils";

export const IconInfoItem = ({ color, title, children }) => {
    return (
        <IconInfoConatiner>
            <ColorContainer color={color}>
                <Pictogram src={S3Key + title + ".png"} alt={title} />
            </ColorContainer>
            <H3>{title}</H3>
            <Text>{children}</Text>
        </IconInfoConatiner>
    );
};

const IconInfoConatiner = styled.div`
    width: 200px;
    min-height: 300px;
    margin: 20px;

    @media (min-width: ${breakpoint}) {
    }
`;

const getGradient = (color) => {
    if (color === "blue") {
        return "linear-gradient(" + blueGradientTop + ", " + blueGradientBottom + ")";
    } else if (color === "green") {
        return "linear-gradient(" + greenGradientTop + ", " + greenGradientBottom + ")";
    } else if (color === "orange") {
        return "linear-gradient(" + orangeGradientTop + ", " + orangeGradientBottom + ")";
    }
};

const ColorContainer = styled.div`
    width: 200px;
    height: 200px;
    background: ${(props) => getGradient(props.color)};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Pictogram = styled.img`
    width: 160px;
    height: 160px;
`;

const H3 = styled.h3`
    margin: 20px 0 5px;
    padding: 0;
    text-transform: uppercase;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    font-family: "Work Sans", sans-serif;
`;
