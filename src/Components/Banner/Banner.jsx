import { Box } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import React from "react";
import { bigTitle, colorFrontEnd, mediumBody } from "../../UI/Variables";
import styled from "styled-components";
import VideoCard from "../VideoCard/VideoCard";

const BigTitle = styled(bigTitle)`
`
const MediumBody = styled(mediumBody)`
`
const estilosBannerFondo = {
    backgroundImage: "url(/img/banner.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
}
const estilosBanner = {
    backgroundColor: "rgba(0, 18, 51, 0.56)",
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "0",

}
const estilosGridContainer = {
    position: "relative",
    zIndex: "1",
    height: "100%",
    boxSizing: "border-box",
    gap: "15%"
}
const Banner = () => {
    return (
        <Box sx={estilosBannerFondo}>
            <Box sx={estilosBanner}>
                <Grid container sx={estilosGridContainer} display="flex" justifyContent="center" alignItems="center">
                    <Grid xs={5} display="flex" flexDirection="column" sx={{
                        gap: "1rem"
                    }}>
                        <BigTitle>ChallengeReact</BigTitle>
                        <MediumBody>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</MediumBody>
                    </Grid>
                    <Grid xs={3}>
                        <VideoCard href={"https://www.youtube.com/watch?v=ov7vA5HFe6w"}
                            src={"/img/queSignifica.jpg"}
                            alt={"video"} 
                            color={colorFrontEnd}
                            />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Banner