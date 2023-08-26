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
                  xs={5}
                  key={index}
                  item={true}
                >
                  <label>{item.label}</label>
                  <Controller
                    name={item.name}
                    control={control}
                    render={({ field }) =>
                      item.name !== "activityLevel" ? (
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
                        <FormControl>
                          <Select {...field}>
                            {inputs
                              .find((item) => item.name === "activityLevel")
                              .options.map((option) => (
                                <MenuItem key={option} value={option}>
                                  {option}
                                </MenuItem>
                              ))}
                          </Select>
                        </FormControl>
                      )
                    }
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <div className="flex flex-col justify-center mb-4">
          <Grid className="flex justify-center items-center" item={true}>
            <Controller
              name={"isPatient"}
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  {...field}
                  control={<Checkbox />}
                  label="are you a CKD patient?"
                />
              )}
            />
          </Grid>
        </div>

        <Box className="flex flex-col justify-center items-center">
          <button
            className="py-2 w-3/5 text-base bg-light_green hover:bg-green-200 rounded-lg border-0"
            onClick={() => navigate("/signup2")}
          >
            Submit
          </button>
          <button
            className="py-1 mt-2 text-sm bg-white text-gray-400 hover:text-black rounded-lg border-0"
            onClick={() => navigate("/signup1")}
          >
            Back
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
    name: "height",
    label: "Height",
    adornment: "cm",
  },
  {
    id: 2,
    name: "weight",
    label: "Weight",
    adornment: "kg",
  },
  {
    id: 3,
    name: "age",
    label: "Age",
    adornment: "",
  },
  {
    id: 4,
    name: "activityLevel",
    label: "Activity Level",
    options: [
      "Sedentary (0 days of exercise per week)",
      "Light (1-2 days of exercise per week)",
      "Moderate (3-4 days of exercise per week)",
      "High (5 or more days of exercise per week)",
    ],
  },
];
