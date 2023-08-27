import { useNLPS } from "../../hooks/FoodAPIHooks";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  DialogTitle,
  CircularProgress,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setSuccessModal } from "../../store/ExampleSlice";
import { useCreateMeal } from "../../hooks/requests/mealRoutes";
import { useEffect } from "react";

const DisplayAnalysis = () => {
  const dispatch = useDispatch();
  const sodiumData = useSelector((state) => state.example.sodiumData);
  const query = sodiumData.foodEntry;
  const { error, isError, isLoading, isSuccess, data } = useNLPS(query);
  const { mutate: createMeal } = useCreateMeal();

  useEffect(() => {
    if (isSuccess) {
      // console.log(data)
      const sodiumLevel = data?.foods[0].nf_sodium;
      const sugarLevel = data?.foods[0].nf_sugars;
      // console.log(sodiumData)
      const food = sodiumData.foodEntry;
      const mealType = sodiumData.meal.toUpperCase();
      const meal = {
        food: food,
        sodiumAmount: sodiumLevel,
        sugarAmount: sugarLevel,
        mealType: mealType,
      };
      console.log(meal);
      createMeal(meal);
    }
  }, [isSuccess]);

  if (isError) {
    return <DialogTitle>Invalid data</DialogTitle>;
  }
  if (isLoading) {
    return (
      <div>
        <DialogTitle>Analyzing...</DialogTitle>
      </div>
    );
  }

  if (isSuccess) {
    // SHOULD WORK IN THIS FORMAT
    // createMeal({food : "char kway teow", sodiumAmount : 65, sugarAmount : 66 , mealType :  "BREAKFAST"})
    //_____

    // console.log(data);
    // console.log(query);
    const sodiumLevel = data?.foods[0].nf_sodium;
    const sugarLevel = data?.foods[0].nf_sugars;
    const food = sodiumData.foodEntry;

    return (
      <div className="dmsans">
        <DialogTitle>Food: {food}</DialogTitle>
        <DialogTitle>Estimated Sodium Consumption: {sodiumLevel}</DialogTitle>
        <DialogTitle>Estimated Sugar Consumption: {sugarLevel}</DialogTitle>
        {/* <DialogActions>
          <Button
            onClick={() => {
              dispatch(setSuccessModal(false));
            }}
            color="inherit"
          >
            OK
          </Button>
        </DialogActions> */}
      </div>
    );
  }
};
export default DisplayAnalysis;
