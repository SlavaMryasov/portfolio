import styled from "styled-components"
import { Theme } from './../../../../styles/Theme';
import { Description } from "../../../../components/Description";



type SkillPropsType = {
    title: string,
    description:string
}

export const Skill = (props: SkillPropsType) => {
    return(
        <StyledSkill>
           <StyledTitle>{props.title}</StyledTitle>
           <Description maxWidth="90%" margin="0 5%"><p>{props.description}</p></Description>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`

width: 400px;
height: 285px;
border-radius: 25px;
background-color: ${Theme.colors.secondaryBg};
padding: 90px 50px 0;

&:hover{
    background-image: linear-gradient(to left, #ffe6013e, transparent);
}

`
const StyledTitle = styled.h4`
text-transform: uppercase;
font-size: 38px;
color: ${Theme.colors.font};
margin-bottom: 26px;
`