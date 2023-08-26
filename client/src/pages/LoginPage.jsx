import { Divider, Typography } from "@mui/material";
import Layout from "../components/Layout";
import LoginForm from "../components/profile/LoginForm";

const Login = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center my-10">
        <div className="xs:w-4/5 lg:w-3/5 h-4/5 bg-bg rounded-lg ">
          <div className="w-full h-full p-8 flex flex-col">
            <div className="xs:text-2xl md:text-3xl xl:text-4xl font-semibold">
              Welcome back!
            </div>
            <div className="xs:text-xs md:text-sm lg:text-base text-gray-400 my-2">
              Enter your email and password to proceed
            </div>
            <div className="w-full h-full flex flex-col items-center">
              <Divider
                variant="middle"
                sx={{ bgcolor: "#000000", width: "100%" }}
              />
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
