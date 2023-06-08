import { Box } from "@mui/material"
import Formulario from "../../Components/Formulario/Formulario"
import styled from "styled-components"
import { mediumTitle, } from "../../UI/Variables";
import {  CounterProvider } from "./Contex.js";

const MediumTitle = styled(mediumTitle)`
    padding-top: 3rem;
    text-align: center;
`
const NuevoVideo = () => {
    return (
        <CounterProvider>
            <Box sx={{
                backgroundColor: "#2d2f31",
            }}>
                <MediumTitle>Nuevo Video</MediumTitle>
                <Formulario nomForm="NuevoVideoForm"/>
            </Box>
        </CounterProvider>
    )
}

export default NuevoVideo