import back from "../../../assets/back.webp";
import back2 from "../../../assets/back2.webp"
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Theme } from "../../../styles/Theme";
import { Link } from "../../../components/Link";
import { font } from "../../../styles/Common";

export const MainSection = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <StyledBackground>
            <Title>
                <Name>Mryasov slava</Name>
                <MainTitle>frontend developer</MainTitle>
            </Title>
            <StyledLink><Link>get in touch</Link></StyledLink>
          </StyledBackground>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledBackground = styled.div`
  background-image: url("${back2}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin: 260px auto 180px;
 
  max-height: 220px;
  outline: 2px solid red;
  h1, h3 {
    color: ${Theme.colors.font};
    text-transform: uppercase;
    font-weight: 400;
    margin: 0 auto;
  }

  @media ${Theme.media.tablet} {
  /* max-height: 85px; */
  margin: 290px auto 180px;
}
`;

const StyledMain = styled.section`
  height: 100vh;
  display: flex;
  // background-color: #efb8b85e;
`;

const Name = styled.h3`
${font({family: "'Jura', sans-serif", weight: 400, Fmax: 48, Fmin: 24})}
`
const MainTitle = styled.h1`
${font({family: "'Koulen', sans-serif", weight: 400, Fmax: 96, Fmin: 36, lineHeight: 1.8})}

text-shadow: 0px 0px 24px;
`
const StyledLink = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
width: 400px;
height: 124px;
border-radius: 25px;
border: 1px solid ${Theme.colors.borderColor};
cursor: pointer;
a{}

&:hover{
  box-shadow: 0 0 15px ${Theme.colors.borderColor};
  backdrop-filter: blur(3px);
}

@media ${Theme.media.tablet} {
  width: 322px;
  height: 100px;
}
`