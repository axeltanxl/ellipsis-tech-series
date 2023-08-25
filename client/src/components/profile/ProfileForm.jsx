import { useForm, Controller } from "react-hook-form";
import { Box, Button, Checkbox, Grid, TextField, FormControlLabel, InputAdornment } from "@mui/material"
import { DevTool } from "@hookform/devtools";

const ProfileForm = () => {
    const defaultValues = {
        name: "",
        age: "",
        height: "",
        weight: "",
        isPatient:"",
    }
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: defaultValues,
    });

    const handleSave = (data) => {
        console.log("Updated account settings:", data);
    }

    return (
    <>
    <form onSubmit={handleSubmit(handleSave)} noValidate>

                <Box display="flex" p="20px" pb="10px" >
                    <Grid container spacing={2} display="flex" alignItems="center" justifyContent="space-around">
                        {
                            inputs.map((item, index) => {
                                return (
                                    <Grid display="flex" flexDirection="column" my="5px" xs={5} key={index} item={true}>
                                        <label>{item.label}</label>
                                        <Controller name={item.name} control={control} render={({ field }) =>
                                            <TextField {...field} variant="outlined" size="small"
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    "&.Mui-focused fieldset": {
                                                        borderColor: "primary.main"
                                                    }
                                                    }
                                            }}
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">{item.adornment}</InputAdornment>,
                                            }}
                                            />
                                        } />
                                    </Grid>
                                )
                            })
                        }
                    <Grid className="flex justify-center items-center" item={true}>
                        <Controller name={"isPatient"} control={control} render={({ field }) =>
                            <FormControlLabel {...field} control={<Checkbox/>} label="are you a CKD patient?"/>
                        } />
                    </Grid>
                    </Grid>
                </Box>
                <Box className="flex justify-end m-[50px]">
                    <Button variant="contained">save</Button>
                </Box>
            </form>
            <DevTool control={control} /> 
        </>
    );
}

export default ProfileForm;

const inputs = [
    {
        id: 1,
        name: "name",
        label: "Name",
        adornment : "",
    }, 
    {
        id: 2,
        name: "age",
        label: "Age",
        adornment : "",
    }, 
    {
        id: 3,
        name: "height",
        label: "Height",
        adornment : "Kg",
    },
    {
        id: 4,
        name: "weight",
        label: "Weight",
        adornment : "cm",
    },
]
