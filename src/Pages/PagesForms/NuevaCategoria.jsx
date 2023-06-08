import { Box } from "@mui/material";
import { CounterProvider } from "./Contex.js";
import Formulario from "../../Components/Formulario/Formulario.jsx";
import { mediumTitle, } from "../../UI/Variables";
import styled from "styled-components";

const MediumTitle = styled(mediumTitle)`
    padding-top: 3rem;
    text-align: center;
`
const NuevaCategoria = () =>{
    return (
        <CounterProvider>
        <Box sx={{
            backgroundColor: "#2d2f31",
        }}>
            <MediumTitle>Nueva Categoria</MediumTitle>
            <Formulario nomForm="NuevaCategoriaForm"/>
        </Box>
    </CounterProvider>
    )
}

export default NuevaCategoria