import Slider from "react-slick";
import VideoCard from "../VideoCard/VideoCard";
import styled from "styled-components";
import { SampleNextArrow, SamplePrevArrow } from "./FlechasCarrusel.jsx";
import { mediumTitle, smallBody } from "../../UI/Variables";
import { Grid } from "@mui/material";
import { videosServices } from "../../Service/videos-service";
import React, { useState } from "react";
import { useEffect } from "react";

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
        centerMode: false,
        infinite: false,
        slidesToShow: 3,
        speed: 500,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    const [cateList, setCateList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const promises = categoria.map(async ({ id, nombre, descripcion, color }) => {
                const videos = await videosServices.listaVideosCate(id);
                return { id, nombre, descripcion, color, videos };
            });

            const updatedCateList = await Promise.all(promises);
            setCateList(updatedCateList);
        };
        fetchData();
    }, [categoria]);
    return (
        <div>
            {cateList.map(({ id, nombre, descripcion, color, videos }) => {
                if (videos.length === 0) {
                    return <React.Fragment key={id}/>;
                }
                return (
                    <div key={id}>
                        <Grid container display="flex" alignItems="center" gap={5} padding={3}>
                            <Grid item xs="auto">
                                <TituloStyled style={{ backgroundColor: color }}>{nombre}</TituloStyled>
                            </Grid>
                            <Grid item xs="auto">
                                <SmallBodyStyled>{descripcion}</SmallBodyStyled>
                            </Grid>
                        </Grid>
                        <Slider {...settings}>
                            {videos.map(({ id, titulo, url, imagen }) => (
                                <Slide key={id}>
                                    <VideoCard href={url} src={imagen} alt={titulo} color={color} />
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
