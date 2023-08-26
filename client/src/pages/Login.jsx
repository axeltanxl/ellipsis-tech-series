import { useState } from "react";
import Layout from "../components/Layout";
import LoginForm from "../components/login/LoginForm";
import SignUpForm from "../components/login/SignUpForm";
import { Button, Typography } from "@mui/material"
import {generateColors} from "../initialSettings"

const Login = () => {
    const [isLogin, setLogin] = useState(true)
    const colors = generateColors();
    return (
        <Layout>
            <div className="flex flex-col">
                {isLogin ? 
                    <LoginForm/>:
                    <SignUpForm/>
                }
                <div>
                <Button onClick={() => setLogin(!isLogin)} sx={{color: colors.text}}>
                    <Typography sx={{textDecoration:"underline"}}>
                        {isLogin ? "Sign up" : "Log in"}
                    </Typography>
                </Button>
                </div>
            </div>
        </Layout>
    )
}

export default Login;