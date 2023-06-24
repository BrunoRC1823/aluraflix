import { Box } from "@mui/material";
import Banner from "../Components/Banner/Banner";
import Carrusel from "../Components/Carousel/Carrusel";
import { categoriasServices } from "../Service/categoria-service";

const cateList = await categoriasServices.listaCategorias();
const Home = () => {
    return (
        <>
            <Banner/>
            <Box component="section" 
            sx={{paddingBottom:"5rem"}}>
                <Carrusel categoria={cateList}/>
            </Box>
        </>
    )
}

export default Home