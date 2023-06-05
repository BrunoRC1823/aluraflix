import styled from "styled-components"

const AStyled = styled.a`
    display: flex;
    width: 100%;
    height: 300px;
    margin-top: 0px;
    border-radius: 5px;
    box-sizing: border-box;
`

const VideoCard = (props) =>{
    const {href, src,alt,color} = props
    return(
        <>
            <AStyled href={href} target="_blank" rel="noreferrer" style={{border: `4px solid ${color}`}}>
                <img src={src} alt={alt}/>
            </AStyled>
        </>
    )
}

export default VideoCard