import styled from "styled-components"
import { Container } from "../../../components/Container"
import { ContentContainer } from "../../../components/ContentContainer"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Theme } from "../../../styles/Theme"
import { Icon } from "../../../components/icon/Icon"

export const Contacts = () => {
    return(
        <StyledContacts>
            <Container>
                <ContentContainer>
                    <FlexWrapper justify="space-between" align="center" wrap="wrap">
                        <FlexWrapper justify="space-between" align="center" height="95%">
                        <Call><span>let’s talk about your project!</span></Call>
                        <Networks>
                            <span>slavadevbox1@gmail.com</span>
                            <Messengers>
                                <span>+79999999999</span>
                                {/* <Icon iconId={'telegram'} height='30px' width="30px"  viewBox="0 0 20 20"/>
                                <Icon iconId={'telegram'} height='30px' width="30px"  viewBox="0 0 20 20"/> */}
                            </Messengers>
                        </Networks>
                        </FlexWrapper>
                        <Copyright>© 2024 Mryasov Slava. All Rights Reserved.</Copyright>
                    </FlexWrapper>
                </ContentContainer>
            </Container>
        </StyledContacts>
    )
}

const StyledContacts = styled.div`
width: 100%;
height: 820px;
`

const Call = styled.div`
 text-align: start;
 text-transform: uppercase;

    span{
        font-size: 96px;
        font-family: "Jura", sans-serif;
       
        color: ${Theme.colors.font}
    }
`

const Networks = styled.div`
width: 260px;
height: 80px;
display: flex;
flex-wrap: wrap;
justify-content: flex-end;
span{
    display: flex;

    color: ${Theme.colors.font};
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    line-height: 30px;
    align-items: center;
}
`
const Messengers = styled.div`
width: 100%;
height: 31px;
display: flex;
justify-content: flex-end;
gap: 3px;
`
const Copyright = styled.span`
width: 100%;
font-family: "Roboto", sans-serif;
font-size: 14px;
color: ${Theme.colors.font}
`