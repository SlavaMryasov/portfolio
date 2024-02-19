import styled, {css} from "styled-components"
import { Theme } from "../../../styles/Theme"
//import css from "styled-components"
// {name: string, link: string}


export const MobileMenu = (props: { menuItems: Array<{name: string, link?: string}> }) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={true}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={false}>
            <ul>
                {props.menuItems.map((item, index) => <ListItem role="menuitem"  key={index}><Link href={item.link}>{item.name}</Link></ListItem>)}
            </ul>
            </MobileMenuPopup>
            
        </StyledMobileMenu>
    )
}

const StyledMobileMenu = styled.nav`
display: none;
   

    @media ${Theme.media.tablet} {
        display: block;
    }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
position: fixed;
height: 100vh;
width: 100vw;
top: 0;
left: 0;
bottom: 0;
right: 0;
z-index: 99999;
background-color: rgba(31, 31, 31, 0.8);
backdrop-filter: blur(10px);
display: none;

${props => props.isOpen && css<{isOpen: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
`}


 ul{
        display: flex;
        justify-content: space-between;
        gap: 36px;
        width: 100%;
        list-style: none;
        padding: 0;
        flex-direction: column;
        align-items: center;
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 999999;
    background-color: transparent;
    border: none;
    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${Theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{isOpen: boolean}> `
            background-color: rgba(255, 255, 255, 0);
        `}

        &::before {
            content: "";
            display: block;
        width: 36px;
        height: 2px;
        background-color: ${Theme.colors.font};
        position: absolute;
        transform: translateY(-10px);

        ${props => props.isOpen && css<{isOpen: boolean}> `
            transform: rotate(-45deg) translateY(0);
        `}

        }

        &::after {
            content: "";
            display: block;
        width: 24px;
        height: 2px;
        background-color: ${Theme.colors.font};
        position: absolute;
        transform: translateY(10px);

        ${props => props.isOpen && css<{isOpen: boolean}> `
            transform: rotate(45deg) translateY(0);
            width: 36px;
        `}

        }
    }
`

export const ListItem = styled.li`
width: 120px;

&:active{
  
}
`

const Link = styled.a`
color: ${Theme.colors.font};
text-decoration: none;
text-align: center;
font-family: 'Roboto', sans-serif;
font-size: 22px;
font-weight: 300;
position: relative;


&:hover{
    &::before{
        height: 1.2px;
        width: 100%;
      
    }
}

&:active{
    font-size: 20px;
    &::before{
        height: 1.2px;
        width: 100%;
       
    }
}

&::before {
    content: "";
    display: inline-block;
    background-color: ${Theme.colors.borderColor};
    transition: width 0.1s ease-out;
    position: absolute;
    bottom: -3px;
    left: 0;
    right: 0;
    width: 0;
    //z-index: -1;
}
`