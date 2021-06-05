import React, { useState, useEffect } from 'react';

import Cylinder from '../../atoms/Cylinder';
import TooltipObject from '../TooltipObject';

const CylinderFlow = (props) => {
    const [hovered, setHover] = useState(false);
    const [tooltipOpened, setTooltipOpened] = useState(false);
    let speed = 0.01;

    useEffect(() => {
        if (!tooltipOpened && hovered) {
            props.action();
            setTooltipOpened(!tooltipOpened);
        }
    }, [hovered]);

    if (props.speed > 0) {
        speed = 0.001 * props.speed;
    }
    return (
        <>
            <Cylinder rotation-z={Math.PI / 2} position={props.position} size={props.size} color='white' action={setHover} />
            <Cylinder
                rotation-z={Math.PI / 2}
                position={props.position}
                size={[props.size[0], props.size[1], props.size[2] / 3, props.size[3]]}
                color={props.color}
                move={props.signStatus}
                movement={[speed, props.size[2]]}
                action={setHover}

            />

            {hovered &&
                <TooltipObject
                    position={[props.position[0], props.position[1] - 1.5, props.position[2]]}
                    size={[1.8, 1.5]}
                    fontSize={5}

                    text="Um novo quadro só é enviado quando o anterior começa a renderizar na tela"
                />}
        </>
    )
}

export default CylinderFlow;
