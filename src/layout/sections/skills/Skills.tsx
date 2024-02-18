import styled from "styled-components";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Theme } from "../../../styles/Theme";
import { SectionTitle } from "../../../components/SectionTitle";
import { ContentContainer } from "../../../components/ContentContainer";

const skillsItems = [
  {
    title: "javascript",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor mollitia magnam culpa aliquam enim ea, harum provident! Debitis, vitae!",
  },
  {
    title: "react",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor mollitia magnam culpa aliquam enim ea, harum provident! Debitis, vitae!",
  },
  {
    title: "html",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor mollitia magnam culpa aliquam enim ea, harum provident! Debitis, vitae!",
  },
  {
    title: "css",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor mollitia magnam culpa aliquam enim ea, harum provident! Debitis, vitae!",
  },
  {
    title: "styled components",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor mollitia magnam culpa aliquam enim ea, harum provident! Debitis, vitae!",
  },
  {
    title: "github",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor mollitia magnam culpa aliquam enim ea, harum provident! Debitis, vitae!",
  },
];

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <ContentContainer padding="0 0 100px">
          <SectionTitle>My skills</SectionTitle>
          <FlexWrapper justify="space-between" wrap="wrap" gap="20px">
            {skillsItems.map((item, index) => (<Skill key={index} 
                title={item.title}
                description={item.description}/>))}
          </FlexWrapper>
        </ContentContainer>
      </Container>
    </StyledSkills>
  );
};

// {skillsItems.map((item, index)=><Skill key={index}><StyledTitle>{item.title}</StyledTitle><StyledDescription>{item.description}</StyledDescription></Skill>)}

const StyledSkills = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const StyledGridContainer = styled.div`
  display: grid;
  max-width: 1240px;
  grid-template-columns: repeat(3, auto);
  grid-auto-rows: minmax(285px, auto);
  gap: 20px;
  background-color: red;
  margin: 0 auto 100px;
`;

// const StyledTitle = styled.h4`
// font-size: 38px;
// color: ${Theme.colors.font}
// `
// const StyledDescription = styled.span`
//     font-size: 18px;
//     color: ${Theme.colors.font}
// `
