import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

const Sphere = (props) => {
    const mesh = useRef()
    const [active, setActive] = useState(false)

    const { position } = useSpring({
        loop: true,
        position: active ? [props.position[0] + props.move, props.position[1], props.position[2]] : props.position,
    })

    useFrame((state, delta) => (mesh.current.rotation.x))

    return (
        <animated.mesh
            {...props}
            position={props.move ? position : props.position}
            ref={mesh}
            scale={1.5}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => props.action(true)}
            onPointerOut={(event) => props.action(false)}>
            <sphereGeometry args={props.size} />
            <meshStandardMaterial color={props.color} />
        </animated.mesh>
    )
}

export default Sphere;