import React from 'react';
import { extend } from '@react-three/fiber';
import { Text } from "troika-three-text";
import fonts from "./fonts";
import Plane from '../../atoms/Plane';

extend({ Text });

const TooltipObject = (props) => {

    const opts = {
        font: "Roboto",
        fontSize: props.fontSize,
        color: "#000",
        maxWidth: (props.size[0] * 25),
        lineHeight: 1,
        scale: 0.05,
        letterSpacing: 0,
        textAlign: "center",
        materialType: "MeshPhongMaterial"
    };

    return (
        <>
            <text
                text={props.text}
                position={props.position}
                {...opts}
                font={fonts[opts.font]}
                anchorX="center"
                anchorY="middle">
                {opts.materialType === "MeshPhongMaterial" ? (<meshPhongMaterial attach="material" color={opts.color} />) : null}
            </text>
            <Plane size={props.size} position={props.position} />
        </>
    )
}

export default TooltipObject;