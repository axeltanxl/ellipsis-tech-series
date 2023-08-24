import { Box, Divider, Typography } from "@mui/material";
import CreateCanvas from "../canvas/CreateCanvas"
import SodiumPie from "./SodiumPie";


const DisplayIntake = () => {
    return (
        <div className="w-full h-full flex">
            <div className="w-[200px] h-[300px]">
                <CreateCanvas urlToGLTF={"./salt_shaker/scene.gltf"} scale={28} position={[0,-1.5,0]}/>
            </div>
            <div className="w-1/2 h-full flex flex-col ">
                <Typography variant="h2" textAlign="center">Salt intake today(mg)</Typography>
                <SodiumPie/>
            </div>
            <div className="flex-1 flex-col">
                <Typography variant="h3" textAlign="center">Recommended salt intake</Typography>
                <Divider className="mt-2 mb-6"/>
                <Typography>Healthy adults: 2300mg/day</Typography>
                <Typography>Adults with CKD (chronic kidney disease) : 2000mg/day</Typography>
            </div>
        </div>
    )
}

export default DisplayIntake;