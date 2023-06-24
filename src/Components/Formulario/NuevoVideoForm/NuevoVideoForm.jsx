import { Autocomplete, Box, TextField } from "@mui/material";
import Boton from "../../Boton/Boton";
import { useForm } from "react-hook-form";
import { nuevoVideoSchema } from "./Validaciones";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { videosServices } from "../../../Service/videos-service";
import TableBasic from "../../Tabla/TablaBasic";
import { useContext } from "react";
import { CounterContext } from "../../../Pages/PagesForms/Contex";
import { categoriasServices } from "../../../Service/categoria-service";
import Alertas from "../../Alertas/Alertas";

const NuevoVideoForm = (props) => {
    const { videos, categorias } = useContext(CounterContext)
    const nuevaLista = videos.map(video => {
        const categoria = categorias.find(c => c.id === video.categoria_id);
        return {
            titulo: video.titulo,
            url: video.url,
            imagen: video.imagen,
            nombre_categoria: categoria ? categoria.nombre : "",
            descripcion: video.descripcion,
            codSeg: video.codSeg,
            id: video.id
        };
    });
    const [tablaData, setTablaData] = useState(nuevaLista);
    const [valueSelect, setValueSelect] = useState(null)
    const [valueCate, setValueCate] = useState([])
    const [activarInput, setActivarInput] = useState(false);
    useEffect(() => {
    }, [valueCate]);
    const { inputs, buttons } = props.data;
    const { sx } = props;
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(nuevoVideoSchema),
        defaultValues: {
            id: "",
            titulo: "",
            url: "",
            imagen: "",
            categoria_id: "",
            descripcion: "",
            codSeg: uuidv4()
        },
    });
    const estilosImgs = {
        width: "200px",
        height: "80px",
    }
    const tableColumns = [
        {
            name: "id",
            label: "Código",
            options: {
                setCellProps: () => ({
                    style: {
                        textAlign: 'center',
                    },
                })
            }
        },
        {
            name: "imagen",
            label: "Imagen",
            options: {
                setCellProps: () => ({
                    style: {
                        textAlign: 'center',
                    }
                }),
                customBodyRender: (value, tableMeta) => (
                    <img src={value} alt={`${tableMeta.rowIndex}`} style={estilosImgs} />),
            }
        },
        {
            name: "titulo",
            label: "Titulo",
            options: {
                setCellProps: () => ({
                    style: {
                        textAlign: 'center',
                    }
                })
            }
        },
        {
            name: "nombre_categoria",
            label: "Categoria",
            options: {
                setCellProps: () => ({
                    style: {
                        textAlign: 'center',
                    }
                })
            }
        }
    ];
    const limpiarInputs = () => {
        reset({
            id: "",
            titulo: "",
            url: "",
            imagen: "",
            categoria_id: "",
            descripcion: "",
            codSeg: uuidv4()
        });
        setValueSelect("");
        setActivarInput(false);
    };
    const llenarInputs = (data) => {
        setActivarInput(true);
        reset(data);
    };

    const ActualizarTabla = async (id, data) => {
        const updatedData = [...tablaData];
        const index = tablaData.findIndex((item) => item.id === id);
        if (index !== -1) {
            const nuevaData = await reemplazaCate(data)
            updatedData[index] = nuevaData;
        }
        setTablaData(updatedData);
    }

    const reemplazaCate = async (data) => {
        const cateEncontrado = await categoriasServices.detalleCategoria(data.categoria_id);
        data.categoria_id = cateEncontrado.nombre;
        const nombre_categoria = cateEncontrado.nombre;
        const nuevaData = { ...data, nombre_categoria };
        return nuevaData;
    }
    const buscarId = async (id) => {
        const videoEncontrado = await videosServices.detalleVideo(id);
        const videoReemplazado = await reemplazaCate(videoEncontrado);
        llenarInputs(videoReemplazado)
    };
    const [open, setOpen] = useState(false);
    const [texto, setTexto] = useState("");
    const [severity, setSeverity] = useState("");

    const handleOpen = (texto, severity) => {
        setSeverity(severity);
        setTexto(texto);
        setOpen(true);
    };

    const almacenarDatos = (data) => {
        let { id } = data;
        if (id === "") {
            data.id = uuidv4()
            videosServices.crearVideo(data).then(async () => {
                const nuevaData = await reemplazaCate(data);
                setTablaData([...tablaData, nuevaData]);
                handleOpen("Registro exitoso!", "success")
            }).catch(() => handleOpen("Error al registrar!", "error"));
        } else {
            videosServices.actualizarVideo(data).then(() => {
                ActualizarTabla(id, data)
                handleOpen("Se actualizo el registro con id: " + id, "info")
            }).catch(() => handleOpen("Error al actualizar!", "error"));
        }
    }
    const eliminarDatos = async (ids) => {
        try {
            const promesas = ids.map((id) => videosServices.eliminarVideo(id));
            await Promise.all(promesas);
            setTablaData((prevData) => {
                const updatedData = prevData.filter((item) => !ids.includes(item.id));
                return updatedData;
            });
            handleOpen("Registros eliminados con exito!" , "error")
            limpiarInputs();
        } catch (error) {
            handleOpen("Error al eliminar!", "error");
        }
    };
    return (
        <>
            <Box component="form"
                sx={sx}
                onSubmit={handleSubmit((data) => {
                    const categoriaSeleccionada = data.categoria_id;
                    const categoriaEncontrada = valueCate.find(([_, nombre]) => nombre === categoriaSeleccionada);
                    if (categoriaEncontrada) {
                        const [id] = categoriaEncontrada;
                        data.categoria_id = id;
                        almacenarDatos(data);
                        limpiarInputs();
                    } else {
                        handleOpen("La categoria no existe!", "warning");
                    }
                })}>
                {inputs.map((input, i) => {
                    const { label, type, name, select, variant, sx, component, hidden } = input;
                    const esTextArea = !!component;
                    const esCodSeg = name === "codSeg";
                    const ocultar = !!hidden;
                    return (
                        <React.Fragment key={i}>
                            {select ? <Autocomplete
                                disablePortal
                                options={select.map((option) => option.nombre)}
                                value={select.map((option) => option.nombre).includes(valueSelect) ? valueSelect : null}
                                onBlur={({ target }) => {
                                    const datos = select.map((option) => [option.id, option.nombre]);
                                    setValueCate(datos);
                                    setValueSelect(target.value);
                                }}
                                renderInput={(params) =>
                                    <TextField {...params}
                                        label={label}
                                        variant={variant}
                                        sx={sx}
                                        error={!!errors[name]}
                                        helperText={errors[name]?.message}
                                        {...register(name)}
                                        InputLabelProps={activarInput ? { shrink: activarInput } : {}}
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
                                    disabled={esCodSeg}
                                    sx={{
                                        ...sx,
                                        ...(ocultar ? { display: 'none' } : {}),
                                    }}
                                    autoComplete="off"
                                    {...(esTextArea ? { multiline: true, rows: 6 } : {})}
                                    InputLabelProps={activarInput ? { shrink: activarInput } : {}}
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
            <TableBasic tableData={tablaData}
                tableColumns={tableColumns}
                buscarId={buscarId}
                eliminarDatos={eliminarDatos}
                nombreTabla={"Lista Videos"}
            />

            <Alertas open={open}
                setOpen={setOpen}
                texto={texto}
                severity={severity} />
        </>
    )
}

export default NuevoVideoForm