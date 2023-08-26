import { useForm, Controller, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signUpSchema } from "../login/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup"


import {
  Box,
  Button,
  Checkbox,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  Select,
  Typography,
  MenuItem,
  FormControlLabel
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { DevTool } from "@hookform/devtools";
import CustomisedTextField from "../CustomisedTextField";

const SignupForm = () => {
  const defaultValues = {
    name: "",
    email : "",
    password : "",
    age: "",
    height: "",
    weight: "",
    isPatient: "",
  };
  const methods = useForm({
    defaultValues: defaultValues,
    resolver : yupResolver(signUpSchema)
  });
const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;
  const handleSave = (data) => {
    console.log("Updated account settings:", data);
  };

  const navigate = useNavigate();
  return (
    <>
     <FormProvider {...methods} > 
      <form onSubmit={handleSubmit(handleSave)} noValidate>
        <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        > <Typography>Step 1</Typography>
        </AccordionSummary>
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
                  xs={12}
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
                        type={"password"}
                        errors={errors}
                        name={item.name}
                        label={item.label}
                        adornment={item.adornment}

                        />
                      )
                    }
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
        </Accordion>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        > <Typography>Step 2</Typography>
        </AccordionSummary>

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
                       
                        <CustomisedTextField
                        field={field}
                        errors={errors}
                        name={item.name}
                        label={item.label}
                        adornment={item.adornment}/>
                      ) : (
                        <FormControl>
                          <Select {...field}>
                            {inputs2
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
        </Accordion>

        <Box className="flex flex-col justify-center items-center">
          <button
            className="py-2 mt-[5px] w-3/5 text-base bg-light_green hover:bg-green-200 rounded-lg border-0"
            // onClick={async () => {
            //     const result = await trigger(["name", "email", "password"]);
            //     console.log(result)
            //     if(result){
            //         navigate("/signup2")
            //     }
            // }}
            type="submit"
          >
            Submit
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
      </form>
      <DevTool control={control} />
      </FormProvider>
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