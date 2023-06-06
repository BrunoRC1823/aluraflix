import { Box } from "@mui/material"
import Formulario from "../Components/Formulario/Form"
import styled from "styled-components"
import { mediumTitle, } from "../UI/Variables";
const MediumTitle = styled(mediumTitle)`
    margin-top: 3rem;
    text-align: center;
`

const NuevoVideo = () =>{
    return (
        <Box>
            <MediumTitle>Nuevo Video</MediumTitle>
            <Formulario nomForm="NuevoVideoForm"/>
        </Box>
        
    )
}   

export default NuevoVideo