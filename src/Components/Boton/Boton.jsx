import React from "react";
import Button from '@mui/material/Button/Button';

const Boton  = (props) =>{
    const {text,variant,type,sx,onClick} = props;
    return <Button  
    variant ={variant}
    type={type}
    sx={sx}
    onClick={onClick}>
        {text}
    </Button>
}

export default Boton