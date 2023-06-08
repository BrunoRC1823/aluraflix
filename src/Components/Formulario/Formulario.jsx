import { Box } from "@mui/material"
import NuevoVideoForm from "./NuevoVideoForm/NuevoVideoForm"
import { useContext } from "react";
import { CounterContext } from "../../Pages/PagesForms/Contex";
import NuevaCategoriaForm from "./NuevaCategoriaForm/NuevaCategoriaForm";

const almacenarDatos = (data) => {
    console.log(data);
}

const formularios = {
    NuevoVideoForm: (data, almacenarDatos, sx) => <NuevoVideoForm {...data} {...almacenarDatos} {...sx} />,
    NuevaCategoriaForm: (data, almacenarDatos, sx) => <NuevaCategoriaForm {...data} {...almacenarDatos} {...sx} />,
};
const devolverForm = (nomForm, data, sx) => {
    const Formulario = formularios[nomForm];
    if (Formulario) {
        return <Formulario data={data} almacenarDatos={almacenarDatos} sx={sx} />;
    } else {
        return <></>;
    }
}

const Formulario = (props) => {
    const { contentForm, estilosForm } = useContext(CounterContext)
    const { nomForm } = props
    return (
        <Box >
            {devolverForm(nomForm, contentForm[nomForm], estilosForm)}
        </Box>
    )
}

export default Formulario