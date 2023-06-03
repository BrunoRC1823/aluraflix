import { Box } from "@mui/material";
import React from "react";

const estilosBannerFondo = {
    backgroundImage: "url(/img/banner.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
}
const estilosBanner = {
    backgroundColor:"rgba(0, 18, 51, 0.56)",
    width: "100%",
    height: "100%",
}
const Banner = () =>{
    return (
        <Box component="div" sx={estilosBannerFondo}>
            <Box component="div" sx={estilosBanner}>

            </Box>
        </Box>
    )
}

export default Banner