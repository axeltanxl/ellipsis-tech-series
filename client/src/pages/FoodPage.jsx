import { Typography } from "@mui/material";
import Layout from "../components/Layout";
import FoodEntry from "../components/foodPage/FoodEntry";
import { useNLPS } from "../hooks/FoodAPIHooks";

const Food = () => {
    const {error, isError, isSuccess, data} = useNLPS("1 hard boiled egg");
    if(isSuccess){
        console.log(data)
    }

  return (
    <Layout>
        <div className="bg-primary rounded-lg my-8 flex flex-col gap-4 p-8">
            <Typography variant="h1">Food Entry</Typography>
            <Typography variant="h4">Track your sodium levels by giving us a general 
            description of your meals and we will automatically deduce your sodium levels </Typography>
        </div>
      <FoodEntry/>
    </Layout>
  );
};

export default Food;