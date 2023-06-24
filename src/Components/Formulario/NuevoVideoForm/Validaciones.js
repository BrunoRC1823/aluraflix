import { object, string } from "yup"

export const nuevoVideoSchema = object({
    id: string().nullable().test("is-uuid", "Ingrese un UUID válido", (value) => {
        // Si el valor es diferente de null, validar que sea un UUID válido
        if (value !== "") {
            return string().uuid().isValidSync(value);
        }
        return true; // Permitir valor nulo
    }),
    titulo: string().required("Ingrese un titulo").min(2, "La titulo debe tener al menos 2 caracteres.").max(45, "El titulo debe tener máximo 45 caracteres.")
        .matches(/^(?:[a-zA-Z0-9!"'():,.;¿¡áéíóúÁÉÍÓÚüÜñÑ-]+(?:\s{1}[a-zA-Z0-9!"'():,.;¿¡áéíóúÁÉÍÓ ÚüÜñÑ-]+)*)?$/, "Formato incorrecto"),
    url: string().required("Ingrese una url para el video").url("Formato incorrecto"),
    imagen: string().required("Ingrese una url para la imagen").url("Formato incorrecto"),
    categoria_id: string().required("Ingrese una categoria"),
    descripcion: string().required("Ingrese una contraseña").min(2, "La descripcion debe contener al menos 2 caracteres.").max(300, "Haz ingresado demasiados caracteres."),
    codSeg: string().required("Ingrese un Codigo de seguridad").uuid("El formato de UUID es requerido"),
});