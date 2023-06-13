import {object, string } from "yup"

export const nuevaCategoriaSchema = object({
    nombre: string().required("Ingrese un nombre").min(2, "La titulo debe tener al menos 2 caracteres.").max(45, "El titulo debe tener máximo 45 caracteres.")
        .matches(/^(?:[a-zA-Z0-9!"'():,.;¿¡áéíóúÁÉÍÓÚüÜñÑ-]+(?:\s{1}[a-zA-Z0-9!"'():,.;¿¡áéíóúÁÉÍÓ ÚüÜñÑ-]+)*)?$/, "Formato incorrecto"),
    color: string().required("Ingrese un color").matches(/^#[0-9A-Fa-f]+$/, "Formato incorrecto solo numero hexadecimales"),
    descripcion: string().required("Ingrese una descripcion").min(2, "La descripcion debe contener al menos 2 caracteres.").max(300, "Haz ingresado demasiados caracteres."),
    codSeg: string().required("Ingrese un Codigo de seguridad")
});