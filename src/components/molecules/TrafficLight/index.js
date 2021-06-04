/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import Box from '../../atoms/Box';
import Sphere from '../../atoms/Sphere';
import TooltipObject from '../../molecules/TooltipObject';

const TrafficLight = (props) => {
    const [sync, setSync] = useState(props.fps === props.frameRate);
    const frameRate = useState(500 - props.frameRate);
    const [active, setActive] = useState(false);
    const [hovered, setHover] = useState(false);
    const [tooltipOpened, setTooltipOpened] = useState(false);

    useEffect(() => {
        if (!tooltipOpened && hovered) {
            props.action();
            setTooltipOpened(!tooltipOpened);
        }
    }, [hovered]);

    useEffect(() => {
        setSync(props.fps === props.frameRate);
        const timeout = setTimeout(() => {
            if (!sync) {
                setActive(!active);
            }
        }, frameRate);

        return () => clearTimeout(timeout);
    }, [active, frameRate, props.fps, props.frameRate, sync]);

    return (
        <>
            <Box position={props.position} size={props.size} color='#000000' action={setHover} />{/* background */}
            <Sphere position={props.position} size={[props.size[0] / 2, 32, 32]} color='red' action={setHover} />{/* light */}
            {hovered &&
                <TooltipObject
                    position={[props.position[0] + 3, props.position[1] + 0.5, props.position[2]]}
                    size={[3, 1]}
                    fontSize={6}
                    text="O Semáforo indica quando a tela pode receber um novo frame"
                />}
        </>
    )
}

export default TrafficLight;
