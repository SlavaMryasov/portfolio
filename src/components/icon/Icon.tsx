import IconsSprite from '../../assets/icons/images/icons-sprite.svg'


type IconPropsType ={
    style?:{
        borderRadius?: string,
    },
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
}

export const Icon = (props: IconPropsType) => {
    return (
        
        <svg style={props.style} width={props.width || '50px'} height={props.height || '50px'} viewBox={props.viewBox || "0 0 50 50"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconsSprite}#${props.iconId}`}/> 
        </svg>
        
    )
}


// object-fit: cover;
// stroke


