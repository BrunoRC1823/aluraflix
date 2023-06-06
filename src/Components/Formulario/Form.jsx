import { Box } from "@mui/material"
import NuevoVideoForm from "./NuevoVideoForm/NuevoVideoForm"

const contentForm = {
    NuevoVideoForm: {
        inputs: [
            {
                label: "Titulo",
                type: "text",
                name: "titulo",
                component: "input"
            },
            {
                label: "Link del video",
                type: "text",
                name: "url",
                component: "input"
            },
            {
                label: "Link de la imagen del video",
                type: "text",
                name: "url",
                component: "input"
            },
            {
                label: "Seleccione Categoria",
                type: "cbo",
                name: "categoria",
                component: "combobox"
            },
            {
                label: "Descripcion",
                type: "text",
                name: "descripcion",
                component: "textarea"
            },
            {
                label: "Código seguridad",
                type: "text",
                name: "codSeg"
            },
        ],
        buttons: [
            {
                variant: "contained",
                sx: {},
                type: "submit",
                buttonText: "Guardar"
            },
            {
                variant: "outlined",
                sx: {},
                type: "button",
                buttonText: "Limpiar"
            },
            {
                variant: "contained",
                sx: {},
                type: "button",
                buttonText: "Nueva Categoría"
            },
        ]
    },
    nuevaCategoria: {

    }
}
const formularios = {
    NuevoVideoForm: (data) => <NuevoVideoForm {...data} />
};
const devolverForm = (nomForm) => {
    const Formulario = formularios[nomForm];
    if (Formulario) {
        return <Formulario data={contentForm[nomForm]}/>;
    } else {
        return <></>;
    }
}

const Formulario = (props) => {
    const { nomForm } = props
    return (
        <Box component="form" 
        sx={{
            padding:"3rem 25%",
            boxSizing:"border-box",
            display:"flex",
            flexDirection:"column",
            gap:"2rem"
        }}>
            {devolverForm(nomForm)}
        </Box>
    )
}

export default Formulario