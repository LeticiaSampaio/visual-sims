import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const Plane = (props) => {
    // This reference will give us direct access to the THREE.Mesh object
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (mesh.current.rotation.x))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            position={props.position}
            ref={mesh}
            scale={1.5}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <planeGeometry args={props.size} />
            <meshStandardMaterial color={hovered ? 'hotpink' : props.color} />
        </mesh>
    )
}

export default Plane;