import { useForm, useFieldArray, Controller } from "react-hook-form";
import TextFieldForm from "../TextFieldForm";
import { DevTool } from "@hookform/devtools";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setSuccessModal, setSodiumData } from "../../store/ExampleSlice";

const FoodEntry = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      meal : "",
      location : "",
      foodEntry: ""
    }
  });
  
  const onSubmit = (data) => {
    dispatch(setSuccessModal(true));
    dispatch(setSodiumData(data));
    reset();
    console.log("data", data);
}
  const food = watch("foodEntry");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-center gap-4 ">
        <div className="flex flex-col gap-4">
            <div className="w-full h-full flex justify-between items-center">
                <div className="w-1/3 flex flex-col gap-12">
                    <div className="w-full">
                        <Controller
                            render={({ field }) => <TextFieldForm field={field} placeholder="eg. breakfast" 
                            rows={3}
                            label="Meal Time" fullwidth/>}
                            name={`meal`}
                            control={control}
                            />
                    </div>
                        
                    <div>
                        <Controller
                        render={({ field }) => <TextFieldForm field={field} 
                        placeholder="eg. home cooked / restaurant" 
                        label="Where did you eat?" rows={3}
                        fullwidth
                        />}
                        name={`location`}
                        control={control}
                        />
                    </div>
                    
                    
                </div>

                <div className="flex items-center">
                    <img src={"./images/salad.jpg"} className="w-2/5 max-w-[200px] mx-12"/>
                    <img src={"./images/yoghurtBowl.webp"} className="w-2/5 max-w-[300px] mx-12"/>
                </div>
            </div>
            
            <div >
            <Controller
                render={({ field }) => <TextFieldForm field={field} 
                placeholder="eg. 1 bowl of cereal and 2 hard boiled eggs" 
                label="What did you eat?" rows={6}
                fullwidth
                />}
                name={`foodEntry`}
                control={control}
                />
            </div>
        </div>
        
        <div className="w-full flex justify-end items-start my-8">
            <Button type="submit" variant="contained">Submit</Button>
        </div>
      </div>
      <DevTool control={control} /> 
    </form>
  );
}
export default FoodEntry;