import { Box, Button, CircularProgress, Typography } from "@mui/material"
import { useExample } from "../hooks/requests/useExample"
import { TiltCard } from "../components/TiltCard"
import CreateCanvas from "../components/canvas/CreateCanvas"

const Example = () => {
    const { data : exampleData, isSuccess, isLoading} = useExample()

    if(isLoading){
        return (
        <Box>
            <CircularProgress/>
            <Typography>Start the json server with npm run startServer</Typography>
        </Box>)
    }
    if(isSuccess){
        return (
        <Box className="w-full h-full bg-background">
            <Button href="/" variant="contained">to home</Button>
            <Typography className="text-text font-sans">below are data called from json server</Typography>
            {exampleData.map((e) => {
                return <Button 
                key={e.id}
                variant="contained" 
                className="text-text m-[5px]"
                href={`/example/${e.id}`}
                >{e.data}</Button>
            })}



            {/* tilt example */}
            <Box className="flex gap-2 my-4">
                <TiltCard title="title1" index={1} imgIcon="../images/example.jpg"/>
                <TiltCard title="title2" index={2} imgIcon="../images/example.jpg"/>
                <TiltCard title="title3" index={10} imgIcon="../images/example.jpg"/>
            </Box>
            {/* 3d models example */}
            
            <div className="w-[400px] h-[400px] flex gap-4">
                <div className="w-[150px] h-[150px]" >
                    <CreateCanvas urlToGLTF={"./desktop_pc/scene.gltf"} scale={0.3} rotation={[0,-1,0]} position={[0,-1, 0]} helper/>
                </div>
            </div>
        </Box>
        )
    }
}

export default Example