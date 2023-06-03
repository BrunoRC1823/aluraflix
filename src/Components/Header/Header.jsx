import React from "react";
import Boton from "../Boton/Boton";
import { Logo } from "../../UI";
import { Box } from "@mui/material";

const estilosNav = {
    width: '100%',
    height: '65px',
    display: 'flex',
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: '2px solid #2A7AE4',
    padding: '0 2rem',
    boxSizing: 'border-box'
}

const estilosBoton = {
    color: "white",
    border: "1px solid white",
    fontWeight: "300",
    fontSize: "0.790rem",
    "&:hover": {
        backgroundColor: "#ffffff36",
        border: "1px solid white",
    }
}
const Header = () => {
    return (
        <Box component="nav" sx={estilosNav}>
            <Logo src="img/logo.png"/>
            <Boton
                variant="outlined"
                type="submit"
                text="Nuevo Video"
                sx={estilosBoton} />
        </Box>
    )
}

export default Header