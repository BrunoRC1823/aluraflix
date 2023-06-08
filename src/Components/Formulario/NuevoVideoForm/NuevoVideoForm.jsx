import { Autocomplete, Box, TextField } from "@mui/material";
import Boton from "../../Boton/Boton";
import { useForm } from "react-hook-form";
import { nuevoVideoSchema } from "./Validaciones";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NuevoVideoForm = (props) => {
    const [valueSelect, setValueSelect] = useState(null)
    const [valueCate, setValueCate] = useState([])
    useEffect(() => {
    }, [valueCate]);
    const { inputs, buttons } = props.data;
    const { almacenarDatos, sx } = props;
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(nuevoVideoSchema),
        defaultValues: {
            titulo: "",
            url: "",
            imagen: "",
            categoria_id: "",
            descripcion: "",
            codSeg: ""
        },
    });
    const limpiarInputs = () => {
        reset({
            titulo: "",
            url: "",
            imagen: "",
            categoria_id: "",
            descripcion: "",
            codSeg: ""
        });
        setValueSelect("");
    };

    const selectedCateValue = (datos) => {
        setValueCate((prevDatos) => [...prevDatos, ...datos]);
    };
    return (
        <Box component="form"
            sx={sx}
            onSubmit={handleSubmit((data) => {
                const categoriaSeleccionada = data.categoria_id;
                const categoriaEncontrada = valueCate.find(([_, nombre]) => nombre === categoriaSeleccionada);
                if (categoriaEncontrada) {
                    const [id] = categoriaEncontrada;
                    data.categoria_id = id;
                }
                almacenarDatos(data);
                limpiarInputs();
            })}>
            {inputs.map((input, i) => {
                const { label, type, name, select, variant, sx, component } = input;
                const esTextArea = !!component;
                return (
                    <React.Fragment key={i}>
                        {select ? <Autocomplete
                            disablePortal
                            options={select.map((option) => option.nombre)}
                            value={select.map((option) => option.nombre).includes(valueSelect) ? valueSelect : null}
                            onBlur={({ target }) => {
                                const datos = select.map((option) => [option.id, option.nombre]);
                                setValueCate([]);
                                setValueSelect(target.value);
                                selectedCateValue(datos);
                            }}
                            renderInput={(params) =>
                                <TextField {...params}
                                    label={label}
                                    variant={variant}
                                    sx={sx}
                                    error={!!errors[name]}
                                    helperText={errors[name]?.message}
                                    {...register(name)}
                                />
                            } />
                            :
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
                            />}
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

export default NuevoVideoForm