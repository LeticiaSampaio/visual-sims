import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const NewCylinder = (props) => {
    const mesh = useRef()
    const [hovered, setHover] = useState(false)

    useFrame((state, delta) => (mesh.current.rotation.x))

    return (
        <mesh
            {...props}
            position={props.position}
            ref={mesh}
            scale={1}
            onClick={(event) => { if (props.action) props.action() }}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <cylinderGeometry args={props.size} />
            <meshStandardMaterial color={hovered ? 'orange' : props.color} />
        </mesh>
    )
}

export default NewCylinder;