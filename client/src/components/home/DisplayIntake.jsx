import { Box, Typography } from "@mui/material";
import CreateCanvas from "../canvas/CreateCanvas"
import SodiumPie from "./SodiumPie";


const DisplayIntake = () => {
    return (
        <div className="w-full h-full flex">
            <div className="w-[200px] h-[300px]">
                <CreateCanvas urlToGLTF={"./salt_shaker/scene.gltf"} scale={28} position={[0,-1.5,0]}/>
            </div>
            <div className="flex-1 flex-col ">
                <Typography variant="h2" textAlign="center">Salt intake</Typography>
                <SodiumPie/>
            </div>
        </div>
    )
}

export default DisplayIntake;