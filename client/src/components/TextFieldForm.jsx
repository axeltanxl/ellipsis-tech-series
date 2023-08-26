import { TextField, InputAdornment } from "@mui/material"


const TextFieldForm = ({field, adornment="", placeholder="", label="", rows=1, fullwidth=false}) => {
    return (
        <TextField {...field} variant="outlined" size="small" 
        label={label} rows={rows} placeholder={placeholder}
        fullWidth={fullwidth}
        multiline
            sx={{
                "& label.Mui-focused": {
                    color: "secondary.main"
                    },
    
                "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                        borderColor: "secondary.main"
                    }
                    }
            }}
            InputProps={{
                endAdornment: <InputAdornment position="end">{adornment}</InputAdornment>,
            }}
            />
    )
}
export default TextFieldForm;