import { Icon } from "../icon/Icon"
import styled from "styled-components"

export const Logo = () =>{
    return (
        <a href="#">
            <StyledIcon>
        <Icon iconId={'react'} height='40px' width="40px" style={{'borderRadius':'5px'}}/>
        </StyledIcon>
    </a>
    )
}


const StyledIcon = styled.div`
  display: flex;
  justify-content: flex-start;
`