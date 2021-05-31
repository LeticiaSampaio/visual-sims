import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

const Cylinder = (props) => {
    // This reference will give us direct access to the THREE.Mesh object
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    const { position } = useSpring({
        loop: true,
        position: active ? [props.position[0] + props.move, props.position[1], props.position[2]] : props.position,
    })
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => { if (props.movement) { (mesh.current.position.x > props.movement[1]) ? (mesh.current.position.x = -props.movement[1]) : (mesh.current.position.x += props.movement[0]) } })
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <animated.mesh
            {...props}
            position={props.move ? position : props.position}
            ref={mesh}
            scale={1.5}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <cylinderGeometry args={props.size} />
            <meshStandardMaterial color={hovered ? 'hotpink' : props.color} />
        </animated.mesh>
    )
}

export default Cylinder;