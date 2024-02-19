import styled from "styled-components"
import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { ContentContainer } from "../../../components/ContentContainer"
import { Description } from "../../../components/Description"
import { Theme } from "../../../styles/Theme"

type AboutMePropsType = {
    src: string
}

export const AboutMe = (props: AboutMePropsType) => {
    return(
        <StyledAboutMe>
            <Container>
                {/* <ContentContainer> */}
                <Grid>
                
                    <Quote >consectetur de adipiscing elit, sed do eiusmod dolore</Quote>
                    <PhotoWrapper>
                    <Photo alt="Photo Slava" src={props.src}/>
                    </PhotoWrapper>
                    <Description maxWidth="400px"  textAlign="start" ><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consectetur suscipit aut tempore non velit laudantium fuga hic dolores nam, doloremque itaque quod est inventore numquam dolor. Commodi a quasi veniam illo quidem, impedit doloremque nulla magni tempore sed atque deleniti doloribus molestias non, quia dicta sunt nihil. Impedit similique quibusdam quaerat vel amet, perspiciatis deleniti nihil obcaecati minima laudantium labore, asperiores officiis sapiente velit eos! Consequuntur impedit quo odio quidem totam voluptatum, velit iste! Esse tempore, illum porro, iste itaque fugit rerum debitis voluptates eligendi enim temporibus soluta quidem.</p></Description>
                    
                    
                    
                    </Grid>
                {/* </ContentContainer> */}
            </Container>
        </StyledAboutMe>
    )
}


const StyledAboutMe = styled.div`
width: 100%;
height: 100%;
`

const Grid = styled.div`
display: grid;
width: 100%;
grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(4, 25%); 

div:nth-child(1) {
    grid-area: 1/1/3/3; 
}

div:nth-child(2) {
    grid-area: 1/3/5/5;
}

div:nth-child(3) {
    grid-area: 3/1/5/3;
}

@media ${Theme.media.tablet}{
    div:nth-child(2) {
    grid-area: 1/3/4/5;

}
}
`

const PhotoWrapper = styled.div`
display: flex;
max-width: 100%;
max-height: 100%;
`


const Photo = styled.img`
max-width: 100%;
transform: scale(-1,1);
margin: 100px 0 100px;
border-radius: 25px;

@media ${Theme.media.tablet} {
    width: 288px;
    height: 328px;
    margin: 0;
}
`

const Quote = styled.div`
margin-top: 80px;
width:90%;
max-height: 300px;
font-family: "Jura", sans-serif;
font-size: 64px;
color: ${Theme.colors.font};
text-align: start;
text-transform: uppercase;
z-index: 1;
`
