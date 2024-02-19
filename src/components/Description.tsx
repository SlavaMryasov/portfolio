import styled from "styled-components"
import { Theme } from "../styles/Theme"

type DescriptionPropsType = {
    margin?: string,
    maxWidth?: string,
    height?: string,
    textAlign?: string
}

export const Description = styled.div<DescriptionPropsType>`
max-width: ${props => props.maxWidth || "100%"};
height: ${props => props.height || "100%"};
margin: ${props => props.margin || "0"};
h4, p{
    text-align: ${props => props.textAlign || "center"};;
width: 100%;
    font-weight: 300;
    font-family: "Roboto", sans-serif;
    color: ${Theme.colors.font}
}

`