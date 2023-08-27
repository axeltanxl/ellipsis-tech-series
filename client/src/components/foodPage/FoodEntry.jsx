import { useForm, useFieldArray, Controller } from "react-hook-form";
import TextFieldForm from "../TextFieldForm";
import { DevTool } from "@hookform/devtools";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Modal,
  TextField,
  MenuItem,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setSuccessModal, setSodiumData } from "../../store/ExampleSlice";

const FoodEntry = ({ open, setOpenFoodEntry }) => {
  const options = ["BREAKFAST", "LUNCH", "DINNER", "SNACK"];

  const dispatch = useDispatch();
  const { control, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      meal: "BREAKFAST",
      location: "",
      foodEntry: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(setSuccessModal(true));
    dispatch(setSodiumData(data));
    reset();
    console.log("data", data);
    setOpenFoodEntry(false);
  };
  const food = watch("foodEntry");

  return (
    <Modal
      open={open}
      onClose={() => {setOpenFoodEntry(false);}}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box height="45%" width="60%" bgcolor="#ffffff" p="20px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box className="w-full h-full flex flex-col justify-center gap-4 ">
            <div className="flex flex-col gap-4">
              <div className="w-full h-full flex justify-between items-center">
                <div className="flex flex-col gap-12">
                  <Box my="20px">
                    <Controller
                      render={({ field }) => (
                        <TextField
                          select
                          {...field}
                          placeholder="eg. breakfast"
                          //   rows={3}
                          label="Meal"
                          fullWidth
                        >
                          {options.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </TextField>
                      )}
                      name={`meal`}
                      control={control}
                    />
                  </Box>

                  <Box my="20px">
                    {/* <Controller
                      render={({ field }) => (
                        <TextFieldForm
                          field={field}
                          placeholder="eg. home cooked / restaurant"
                          label="Where did you eat?"
                          rows={3}
                          fullwidth
                        />
                      )}
                      name={`location`}
                      control={control}
                    /> */}
                  </Box>
                </div>
                {/* <div className="flex items-center w-[200px] h-[400px] ">
              <img
                src={"./images/salad.jpg"}
                className="w-2/5 h-1/5 max-w-[200px] max-h-[300px] mx-12 object-scale-down"
              />
            </div> */}
              </div>

              <Box my="20px">
                <Controller
                  render={({ field }) => (
                    <TextFieldForm
                      field={field}
                      placeholder="eg. 1 bowl of cereal and 2 hard boiled eggs"
                      label="What did you eat?"
                      rows={6}
                      fullwidth
                    />
                  )}
                  name={`foodEntry`}
                  control={control}
                />
              </Box>
            </div>

            <Box
              w="100%"
              h="100%"
              display="flex"
              justifyContent="space-between"
              my="20px"
            >
              {/* <Box width ="60%" height="100%" display="flex" justifyContent="space-between"> */}
              {/* <img
                src={"./images/yoghurtBowl.webp"}
                style={{ objectFit: "scale-down" }}
                width="30%"
                // className="w-2/5 max-w-[300px] max-h-[300px] mx-12 object-contain"
              /> */}
              {/* <img
                src={"./images/salad.jpg"}
                // className="w-2/5 h-1/5 max-w-[200px] max-h-[300px] mx-12 object-scale-down"
                    style={{objectFit : "scale-down", transform : "transform:rotate(90deg)"}}
                    width="30%"
              /> */}

              {/* </Box> */}
              <div>
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </div>
            </Box>
          </Box>
          <DevTool control={control} />
        </form>
      </Box>
    </Modal>
  );
};

export default FoodEntry;