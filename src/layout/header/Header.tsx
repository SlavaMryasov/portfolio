import styled from "styled-components";

import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { Logo } from "../../components/logo/Logo";
import { ContentContainer } from "../../components/ContentContainer";
import { MobileMenu } from "./mobileMenu/MobileMenu";

const items = [
  { name: "my skills", link: "#mySkills" },
  { name: "projects", link: "#projects" },
  { name: "about", link: "#about" },
  { name: "contacts", link: "#contacts" },
];

export const Header = () => {
  return (
    <StyledHeader>
      <Container backgroundColor="transparent">
        <ContentContainer >
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          <HeaderMenu menuItems={items} />
          <MobileMenu menuItems={items}/>
        </FlexWrapper>
        </ContentContainer>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
height: 50px;
  text-transform: uppercase;
  padding: 0 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  backdrop-filter: blur(10px);
  width: 100vw;
`;

