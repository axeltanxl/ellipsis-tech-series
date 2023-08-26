import Layout from "../components/Layout";

const Profile = () => {
    return (
        <Layout>
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
                  InputProps={{
                      endAdornment: <InputAdornment position="end">{adornment}</InputAdornment>,
                  }}
                  >

                  </TextField>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <div className="flex flex-col justify-center mb-4">
             <Grid className="flex justify-center items-center" item={true}>
                  <label>are you a CKD patient?"</label>
                  <Checkbox />
            </Grid>
        </div>
            </div>
        </Layout>
    )
}

export default Profile;

const inputs = [
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