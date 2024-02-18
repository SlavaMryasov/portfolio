import styled from "styled-components"
import { Theme } from './../../../../styles/Theme';
import { Description } from "../../../../components/Description";

// props: {items: Array<{title:string, description?: string, link?: string}>}

type SkillPropsType = {
    title: string,
    description:string
}

export const Skill = (props: SkillPropsType) => {
    return(
        <StyledSkill>
           <StyledTitle>{props.title}</StyledTitle>
           <Description maxWidth="90%" marginLeft="5%"><p>{props.description}</p></Description>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
max-width: 400px;
max-height: 285px;
border-radius: 25px;
background-color: ${Theme.colors.secondaryBg};

&:hover{
    background-image: linear-gradient(to left, #ffe6013e, transparent);
}
h4, span {
    font-family: 'Roboto', sans-serif;
}
`
const StyledTitle = styled.h4`
font-size: 38px;
color: ${Theme.colors.font}
`