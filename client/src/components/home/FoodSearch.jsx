import { Box, Typography, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const FoodSearch = () => {
    const [userQuery, setUserQuery] = useState("");

    
    const onchange = (e) => {
        setUserQuery(e.target.value);
    }
    

    return (
        <Box className="w-full h-full flex flex-col m-4">
            <Typography variant="h2" textAlign="center">What to eat ??</Typography>
            <TextField fullWidth onChange={onchange} 
            sx={{p:"20px"}}
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlinedIcon/>
                  </InputAdornment>
                ),
                sx:{borderRadius: "20px"}
              }}
            />
        </Box>
    )
}
export default FoodSearch;