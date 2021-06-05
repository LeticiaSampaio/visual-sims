import React, { useState, useEffect } from 'react';

import TexturedBox from '../../atoms/TexturedBox';
import TooltipObject from '../TooltipObject';

import imgComputer from '../../../images/v-sync/computer_cover.png';
import imgComputerSides from '../../../images/v-sync/computer_sides.png';

const ComputerObject = (props) => {
    const [hovered, setHover] = useState(false);
    const [tooltipOpened, setTooltipOpened] = useState(false);

    useEffect(() => {
        if (!tooltipOpened && hovered) {
            props.action();
            setTooltipOpened(!tooltipOpened);
        }
    }, [hovered]);

    return (
        <>
            <TexturedBox
                position={props.position}
                size={props.size}
                color={props.color}
                image={[imgComputer, imgComputerSides, imgComputer]}
                action={setHover}
                show={true}
            />

            {hovered &&
                <TooltipObject
                    position={[props.position[0], props.position[1] - 0.5, props.size[2] - 0.1]}
                    size={[1.3, 1.5]}
                    fontSize={5}

                    text="O computador pode apresentar uma taxa de frames máxima inferior ao da tela"
                />}
        </>
    )
}

export default ComputerObject;
