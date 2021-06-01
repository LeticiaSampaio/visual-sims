import * as THREE from 'three'
import React, { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

const TexturedBox = (props) => {
    const textureNormal = useLoader(THREE.TextureLoader, props.image[0])
    const textureSides = useLoader(THREE.TextureLoader, props.image[1])
    const textureZoomIn = useLoader(THREE.TextureLoader, props.image[2])

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
    useFrame((state, delta) => (mesh.current.rotation.x))
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
            <boxGeometry args={props.size} />
            <meshStandardMaterial map={textureSides} attachArray="material" />
            <meshStandardMaterial map={textureSides} attachArray="material" />
            <meshStandardMaterial map={textureSides} attachArray="material" />
            <meshStandardMaterial map={textureSides} attachArray="material" />
            <meshStandardMaterial
                map={props.active ? (props.sync ? textureNormal : textureZoomIn) : textureNormal}
                attachArray="material"
                color={hovered ? 'hotpink' : 'white'}
            />
            <meshStandardMaterial map={textureSides} attachArray="material" />
        </animated.mesh>
    )
}

export default TexturedBox;