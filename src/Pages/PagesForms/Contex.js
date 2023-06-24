import React, { createContext } from "react";
import { categoriasServices } from "../../Service/categoria-service";
import { videosServices } from "../../Service/videos-service";

export const CounterContext = createContext();

const categorias = await categoriasServices.listaCategorias()
const videos = await videosServices.listaVideos();
export const CounterProvider = ({ children }) => {
    const estilosInputs = {
        borderRadius: "5px 5px 0 0",
        '& .css-e4w4as-MuiFormLabel-root-MuiInputLabel-root': {
            color: '#ffffff92',
        },
        '& .css-o943dk-MuiFormLabel-root-MuiInputLabel-root ': {
            color: '#ffffff92',
        },
        '& .MuiInputBase-input': {
            color: 'white',
        },
        '& .css-14x1nlk ': {
            color: '#ffffff92',
        },
        '& .css-1rgmeur': {
            color: '#ffffff92'
        }
    }
    const estilosSelect = {
        borderRadius: "5px 5px 0 0",
        '& .css-e4w4as-MuiFormLabel-root-MuiInputLabel-root': {
            color: '#ffffff92',
        },
        '& .css-o943dk-MuiFormLabel-root-MuiInputLabel-root ': {
            color: '#ffffff92',
        },
        '& .MuiInputBase-input': {
            color: 'white',
        },
        '& .css-i4bv87-MuiSvgIcon-root': {
            color: 'white',
        },
        '& .css-1glvl0p-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-clearIndicator': {
            color: 'white',
        },
        '& .css-14x1nlk ': {
            color: '#ffffff92',
        },
        '& .css-vubbuv': {
            color: 'white',
        },
        '& .css-1k33q06': {
            color: 'white',
        },
        '& .css-1rgmeur': {
            color: '#ffffff92'
        }
    }
    const contentForm = {
        NuevoVideoForm: {
            inputs: [
                {
                    label: "ID",
                    type: "text",
                    name: "id",
                    variant: "filled",
                    sx: estilosInputs,
                    hidden: true,
                },
                {
                    label: "Titulo",
                    type: "text",
                    name: "titulo",
                    variant: "filled",
                    sx: estilosInputs
                },
                {
                    label: "Link del video",
                    type: "text",
                    name: "url",
                    variant: "filled",
                    sx: estilosInputs
                },
                {
                    label: "Link de la imagen del video",
                    type: "text",
                    name: "imagen",
                    variant: "filled",
                    sx: estilosInputs
                },
                {
                    label: "Seleccione Categoria",
                    type: "cbo",
                    name: "categoria_id",
                    select: categorias,
                    variant: "filled",
                    sx: estilosSelect
                },
                {
                    label: "Descripcion",
                    type: "text",
                    name: "descripcion",
                    variant: "filled",
                    component: "textArea",
                    sx: estilosInputs
                },
                {
                    label: "Código seguridad",
                    type: "text",
                    name: "codSeg",
                    variant: "filled",
                    sx: estilosInputs
                },
            ],
            buttons: [
                {
                    variant: "contained",
                    sx: {
                        padding: "0.5rem 2rem",
                    },
                    type: "submit",
                    buttonText: "Guardar"
                },
                {
                    variant: "outlined",
                    sx: {
                        padding: "0.5rem 2rem",
                    },
                    type: "button",
                    buttonText: "Limpiar"
                },
                {
                    variant: "contained",
                    sx: {
                        padding: "0.5rem 2rem",
                    },
                    type: "button",
                    buttonText: "Nueva Categoría"
                },
            ]
        },
        NuevaCategoriaForm: {
            inputs: [
                {
                    label: "ID",
                    type: "text",
                    name: "id",
                    variant: "filled",
                    sx: estilosInputs,
                    hidden: true,
                },
                {
                    label: "Nombre",
                    type: "text",
                    name: "nombre",
                    variant: "filled",
                    sx: estilosInputs
                },
                {
                    label: "Descripcion",
                    type: "text",
                    name: "descripcion",
                    component: "textArea",
                    variant: "filled",
                    sx: estilosInputs
                },
                {
                    label: "Color",
                    type: "color",
                    name: "color",
                    variant: "filled",
                    sx: estilosInputs
                },
                {
                    label: "Codigo de seguridad",
                    type: "text",
                    name: "codSeg",
                    variant: "filled",
                    sx: estilosInputs
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
                    sx: {
                        padding: "0.5rem 2rem",
                    },
                    type: "button",
                    buttonText: "Limpiar"
                },
            ]
        }
    }
    const estilosForm = {
        padding: "3rem 25%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "2rem"
    }
    const estilosContainerForm = {
        backgroundColor: "#2d2f31",
    }
    return (
        <CounterContext.Provider value={{
            contentForm,
            estilosForm,
            estilosContainerForm,
            categorias,
            videos
        }}>{children}</CounterContext.Provider>
    )
}