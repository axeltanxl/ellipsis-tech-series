import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { DevTool } from "@hookform/devtools";

const SignupForm = () => {
  const defaultValues = {
    name: "",
    age: "",
    height: "",
    weight: "",
    isPatient: "",
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: defaultValues,
  });

  const handleSave = (data) => {
    console.log("Updated account settings:", data);
  };

  const navigate = useNavigate();

  return (
    <>
      <form onSubmit={handleSubmit(handleSave)} noValidate>
        <Box display="flex" p="20px" pb="10px">
          <Grid
            container
            spacing={2}
            display="flex"
            alignItems="center"
            justifyContent="space-around"
          >
            {inputs.map((item, index) => {
              return (
                <Grid
                  display="flex"
                  flexDirection="column"
                  my="5px"
                  xs={12}
                  key={index}
                  item={true}
                >
                  <label>{item.label}</label>
                  <Controller
                    name={item.name}
                    control={control}
                    render={({ field }) =>
                      item.name !== "password" ? (
                        <TextField
                          {...field}
                          variant="outlined"
                          size="small"
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              "&.Mui-focused fieldset": {
                                borderColor: "primary.main",
                              },
                            },
                          }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                {item.adornment}
                              </InputAdornment>
                            ),
                          }}
                        />
                      ) : (
                        <TextField
                          {...field}
                          variant="outlined"
                          size="small"
                          type="password"
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              "&.Mui-focused fieldset": {
                                borderColor: "primary.main",
                              },
                            },
                          }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                {item.adornment}
                              </InputAdornment>
                            ),
                          }}
                        />
                      )
                    }
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <Box className="flex justify-center">
          {/* <Button variant="contained">submit</Button> */}
          <button
            className="py-2 mt-[5px] w-3/5 text-base bg-light_green hover:bg-green-200 rounded-lg border-0"
            onClick={navigate("/signup2")}
          >
            Next
          </button>
        </Box>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default SignupForm;

const inputs = [
  {
    id: 1,
    name: "name",
    label: "Name",
    adornment: "",
  },
  {
    id: 2,
    name: "email",
    label: "Email",
    adornment: "",
  },
  {
    id: 3,
    name: "password",
    label: "Password",
    adornment: "",
  },
];
