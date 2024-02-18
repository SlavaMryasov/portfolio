import styled from "styled-components"
import { Theme } from "../../../styles/Theme"
// {name: string, link: string}


export const HeaderMenu = (props: { menuItems: Array<{name: string, link?: string}> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index) => <ListItem role="menuitem"  key={index}><Link href={item.link}>{item.name}</Link></ListItem>)}
            </ul>
        </StyledHeaderMenu>
    )
}

const StyledHeaderMenu = styled.nav`
width: 620px;
    ul{
        display: flex;
        justify-content: space-between;
        width: 100%;
        list-style: none;
        padding: 0;
    }

    @media ${Theme.media.tablet} {
        display: none;
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