import { Box, Grid, TextField } from "@mui/material";
// import StandardTextField from "../StandardTextField";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./validationSchema";
import { DevTool } from "@hookform/devtools";
// import useLogin from "../../hooks/auth/useLogin";

const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  // const {mutate : login} = useLogin(reset)
  const handleSave = async (data) => {
    console.log("to be submitted");
    console.log(data);
    // login(data);
  };

  const navigate = useNavigate();

  return (
    <>
      <form onSubmit={handleSubmit(handleSave)} width="100%">
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
          <button
            className="py-2 mt-[5px] w-3/5 text-base bg-light_green hover:bg-green-200 rounded-lg border-0"
            onClick={() => navigate("/")}
          >
            Login
          </button>
          <div className="text-sm">
            Don't have an account yet?{" "}
            <button
              className="py-1 mt-2 text-sm bg-white text-gray-400 hover:text-black rounded-lg border-0"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </button>
          </div>
        </Box>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default LoginForm;

const inputs = [
  {
    id: 1,
    name: "email",
    label: "Email",
    adornment: "",
  },
  {
    id: 2,
    name: "password",
    label: "Password",
    adornment: "",
  },
];
