import { Box, Grid, TextField, InputAdornment, Checkbox } from "@mui/material";
import { useSelector } from "react-redux";

const Details = () => {

    const userDetails = useSelector((state) => state.user.userData);
    console.log(userDetails);

  return (
    <div>
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
                xs={5}
                key={index}
                item={true}
              >
                <label>{item.label}</label>
                <TextField
                  variant="outlined"
                  disabled
                  value={userDetails[item.name]}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {item.adornment}
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <div className="flex flex-col justify-center mb-4">
        <Grid className="flex justify-center items-center" item={true}>
          <Checkbox checked={userDetails.isCKD} />
          <label>are you a CKD patient?"</label>
        </Grid>
      </div>
    </div>
  );
};
export default Details;

const hardCodedValues = {
  name: "John Doe",
  email: "johnDoe@gmail.com",
  height: "171",
  weight: "70",
  age: "22",
  activityLevel: "Light (1-2 days of exercise per week)",
  isCKD: true,
};

const inputs = [
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
    name: "height",
    label: "Height",
    adornment: "cm",
  },
  {
    id: 4,
    name: "weight",
    label: "Weight",
    adornment: "kg",
  },
  {
    id: 5,
    name: "age",
    label: "Age",
    adornment: "",
  },
  {
    id: 6,
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
