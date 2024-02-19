import styled from "styled-components";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";

const skillsItems = [
  {
    title: "javascript",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "react",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "html",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "css",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "styled components",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "github",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
          <SectionTitle>My skills</SectionTitle>
          <FlexWrapper justify="center" wrap="wrap" gap="20px">
            {skillsItems.map((item, index) => (<Skill key={index} 
                title={item.title}
                description={item.description}/>))}
          </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};


const StyledSkills = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
`;
