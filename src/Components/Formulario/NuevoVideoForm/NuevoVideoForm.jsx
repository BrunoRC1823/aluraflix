import { TextField, Button, Box } from "@mui/material";

const NuevoVideoForm = (props) => {
    const { inputs, buttons } = props.data;
    return (
        <>
            {inputs.map((input, i) => {
                const { label, type } = input;
                return (
                    <TextField
                        key={i}
                        label={label}
                        variant="filled"
                        fullWidth
                        type={type}
                        sx={{
                            backgroundColor: "rgba(83, 88, 93, 1)",
                            borderRadius: "5px 5px 0 0",
                            '& .css-e4w4as-MuiFormLabel-root-MuiInputLabel-root': {
                                color: '#ffffff92',
                            },
                            '& .MuiInputBase-input': {
                                color: 'white',
                            },
                        }}
                    />
                );
            })}
            <Box sx={{
                display: 'flex',
                gap: "2rem"
            }}>
                {buttons.map((button, i) => {
                    const { buttonText, type, variant } = button;
                    const isLastButton = i === buttons.length - 1;
                    return (
                        <>
                            {isLastButton ?
                                <Box sx={{
                                    display: 'flex',
                                    flex: "1",
                                    justifyContent: "flex-end",
                                }}>
                                    <Button variant={variant}
                                        type={type}
                                        key={i}>
                                        {buttonText}
                                    </Button>
                                </Box>
                                : <Button variant={variant}
                                    type={type}
                                    key={i}>
                                    {buttonText}
                                </Button>
                            }
                        </>
                    );
                })}
            </Box>
        </>
    )
}

export default NuevoVideoForm