import React, { createContext } from "react";
import { ListaColores } from "../../UI/Variables";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
    const { colorFrontEnd,
        colorInfraestructura,
        colorBackEnd,
        colorMarketing,
        colorMobile,
        colorInnovacion,
        colorUX,
        colorDataScience, } = ListaColores

    const categorias = [
        {
            id:1,
            nombre: "FrontEnd",
            descripcion: "Todos los video de la área de Front End colocar en esta categoría para organizar los estudios que vengo haciendo actualmente",
            color: colorFrontEnd,
            codSeg: ""
        },
        {
            id:2,
            nombre: "Infraestructura",
            descripcion: "Todos los video de la área de Front End colocar en esta categoría para organizar los estudios que vengo haciendo actualmente",
            color: colorInfraestructura,
            codSeg: ""
        },
        {
            id:3,
            nombre: "BackEnd",
            descripcion: "Todos los video de la área de Front End colocar en esta categoría para organizar los estudios que vengo haciendo actualmente",
            color: colorBackEnd,
            codSeg: ""
        },
        {
            id:4,
            nombre: "Marketing",
            descripcion: "Todos los video de la área de Front End colocar en esta categoría para organizar los estudios que vengo haciendo actualmente",
            color: colorMarketing,
            codSeg: ""
        },
        {
            id:5,
            nombre: "Mobile",
            descripcion: "Todos los video de la área de Front End colocar en esta categoría para organizar los estudios que vengo haciendo actualmente",
            color: colorMobile,
            codSeg: ""
        },
        {
            id:6,
            nombre: "Innovacion",
            descripcion: "Todos los video de la área de Front End colocar en esta categoría para organizar los estudios que vengo haciendo actualmente",
            color: colorInnovacion,
            codSeg: ""
        },
        {
            id:7,
            nombre: "UX",
            descripcion: "Todos los video de la área de Front End colocar en esta categoría para organizar los estudios que vengo haciendo actualmente",
            color: colorUX,
            codSeg: ""
        },
        {
            id:8,
            nombre: "DataScience",
            descripcion: "Todos los video de la área de Front End colocar en esta categoría para organizar los estudios que vengo haciendo actualmente",
            color: colorDataScience,
            codSeg: ""
        },
    ]
    const contentForm = {
        NuevoVideoForm: {
            inputs: [
                {
                    label: "Titulo",
                    type: "text",
                    name: "titulo",
                    variant:"filled",
                    sx:{
                        borderRadius: "5px 5px 0 0",
                        '& .css-e4w4as-MuiFormLabel-root-MuiInputLabel-root': {
                            color: '#ffffff92',
                        },
                        '& .css-o943dk-MuiFormLabel-root-MuiInputLabel-root ': {
                            color: '#ffffff92',
                        },
                        '& .MuiInputBase-input': {
                            color: 'white',
                        }
                    }
                },
                {
                    label: "Link del video",
                    type: "text",
                    name: "url",
                    variant:"filled",
                    sx:{
                        borderRadius: "5px 5px 0 0",
                        '& .css-e4w4as-MuiFormLabel-root-MuiInputLabel-root': {
                            color: '#ffffff92',
                        },
                        '& .css-o943dk-MuiFormLabel-root-MuiInputLabel-root ': {
                            color: '#ffffff92',
                        },
                        '& .MuiInputBase-input': {
                            color: 'white',
                        }
                    }
                },
                {
                    label: "Link de la imagen del video",
                    type: "text",
                    name: "imagen",
                    variant:"filled",
                    sx:{
                        borderRadius: "5px 5px 0 0",
                        '& .css-e4w4as-MuiFormLabel-root-MuiInputLabel-root': {
                            color: '#ffffff92',
                        },
                        '& .css-o943dk-MuiFormLabel-root-MuiInputLabel-root ': {
                            color: '#ffffff92',
                        },
                        '& .MuiInputBase-input': {
                            color: 'white',
                        }
                    }
                },
                {
                    label: "Seleccione Categoria",
                    type: "cbo",
                    name: "categoria_id",
                    select: categorias,
                    variant:"filled",
                    sx:{
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
                        '& .css-i4bv87-MuiSvgIcon-root':{
                            color: 'white',
                        },
                        '& .css-1glvl0p-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-clearIndicator':{
                            color: 'white',
                        },
                        '& .css-14x1nlk ':{
                            color: '#ffffff92',
                        },
                        '& .css-vubbuv':{
                            color: 'white',
                        },
                        '& .css-1k33q06':{
                            color: 'white',
                        }
                    }
                },
                {
                    label: "Descripcion",
                    type: "text",
                    name: "descripcion",
                    variant:"filled",
                    component:"textArea",
                    sx:{
                        borderRadius: "5px 5px 0 0",
                        '& .css-e4w4as-MuiFormLabel-root-MuiInputLabel-root': {
                            color: '#ffffff92',
                        },
                        '& .css-o943dk-MuiFormLabel-root-MuiInputLabel-root ': {
                            color: '#ffffff92',
                        },
                        '& .MuiInputBase-input': {
                            color: 'white',
                        }
                    }
                },
                {
                    label: "Código seguridad",
                    type: "text",
                    name: "codSeg",
                    variant:"filled",
                    sx:{
                        borderRadius: "5px 5px 0 0",
                        '& .css-e4w4as-MuiFormLabel-root-MuiInputLabel-root': {
                            color: '#ffffff92',
                        },
                        '& .css-o943dk-MuiFormLabel-root-MuiInputLabel-root ': {
                            color: '#ffffff92',
                        },
                        '& .MuiInputBase-input': {
                            color: 'white',
                        }
                    }
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
                    label: "Nombre",
                    type: "text",
                    name: "nombre",
                    variant:"filled",
                    sx:{
                        borderRadius: "5px 5px 0 0",
                        '& .css-e4w4as-MuiFormLabel-root-MuiInputLabel-root': {
                            color: '#ffffff92',
                        },
                        '& .css-o943dk-MuiFormLabel-root-MuiInputLabel-root ': {
                            color: '#ffffff92',
                        },
                        '& .MuiInputBase-input': {
                            color: 'white',
                        }
                    }
                },
                {
                    label: "Descripcion",
                    type: "text",
                    name: "descripcion",
                    component:"textArea",
                    variant:"filled",
                    sx:{
                        borderRadius: "5px 5px 0 0",
                        '& .css-e4w4as-MuiFormLabel-root-MuiInputLabel-root': {
                            color: '#ffffff92',
                        },
                        '& .css-o943dk-MuiFormLabel-root-MuiInputLabel-root ': {
                            color: '#ffffff92',
                        },
                        '& .MuiInputBase-input': {
                            color: 'white',
                        }
                    }
                },
                {
                    label: "Color",
                    type: "color",
                    name: "color",
                    variant:"filled",
                    sx:{
                        borderRadius: "5px 5px 0 0",
                        '& .css-e4w4as-MuiFormLabel-root-MuiInputLabel-root': {
                            color: '#ffffff92',
                        },
                        '& .css-o943dk-MuiFormLabel-root-MuiInputLabel-root ': {
                            color: '#ffffff92',
                        },
                        '& .MuiInputBase-input': {
                            color: 'white',
                        }
                    }
                },
                {
                    label: "Codigo de seguridad",
                    type: "text",
                    name: "codSeg",
                    variant:"filled",
                    sx:{
                        borderRadius: "5px 5px 0 0",
                        '& .css-e4w4as-MuiFormLabel-root-MuiInputLabel-root': {
                            color: '#ffffff92',
                        },
                        '& .css-o943dk-MuiFormLabel-root-MuiInputLabel-root ': {
                            color: '#ffffff92',
                        },
                        '& .MuiInputBase-input': {
                            color: 'white',
                        }
                    }
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
            estilosContainerForm
        }}>{children}</CounterContext.Provider>
    )
}