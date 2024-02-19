import styled from "styled-components";
import { Theme } from "../styles/Theme";

type FlexWrapperPropsType = {
    direction?: string,
    justify?: string,
    align?: string,
    wrap?: string,
    padding?: string,
    height?: string,
    gap?: string,
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    padding: ${props => props.padding || 0};
    height: ${props => props.height || "100%"};
    gap: ${props => props.gap || "0"};

@media screen and (max-width: 1240px){
    justify-content: ${props => props.justify || "flex-start"};
}
`