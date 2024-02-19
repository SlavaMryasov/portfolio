import styled from "styled-components"
import { Theme } from "../../../../styles/Theme";
import { Description } from "../../../../components/Description";

type ProjectPropsType = {
    title: string;
    text: string;
    src: string;
    alt: string;
  };

export const Project = (props: ProjectPropsType) => {
    return(
        <StyledProject>
            <Image src={props.src} alt={props.alt}/>
            <Description margin="0 5%"  textAlign="start">
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
            </Description>
        </StyledProject>
    )
}

const StyledProject = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
   max-height: 535px;
    background-color: ${Theme.colors.secondaryBg};
    border-radius: 20px;
`
const Image = styled.img`
display: flex;
width: 100%;
max-height: 355px;
object-fit: cover;
opacity: 70%;
border-radius: 20px;
transition: 0.2s;

&:hover{
    opacity: 100%;
}
`

const Title = styled.h4`
line-height: 28px;
font-size: 24px;
text-transform: uppercase;
margin: 35px 0 0 0;
`;

const Text = styled.p`
    font-size: 18px;
    line-height: 21px;
    margin: 7px 0 45px;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;