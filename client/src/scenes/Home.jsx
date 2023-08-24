import { Box, Typography,Button } from "@mui/material"
import { generateColors } from "../initialSettings"
import DisplayIntake from "../components/home/DisplayIntake";
import FoodSearch from "../components/home/FoodSearch";


const Home = () => {
    const colors = generateColors();
    return (
    <section className="relative w-full h-full flex flex-col" >
        <Box className="bg-primary w-full h-1/2 flex flex-col justify-center items-center p-4">
            {/* <Button href="/example" variant="contained" className="bg-secondary">Example</Button> */}
            <DisplayIntake/>
        </Box>
            <FoodSearch/>
    </section>
    )
}

export default Home;