import {Suspense, useRef} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF, useHelper } from '@react-three/drei'
import { SpotLightHelper } from 'three'

import CanvasLoader from "../Loader"
import Helper from './Helper'

const Item = ({urlToGLTF, scale, position, rotation, helper}) => {
    const item = useGLTF(urlToGLTF);
    const spotlight = useRef(null);
    
    useHelper(helper ? spotlight : null, SpotLightHelper, 'cyan')

  return (
    <mesh>
        <hemisphereLight intensity={3} groundColor="black"/>
        {/* <pointLight intensity={10} position={[2, 1, 2]} lookAt={[0,0,0]} /> */}
        <spotLight
        ref={spotlight}
        position={[5, 0.5, 5]}
        lookAt={[0,0,0]}
        angle={Math.PI/12}
        intensity={200}
        castShadow
        shadow-mapSize={1024}
        />
        <primitive 
        object={item.scene}
        scale={scale}
        position={position}
        rotation={rotation}
        />
    </mesh>
  )
}
const CreateCanvas = ({urlToGLTF, scale=1, position=[0, 0, 0], rotation=[0,0,0], helper=false}) => {
    
    return <Canvas
    frameloop='demand'
    shadows
    camera={{ position : [5, 3, 5], fov:25}}
    gl={{ preserveDrawingBuffer : true}}
    >
        <Suspense fallback={<CanvasLoader/>} > 
            <OrbitControls 
            // enableZoom={false} 
            // enableRotate={false}
            maxPolarAngle={Math.PI / 2} 
            minPolarAngle={Math.PI / 2}/>
            <Item urlToGLTF={urlToGLTF} scale={scale} position={position} rotation={rotation} helper={helper}/>
            {helper && <Helper/>}
            {helper && <gridHelper rotation={[Math.PI / 2, 0, 0]}/>}
            {helper && <axesHelper args={[5]} />}
        </Suspense>
        <Preload all/>
    </Canvas>
}

export default CreateCanvas;