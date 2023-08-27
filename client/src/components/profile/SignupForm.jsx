import { useForm, FormProvider, Controller, useFormState } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
import CustomisedTextField from "../CustomisedTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../login/validationSchema";
import { useRegister } from "../../hooks/requests/userRoutes";
const SignupForm = () => {
  const navigate = useNavigate();
  const [hasClickedNext, setHasClickedNext] = useState(false);
  const { mutate: signUp } = useRegister();

  const defaultValues = {
    name: "",
    email: "",
    password: "",
    age: "",
    height: "",
    weight: "",
    activityLevel: "",
    isCKD: "",
  };

  const methods = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(signUpSchema),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = methods;

  const { touchedFields } = useFormState({
    control
  });

  const isTouched = (name) => {
    return (name in touchedFields);
  }

  async function handleButtonClick() {
    const result = await trigger(["name", "email", "password"]);
    if (result) {
      setHasClickedNext(!hasClickedNext);
    }
  }

  const handleSave = (data) => {
    console.log(errors);

    console.log("Updated account settings:", data);
    signUp(data);
  };

  return (
    <>
      <form id="my-form" onSubmit={handleSubmit(handleSave)} noValidate>
        <div className={`flex flex-col ${hasClickedNext ? "hidden" : ""}`}>
          <Box display="flex" p="20px" pb="10px">
            <Grid
              container
              spacing={2}
              display="flex"
              alignItems="center"
              justifyContent="space-around"
            >
              {inputs1.map((item, index) => {
                return (
                  <Grid
                    display="flex"
                    flexDirection="column"
                    my="5px"
                    xs={8.5}
                    sm={10}
                    key={index}
                    item={true}
                  >
                    {/* <label>{item.label}</label> */}
                    <Controller
                      name={item.name}
                      control={control}
                      render={({ field }) =>
                        item.name !== "password" ? (
                          <CustomisedTextField
                            field={field}
                            errors={errors}
                            name={item.name}
                            label={item.label}
                            adornment={item.adornment}
                          />
                        ) : (
                          <CustomisedTextField
                            field={field}
                            errors={errors}
                            name={item.name}
                            label={item.label}
                            adornment={item.adornment}
                            type="password"
                          />
                        )
                      }
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          <Box className="flex flex-col justify-center items-center">
            {/* <Button variant="contained">submit</Button> */}
            <button
              className="py-2 mt-[5px] w-3/5 text-base bg-light_green hover:bg-green-200 rounded-lg border-0"
              onClick={handleButtonClick}
            >
              Next
            </button>
            <div className="text-sm">
              Already have an account?{" "}
              <button
                className="py-1 mt-2 text-sm bg-white text-gray-400 hover:text-black rounded-lg border-0"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </div>
          </Box>
        </div>

        <div className={`flex flex-col ${hasClickedNext ? "" : "hidden"}`}>
          <Box display="flex" p="20px" pb="10px">
            <Grid
              container
              spacing={2}
              display="flex"
              alignItems="center"
              justifyContent="space-around"
            >
              {inputs2.map((item, index) => {
                return (
                  <Grid
                    display="flex"
                    flexDirection="column"
                    my="5px"
                    xs={8.5}
                    sm={10}
                    md={5}
                    key={index}
                    item={true}
                    className="xs:w-[350px]"
                  >
                    {/* <label>{item.label}</label> */}
                    <Controller
                      name={item.name}
                      control={control}
                      render={({ field }) =>
                        item.name !== "activityLevel" ? (
                          //   <TextField
                          //     {...field}
                          //     variant="outlined"
                          //     size="small"
                          //     sx={{
                          //       "& .MuiOutlinedInput-root": {
                          //         "&.Mui-focused fieldset": {
                          //           borderColor: "primary.main",
                          //         },
                          //       },
                          //     }}
                          //     InputProps={{
                          //       endAdornment: (
                          //         <InputAdornment position="end">
                          //           {item.adornment}
                          //         </InputAdornment>
                          //       ),
                          //     }}
                          //   />
                          <CustomisedTextField
                            field={field}
                            errors={isTouched(item.name) && errors}
                            name={item.name}
                            label={item.label}
                            adornment={item.adornment}
                          />
                        ) : (
                          <FormControl>
                            <Select {...field}>
                              {inputs2
                                .find((item) => item.name === "activityLevel")
                                .options.map((option) => (
                                  <MenuItem
                                    key={option}
                                    value={option}
                                    // InputProps={{ dense: true }}
                                  >
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
                name={"isCKD"}
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
            //   onClick={() => trigger()}
              // type="submit" form='my-form'
              type="submit"
              form="my-form"
            >
              Submit
            </button>
            <button
              className="py-1 mt-2 text-sm bg-white text-gray-400 hover:text-black rounded-lg border-0"
              onClick={handleButtonClick}
            >
              Back
            </button>
          </Box>
        </div>
      </form>
      {/* <DevTool control={control} /> */}
    </>
  );
};

export default SignupForm;

const inputs1 = [
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

const inputs2 = [
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
