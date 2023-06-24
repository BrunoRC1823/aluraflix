import { Box } from "@mui/material"
import NuevoVideoForm from "./NuevoVideoForm/NuevoVideoForm"
import { useContext } from "react";
import { CounterContext } from "../../Pages/PagesForms/Contex";
import NuevaCategoriaForm from "./NuevaCategoriaForm/NuevaCategoriaForm";



const formularios = {
    NuevoVideoForm: (data, sx) => <NuevoVideoForm {...data} {...sx} />,
    NuevaCategoriaForm: (data, sx) => <NuevaCategoriaForm {...data}  {...sx} />,
};
const devolverForm = (nomForm, data, sx) => {
    const Formulario = formularios[nomForm];
    if (Formulario) {
        return <Formulario data={data} sx={sx} />;
    } else {
        return <></>;
    }
}

const Formulario = (props) => {
    const { contentForm, estilosForm } = useContext(CounterContext)
    const { nomForm } = props
    return (
        <Box>
            {devolverForm(nomForm, contentForm[nomForm], estilosForm)}
        </Box>
    )
}

export default Formulario