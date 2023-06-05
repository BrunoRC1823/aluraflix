import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

export const SampleNextArrow = ({ onClick }) => {
    return (
        <ArrowForwardIosOutlinedIcon onClick={onClick} sx={{
            position: "absolute",
            color: "#f8f8f86d",
            width: "8rem",
            fontSize: "8rem",
            right: "-1%",
            top: "30%",
            transition: "all 0.5s",
            borderRadius: "70%",
            zIndex: "1",
            cursor: "pointer",
            "&:hover": {
                backdropFilter: "blur(2px)",
            }
        }} />
    );
}

export  const SamplePrevArrow = ({ onClick }) => {
    return (
        <ArrowBackIosNewOutlinedIcon onClick={onClick} sx={{
            position: "absolute",
            color: "#f8f8f86d",
            width: "8rem",
            fontSize: "8rem",
            left: "-1%",
            top: "30%",
            transition: "all 0.5s",
            borderRadius: "70%",
            zIndex: "1",
            cursor: "pointer",
            "&:hover": {
                backdropFilter: "blur(2px)",
            }
        }} />
    );
}