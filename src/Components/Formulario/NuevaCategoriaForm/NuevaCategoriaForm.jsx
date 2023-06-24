import { Box, TextField } from "@mui/material";
import Boton from "../../Boton/Boton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { nuevaCategoriaSchema } from "./Validaciones";
import React, { useContext, useState } from "react";
import { CounterContext } from "../../../Pages/PagesForms/Contex";
import TableBasic from "../../Tabla/TablaBasic";
import { categoriasServices } from "../../../Service/categoria-service";
import { v4 as uuidv4 } from 'uuid';
import Alertas from "../../Alertas/Alertas";

const NuevaCategoriaForm = (props) => {
    const { categorias } = useContext(CounterContext)
    const [tablaData, setTablaData] = useState(categorias);
    const [activarInput, setActivarInput] = useState(false);
    const { inputs, buttons } = props.data;
    const { sx } = props;
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(nuevaCategoriaSchema),
        defaultValues: {
            id: "",
            nombre: "",
            color: "",
            descripcion: "",
            codSeg: uuidv4()
        },
    });
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
            name: "nombre",
            label: "Nombre",
            options: {
                setCellProps: () => ({
                    style: {
                        textAlign: 'center',
                    }
                })
            }
        },
        {
            name: "descripcion",
            label: "Descripcion",
            options: {
                setCellProps: () => ({
                    style: {
                        textAlign: 'center',
                    }
                })
            }
        },
    ];
    const limpiarInputs = () => {
        reset({
            id: "",
            nombre: "",
            color: "",
            descripcion: "",
            codSeg: uuidv4()
        });
    };
    const llenarInputs = (data) => {
        setActivarInput(true);
        reset(data);
    };
    const ActualizarTabla = (id, data) => {
        const updatedData = [...tablaData];
        const index = tablaData.findIndex((item) => item.id === id);
        if (index !== -1) {
            updatedData[index] = data;
        }
        setTablaData(updatedData);
    }

    const buscarId = async (id) => {
        const cateEncontrado = await categoriasServices.detalleCategoria(id);
        llenarInputs(cateEncontrado)
    };
    const [open, setOpen] = useState(false);
    const [texto, setTexto] = useState("");
    const [severity, setSeverity] = useState("");

    const handleOpen = (texto, severity) => {
        setSeverity(severity);
        setTexto(texto);
        setOpen(true);
    };
    const eliminarDatos = async (ids) => {
        try {
            const promesas = ids.map((id) => categoriasServices.eliminarCategoria(id));
            await Promise.all(promesas);
            setTablaData((prevData) => {
                const updatedData = prevData.filter((item) => !ids.includes(item.id));
                return updatedData;
            });
            handleOpen("Se eliminaron los registros con exito!", "error")
            limpiarInputs();
        } catch (error) {
            handleOpen("Error al eliminar!", "error")
        }
    };

    const almacenarDatos = (data) => {
        let { id } = data;
        if (id === "") {
            data.id = uuidv4()
            categoriasServices.crearCategoria(data).then(() => {
                setTablaData([...tablaData, data]);
                handleOpen("Registro exitoso!", "success")
            }).catch(() => handleOpen("Error al registrar!", "error"));
        } else {
            categoriasServices.actualizarCategoria(data).then(() => {
                ActualizarTabla(id, data)
                handleOpen("Se actualizo con exito el registro con id: " + id, "info")
            }).catch(() => handleOpen("Error al actualizar!", "error"));
        }

    }
    return (
        <>
            <Box component="form"
                sx={sx}
                onSubmit={handleSubmit((data) => {
                    almacenarDatos(data);
                    limpiarInputs();
                })}>
                {inputs.map((input, i) => {
                    const { label, type, name, variant, sx, component, hidden } = input;
                    const esTextArea = !!component;
                    const esCodSeg = name === "codSeg";
                    const ocultar = !!hidden;
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
                                disabled={esCodSeg}
                                {...register(name)}
                                sx={{
                                    ...sx,
                                    ...(ocultar ? { display: 'none' } : {}),
                                }}
                                autoComplete="off"
                                {...(esTextArea ? { multiline: true, rows: 6 } : {})}
                                InputLabelProps={activarInput ? { shrink: activarInput } : {}}
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
            <TableBasic tableData={tablaData}
                tableColumns={tableColumns}
                buscarId={buscarId}
                eliminarDatos={eliminarDatos}
                nombreTabla={"Lista Categorias"}
            />
            <Alertas open={open}
                setOpen={setOpen}
                texto={texto}
                severity={severity} />
        </>
    )
}

export default NuevaCategoriaForm