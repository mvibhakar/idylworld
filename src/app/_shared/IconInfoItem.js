import React from "react";
import styled from "styled-components";
import { Text } from "../_shared";
import {
    backgroundBeigeColor,
    blueGradientBottom,
    blueGradientTop,
    breakpoint,
    greenGradientBottom,
    greenGradientTop,
    orangeGradientBottom,
    orangeGradientTop,
    yellowGradientTop,
    yellowGradientBottom,
    brownGradientTop,
    brownGradientBottom,
    S3Key,
} from "../../utils";

export const IconInfoItem = ({ color, title, width, children }) => {
    const blank = width && !title ? true : false;

    return (
        <IconInfoConatiner width={width} blank={blank}>
            <ColorContainer color={color} width={width}>
                {title && <Pictogram src={S3Key + title + ".png"} alt={title} />}
            </ColorContainer>
            <H3>{title}</H3>
            <Text>{children}</Text>
        </IconInfoConatiner>
    );
};

const IconInfoConatiner = styled.div`
    width: ${(props) => props.width};
    min-height: 300px;
    margin: 20px;
    display: ${(props) => (props.blank ? "none" : "block")};

    @media (min-width: ${breakpoint}) {
        display: block;
    }
`;

const getGradient = (color) => {
    if (color === "blue") {
        return "linear-gradient(" + blueGradientTop + ", " + blueGradientBottom + ")";
    } else if (color === "green") {
        return "linear-gradient(" + greenGradientTop + ", " + greenGradientBottom + ")";
    } else if (color === "orange") {
        return "linear-gradient(" + orangeGradientTop + ", " + orangeGradientBottom + ")";
    } else if (color === "yellow") {
        return "linear-gradient(" + yellowGradientTop + ", " + yellowGradientBottom + ")";
    } else if (color === "brown") {
        return "linear-gradient(" + brownGradientTop + ", " + brownGradientBottom + ")";
    } else {
        return backgroundBeigeColor;
    }
};

const ColorContainer = styled.div`
    width: ${(props) => props.width};
    height: 200px;
    background: ${(props) => getGradient(props.color)};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Pictogram = styled.img`
    width: 140px;
    height: 140px;
`;

const H3 = styled.h3`
    margin: 20px 0 5px;
    padding: 0;
    text-transform: uppercase;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.4);
    font-family: "Work Sans", sans-serif;
    letter-spacing: 2px;
    font-weight: 600;
`;
