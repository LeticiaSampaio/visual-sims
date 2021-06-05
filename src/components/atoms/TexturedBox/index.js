import * as THREE from 'three'
import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';

const TexturedBox = (props) => {
    const textureNormal = useLoader(THREE.TextureLoader, props.image[0])
    const textureSides = useLoader(THREE.TextureLoader, props.image[1])
    const textureZoomIn = useLoader(THREE.TextureLoader, props.image[2])

    const mesh = useRef()

    useFrame((state, delta) => (mesh.current.position.x))

    return (
        <mesh
            {...props}
            position={props.position}
            ref={mesh}
            scale={1.5}
            onPointerOver={(event) => { if (props.action) { props.action(true) } }}
            onPointerOut={(event) => { if (props.action) { props.action(false) } }}>
            <boxGeometry args={props.size} />
            <meshStandardMaterial map={textureSides} attachArray="material" />
            <meshStandardMaterial map={textureSides} attachArray="material" />
            <meshStandardMaterial map={textureSides} attachArray="material" />
            <meshStandardMaterial map={textureSides} attachArray="material" />
            <meshStandardMaterial
                map={props.first ? (!props.show ? textureZoomIn : textureNormal) : (!props.show ? textureNormal : textureZoomIn)}
                attachArray="material"
            />{/*front of the box*/}
            <meshStandardMaterial map={textureSides} attachArray="material" />
        </mesh>
    )
}

export default TexturedBox;