import { Box } from "@mui/material";
import React from "react";
import { Logo } from "../../UI";
import styled from "styled-components";

const LogoFooterStyled = styled(Logo)`
    width: 252.5px;
    height: 60px;
`
const Footer = () =>{
    return (
        <Box component="div" sx ={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "auto",
            padding:"1.5rem 0",
            borderTop: "2px solid #2A7AE4",
            boxSizing: "border-box"
        }}>
            <LogoFooterStyled src="img/logo.png"/>
        </Box>
    )
}

export default Footer