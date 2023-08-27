import { useNLPS } from "../../hooks/FoodAPIHooks";
import { Dialog, DialogActions, DialogContent, Button, DialogTitle, CircularProgress } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setSuccessModal } from "../../store/ExampleSlice";
import { useCreateMeal } from "../../hooks/requests/mealRoutes";

const DisplayAnalysis = () => {
    const dispatch = useDispatch()
    const sodiumData = useSelector((state) => state.example.sodiumData)
    const query = sodiumData.foodEntry;
    const {error, isError, isLoading, isSuccess, data} = useNLPS(query);
    const { mutate : createMeal } = useCreateMeal();

        if(isError){
            return (<DialogTitle>Invalid data</DialogTitle>)
        }
        if(isLoading){
            return (
                <div>
                    <DialogTitle>Analyzing...</DialogTitle>
                </div>
            )
        }


        if(isSuccess){

            // SHOULD WORK IN THIS FORMAT
            // createMeal({food : "char kway teow", sodiumAmount : 65, sugarAmount : 66 , mealType :  "BREAKFAST"})
            //_____

            console.log(data);
            console.log(query);
            const sodiumLevel = data?.foods[0].nf_sodium;
            return (
                <div>
                    <DialogTitle>Estimated Sodium Consumption: {sodiumLevel}</DialogTitle>
                    <DialogActions>
                        <Button 
                        color="secondary"
                        onClick={() => { 
                            dispatch(setSuccessModal(false));
                        }
                            }>
                            OK
                        </Button>
                    </DialogActions>
                </div>
            )
        }
    }
export default DisplayAnalysis;