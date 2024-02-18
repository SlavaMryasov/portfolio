import styled from "styled-components"
import { Theme } from "../styles/Theme"

type DescriptionPropsType = {
    marginLeft?: string,
    marginTop?: string,
    maxWidth?: string,
    height?: string,
    textAlign?: string
}

export const Description = styled.div<DescriptionPropsType>`
max-width: ${props => props.maxWidth || "100%"};
height: ${props => props.height || "100%"};
margin-left: ${props => props.marginLeft || 0};
margin-top: ${props => props.marginTop || 0};
h4, p{
    text-align: ${props => props.textAlign || "center"};;
width: 100%;
    font-weight: 300;
    font-family: "Roboto", sans-serif;
    color: ${Theme.colors.font}
}
p{ font-size:18px;
    margin-top: ${props => props.marginTop};
}
`