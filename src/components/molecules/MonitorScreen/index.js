import React, { useState, useEffect } from 'react';

import Box from '../../atoms/Box';
import TexturedBox from '../../atoms/TexturedBox';

import imgTop from '../../../images/v-sync/example_screen_top.png'
import imgTopIn from '../../../images/v-sync/example_screen_top_zoom_in.png'
import imgMiddle from '../../../images/v-sync/example_screen_middle.png'
import imgBottom from '../../../images/v-sync/example_screen_bottom.png'
import imgBottomIn from '../../../images/v-sync/example_screen_bottom_zoom_in.png'

const MonitorScreen = (props) => {
    const [sync, setSync] = useState(props.fps === props.frameRate);
    const [frameRate, setFrameRate] = useState(500 - props.frameRate);
    const [active, setActive] = useState(false);

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
            <Box position={[3, 1.2, 0]} size={[2.2, 0.2, 0.25]} color='#000000' />{/* screen top */}
            <Box position={[3, -1.2, 0]} size={[2.2, 0.2, 0.25]} color='#000000' />{/* screen bottom */}
            <Box position={[1.5, 0, 0]} size={[0.2, 1.6, 0.25]} color='#000000' />{/* screen left */}
            <Box position={[4.5, 0, 0]} size={[0.2, 1.6, 0.25]} color='#000000' />{/* screen right */}
            <Box position={[3, -1.5, 0]} size={[0.4, 0.4, 0.25]} color='#000000' />{/* stand */}
            <Box position={[3, -1.8, 0]} size={[1, 0.1, 0.25]} color='#000000' />{/* stand base */}

            <TexturedBox position={[3, 0.75, 0]} size={[2, 0.5, 0.25]} color='#F2CF63'
                image={[imgTop, imgTop, imgTopIn]}
                scale={-0.1}
                active={active}
                sync={sync}
            />
            <TexturedBox position={[3, 0, 0]} size={[2, 0.5, 0.25]} color='#F2CF63'
                image={[imgMiddle, imgMiddle, imgMiddle]}
            />
            <TexturedBox position={[3, -0.75, 0]} size={[2, 0.5, 0.25]} color='#F2CF63'
                image={[imgBottom, imgBottom, imgBottomIn]}
                scale={0.1}
                active={active}
                sync={sync}
            />
        </>
    )
}

export default MonitorScreen;
