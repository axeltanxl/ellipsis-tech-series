import { GizmoHelper, GizmoViewport } from "@react-three/drei"

const Helper = () => {
    return (
        <>
        <GizmoHelper
                    alignment="bottom-right" // widget alignment within scene
                    margin={[10, 10]} // widget margins (X, Y)
                    renderPriority={1}
                    scale={0.001}
                    
                    >
                        <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
                    </GizmoHelper>
        </>
)
}
export default Helper
 