import React from "react";
import Button from '@mui/material/Button/Button';

const Boton  = (props) =>{
    const {text,variant,type,sx} = props;
    return <Button  
    variant ={variant}
    type={type}
    sx={sx}>
        {text}
    </Button>
}

export default Boton