import Slider from "react-slick";
import VideoCard from "../VideoCard/VideoCard";
import styled from "styled-components";
import { SampleNextArrow, SamplePrevArrow } from "./FlechasCarrusel.jsx";
import { data } from "../../Data/Data"
import { mediumTitle, smallBody } from "../../UI/Variables";
import { Grid } from "@mui/material";


const Slide = styled.div`
transform: scale(0.9);
`;
const TituloStyled = styled(mediumTitle)`
    border-radius: 10px;
    padding:0.5rem 1.5rem;
`;
const SmallBodyStyled = styled(smallBody)`
`;
const Carrusel = (props) => {
    const { categoria } = props;
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div>
            {categoria.map(({ id, nombre, descripcion ,color}) => {
                const filteredData = data.filter((item) => item.categoria_id === id);
                return (
                    <div key={id}>
                        <Grid container display="flex" alignItems="center" gap={5} padding={3} >
                            <Grid item xs="auto">
                                <TituloStyled style={{backgroundColor: color}}>{nombre}</TituloStyled>
                            </Grid>
                            <Grid item xs="auto">
                                <SmallBodyStyled>{descripcion}</SmallBodyStyled>
                            </Grid>
                        </Grid>
                        <Slider {...settings}>
                            {filteredData.map(({ id, titulo, url, imagen }) => (
                                <Slide key={id}>
                                    <VideoCard href={url} src={imagen} alt={titulo} color={color}/>
                                </Slide>
                            ))}
                        </Slider>
                    </div>
                );
            })}
        </div>
    );
};

export default Carrusel;
