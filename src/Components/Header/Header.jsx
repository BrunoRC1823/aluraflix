import React from "react";
import Boton from "../Boton/Boton";
import { Logo } from "../../UI";
import { Box } from "@mui/material";
import { Link } from "react-router-dom"
const estilosNav = {
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: '2px solid #2A7AE4',
    padding: '1rem 6rem',
    boxSizing: 'border-box'
}

const estilosBoton = {
    color: "white",
    border: "2px solid white",
    fontWeight: "300",
    fontSize: "1rem",
    padding: "1rem 2rem",
    "&:hover": {
        backgroundColor: "#ffffff36",
        border: "1px solid white",
    }
}
const Header = () => {
    return (
        <Box component="nav" sx={estilosNav}>
            <Link to="/">
                <Logo src="img/logo.png" />
            </Link>
            <Link to="/nuevoVideo">
                <Boton
                    variant="outlined"
                    type="submit"
                    text="Nuevo Video"
                    sx={estilosBoton}
                />
            </Link>
        </Box>
    )
}

export default Header