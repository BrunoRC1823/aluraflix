import { Box, TextField } from "@mui/material";
import Boton from "../../Boton/Boton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { nuevaCategoriaSchema } from "./Validaciones";
import React, { useContext, useState } from "react";
import { CounterContext } from "../../../Pages/PagesForms/Contex";

import TableBasic from "../../Tabla/TablaBasic";

const NuevaCategoriaForm = (props) => {
    const { categorias } = useContext(CounterContext)
    const [isInputFilled, setIsInputFilled] = useState(false);
    const { inputs, buttons } = props.data;
    const { almacenarDatos, sx } = props;
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(nuevaCategoriaSchema),
        defaultValues: {
            nombre: "",
            color: "",
            descripcion: "",
            codSeg: ""
        },
    });
    const limpiarInputs = () => {
        reset({
            nombre: "",
            color: "",
            descripcion: "",
            codSeg: ""
        });
    };
    const buscarId = (id) => {
        const cateEncontrado = categorias.find((categoria) => categoria.id === id);
        llenarInputs(cateEncontrado)
    };
    const llenarInputs = (data) => {
        setIsInputFilled(true);
        reset(data);
    };
    return (
        <>
            <Box component="form"
                sx={sx}
                onSubmit={handleSubmit((data) => {
                    almacenarDatos(data);
                    limpiarInputs();
                })}>
                {inputs.map((input, i) => {
                    const { label, type, name, variant, sx, component } = input;
                    const esTextArea = !!component;
                    return (
                        <React.Fragment key={i}>
                            <TextField
                                key={i}
                                label={label}
                                variant={variant}
                                fullWidth
                                type={type}
                                error={!!errors[name]}
                                helperText={errors[name]?.message}
                                {...register(name)}
                                sx={sx}
                                autoComplete="off"
                                {...(esTextArea ? { multiline: true, rows: 6 } : {})}
                                InputLabelProps={isInputFilled? { shrink: isInputFilled }: {}}
                            />
                        </React.Fragment>
                    )
                })}
                <Box sx={{
                    display: 'flex',
                    gap: "2rem"
                }}>
                    {buttons.map((button, i) => {
                        const { buttonText, type, variant, sx } = button;
                        const limpiar = buttonText === "Limpiar"
                        const isLastButton = i === buttons.length - 1;
                        return (
                            <React.Fragment key={i}>
                                {isLastButton ?
                                    <Box key={i}
                                        sx={{
                                            display: 'flex',
                                            flex: "1",
                                            justifyContent: "flex-end",
                                        }}>
                                            <Boton variant={variant}
                                                type={type}
                                                key={i}
                                                text={buttonText}
                                                sx={sx}
                                                onClick={limpiar ? limpiarInputs : undefined}
                                            />
                                    </Box>
                                    :
                                    <Boton variant={variant}
                                        type={type}
                                        key={i}
                                        text={buttonText}
                                        sx={sx}
                                    />
                                }
                            </React.Fragment>
                        );
                    })}
                </Box>
            </Box>
            <TableBasic tableData={categorias} buscarId={buscarId}/>
        </>
    )
}

export default NuevaCategoriaForm