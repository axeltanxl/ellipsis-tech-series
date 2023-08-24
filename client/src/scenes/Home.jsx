import { Box, Typography,Button } from "@mui/material"
import { generateColors } from "../initialSettings"
import CreateCanvas from "../components/canvas/CreateCanvas"

const Home = () => {
    const colors = generateColors();
    return (
    <section className="relative w-full h-full flex flex-col" >
        <Box className="bg-primary w-full h-1/2 flex flex-col justify-center items-center p-4">

            <Button href="/example" variant="contained" className="bg-secondary">Example</Button>
            <div className="w-[400px] h-[400px]">
                <CreateCanvas  urlToGLTF={"./kidney_cross-section/scene.gltf"}/>
            </div>
        </Box>
    </section>
    )
}

export default Home;