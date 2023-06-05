import { Box } from "@mui/material";
import Banner from "../Components/Banner/Banner";
import Carrusel from "../Components/Carousel/Carrusel";
import {cate} from "../Data/Data"

const Home = () => {
    return (
        <>
            <Banner/>
            <Box component="section" sx={{
                paddingBottom:"5rem",
                boxSizing: "border-box"
            }}>
                <Carrusel categoria={cate}/>
            </Box>
        </>
    )
}

export default Home