
const listaCategorias = async () => {
    try {
        return await fetch("http://localhost:3000/categorias").then((respuesta) => respuesta.json());
    } catch (e) {
        alert('Ocurrio un error! ' + e)
    }
}
const detalleCategoria = (id) => {
    return fetch(`http://localhost:3000/categorias/${id}`).then((response) => response.json());
}
const eliminarCategoria= async (id) => {
    try {
        return await fetch(`http://localhost:3000/categorias/${id}`, {
            method: "DELETE",
        });
    } catch (e) {
        alert('Error al eliminar! ' + e)
    }

};

const actualizarCategoria = async (data) => {
    const { id,nombre,color,descripcion,codSeg} = data;
    try {
        return await fetch(`http://localhost:3000/categorias/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ nombre,color,descripcion,codSeg}),
        });
    } catch (e) {
        console.log("Catch Error = " + e);
        alert("Hubo un error!")
    };
};
const crearCategoria = (data) => {
    const {id,nombre,color,descripcion,codSeg } = data;
    return fetch("http://localhost:3000/categorias", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ nombre,color,descripcion,codSeg, id }),
    });
}
export const categoriasServices = {
    listaCategorias,
    detalleCategoria,
    eliminarCategoria,
    actualizarCategoria,
    crearCategoria
}