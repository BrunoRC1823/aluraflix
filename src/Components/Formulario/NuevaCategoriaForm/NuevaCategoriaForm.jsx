import { Box, TextField } from "@mui/material";
import React from "react";
import Boton from "../../Boton/Boton";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { nuevaCategoriaSchema } from "./Validaciones";

const NuevaCategoriaForm = (props) => {
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
    return (
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
                                    <Link to="/nuevaCategoria">
                                        <Boton variant={variant}
                                            type={type}
                                            key={i}
                                            text={buttonText}
                                            sx={sx}
                                        />
                                    </Link>
                                </Box>
                                :
                                <Boton variant={variant}
                                    type={type}
                                    key={i}
                                    text={buttonText}
                                    sx={sx}
                                    onClick={limpiar ? limpiarInputs : undefined}
                                />
                            }
                        </React.Fragment>
                    );
                })}
            </Box>
        </Box>
    )
}

export default NuevaCategoriaForm