import { register, login } from "../../services/userServices"
import { useQuery, useMutation } from "@tanstack/react-query"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setUserData } from "../../store/ExampleSlice2";

export const useRegister = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return useMutation(register, {
        onSuccess : (data) => {
            console.log(data)
            dispatch(setUserData({...data.user}))
            navigate("/");
        },
        onError : (err)=> {
            const errorMessage = err.response.data.message 
            alert(errorMessage);
            // reset();
        }
    })
}

export const useLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return useMutation(login, {
        onSuccess : (data) => {
            console.log(data)
            dispatch(setUserData({...data.user}))
            navigate("/");
        },
        onError : (err)=> {
            const errorMessage = err.response.data.message 
            alert(errorMessage);
            // reset();
        }
    })
}