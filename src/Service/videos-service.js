const listaVideos = async () => {
    try {
        return await fetch("http://localhost:3000/videos").then((respuesta) => respuesta.json());
    } catch (e) {
        alert('Ocurrio un error! ' + e);
    }
}

const listaVideosCate = async (idCate) => {
    try {
        return await fetch(`http://localhost:3000/videos?categoria_id=${idCate}`)
            .then((respuesta) => respuesta.json());
    } catch {
        alert('Ocurrió un error!');
    }
}

const eliminarVideo = async (id) => {
    try {
        return await fetch(`http://localhost:3000/videos/${id}`, {
            method: "DELETE",
        });
    } catch (e) {
        alert('Error al eliminar! ' + e)
    }

};

const actualizarVideo = async (data) => {
    const { id, titulo, url, imagen, categoria_id, descripcion,codSeg} = data;
    try {
        return await fetch(`http://localhost:3000/videos/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ titulo, url, imagen, categoria_id, descripcion ,codSeg}),
        });
    } catch (e) {
        console.log("Catch Error = " + e);
        alert("Hubo un error!")
    };
};
const detalleVideo = (id) => {
    return fetch(`http://localhost:3000/videos/${id}`).then((response) => response.json());
};
const crearVideo = (data) => {
    const { id,titulo, url, imagen, categoria_id, descripcion,codSeg } = data;
    return fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ titulo, url, imagen, categoria_id, descripcion,codSeg, id }),
    });
}
export const videosServices = {
    listaVideos,
    listaVideosCate,
    eliminarVideo,
    actualizarVideo,
    detalleVideo,
    crearVideo
}