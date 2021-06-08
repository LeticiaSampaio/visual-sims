import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

const Cylinder = (props) => {
    const mesh = useRef()
    const [active, setActive] = useState(false)

    const { position } = useSpring({
        loop: true,
        position: active ? [props.position[0] + props.move, props.position[1], props.position[2]] : props.position,
    })

    useFrame((state, delta) => {
        if (props.movement) {
            if (props.move && mesh.current.position.x >= props.movement[1] - props.size[2]) {
                mesh.current.position.x = props.movement[1] - props.size[2];
            } else {
                (mesh.current.position.x > props.movement[1])
                    ? (mesh.current.position.x = -props.movement[1])
                    : (mesh.current.position.x += props.movement[0])
            }
        }
    })

    return (
        <animated.mesh
            {...props}
            position={props.move ? position : props.position}
            ref={mesh}
            scale={1.5}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => { if (props.action) props.action(true) }}
            onPointerOut={(event) => { if (props.action) props.action(false) }}>
            <cylinderGeometry args={props.size} />
            <meshStandardMaterial color={props.color} />
        </animated.mesh>
    )
}

export default Cylinder;