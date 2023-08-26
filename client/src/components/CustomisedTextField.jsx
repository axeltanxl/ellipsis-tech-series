import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';

const CustomisedTextField = ({errors, field, name, label, type="text", adornment=""}) => {
    return (
        <TextField {...field} 
                label={label}
                type={type}
                variant="outlined"
                InputProps={{
                    endAdornment: <InputAdornment position="end">{adornment}</InputAdornment>,
                }}

                size="small"
                sx={{
                "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                    borderColor: "primary.main",
                    },
                },
                }}
                error={errors[name] !== undefined}
                helperText={errors[name]?.message}/> 
    )
}
export default CustomisedTextField;