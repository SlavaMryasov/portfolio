import styled from "styled-components"

type ContainerPropsType = {
    backgroundColor?: string,
}

export const Container = styled.div<ContainerPropsType>`
    max-width: 100vw;
    width: 100%;
    height: 100%;
    padding: 0 0;
    margin: 0 0;
    outline: 1px solid red;
    background-color: ${props => props.backgroundColor || "#2B2B2B"};
`