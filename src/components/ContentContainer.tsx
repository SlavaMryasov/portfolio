import styled from "styled-components"

type ContentContainerPropsType = {
height?: string,
padding?: string
}

export const ContentContainer = styled.div<ContentContainerPropsType>`
    max-width: 1240px;
    width: 100%;
    height: ${props=>props.height || "100%"};
    padding: ${props => props.padding || "0 0"};
    margin: 0 auto;
    outline: 1px solid green;
`