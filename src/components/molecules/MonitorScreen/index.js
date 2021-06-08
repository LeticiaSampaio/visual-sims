import React, { useState, useEffect } from 'react';

import Box from '../../atoms/Box';
import TexturedBox from '../../atoms/TexturedBox';

import img0 from '../../../images/v-sync/new_example/new_example_screen_0.png'
import img1 from '../../../images/v-sync/new_example/new_example_screen_1.png'
import img2 from '../../../images/v-sync/new_example/new_example_screen_2.png'
import img3 from '../../../images/v-sync/new_example/new_example_screen_3.png'
import img4 from '../../../images/v-sync/new_example/new_example_screen_4.png'

import imgZoom0 from '../../../images/v-sync/new_example_zoom/new_example_screen_zoom_0.png'
import imgZoom1 from '../../../images/v-sync/new_example_zoom/new_example_screen_zoom_1.png'
import imgZoom2 from '../../../images/v-sync/new_example_zoom/new_example_screen_zoom_2.png'
import imgZoom3 from '../../../images/v-sync/new_example_zoom/new_example_screen_zoom_3.png'
import imgZoom4 from '../../../images/v-sync/new_example_zoom/new_example_screen_zoom_4.png'

const MonitorScreen = (props) => {
    const [frameSteps, setFrameSteps] = useState(0);
    const delay = (600 - (props.frameRate * 3));
    const [first, setFirst] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setFrameSteps(frameSteps + 1);

            if (frameSteps === 4) {
                setFrameSteps(-1);
                setFirst(!first);
                if (props.vSync) {
                    props.action(false);
                }
            } else {
                if (props.vSync) {
                    props.action(true);
                }
            }
        }, delay);
    }, [first, frameSteps, delay, props]);

    return (
        <>
            <Box position={[3.5, 1.2, 0]} size={[2.1, 0.1, 0.25]} color='#000000' />{/* screen top */}
            <Box position={[3.5, -1.2, 0]} size={[2.1, 0.1, 0.25]} color='#000000' />{/* screen bottom */}
            <Box position={[1.95, 0, 0]} size={[0.1, 1.7, 0.25]} color='#000000' />{/* screen left */}
            <Box position={[5.05, 0, 0]} size={[0.45, 1.7, 0.25]} color='#000000' />{/* screen right */}
            <Box position={[3.5, -1.5, 0]} size={[0.4, 0.4, 0.25]} color='#000000' />{/* stand */}
            <Box position={[3.5, -1.8, 0]} size={[1, 0.1, 0.25]} color='#000000' />{/* stand base */}

            <TexturedBox position={[3.5, 0.9, 0]} size={[2, 0.3, 0.25]} color='#F2CF63'
                image={[img0, img0, imgZoom0]}
                show={frameSteps >= 0}
                first={first}
            />
            <TexturedBox position={[3.5, 0.45, 0]} size={[2, 0.3, 0.25]} color='#F2CF63'
                image={[img1, img1, imgZoom1]}
                show={frameSteps >= 1}
                first={first}
            />
            <TexturedBox position={[3.5, 0, 0]} size={[2, 0.3, 0.25]} color='#F2CF63'
                image={[img2, img2, imgZoom2]}
                show={frameSteps >= 2}
                first={first}
            />
            <TexturedBox position={[3.5, -0.45, 0]} size={[2, 0.3, 0.25]} color='#F2CF63'
                image={[img3, img3, imgZoom3]}
                show={frameSteps >= 3}
                first={first}
            />
            <TexturedBox position={[3.5, -0.9, 0]} size={[2, 0.3, 0.25]} color='#F2CF63'
                image={[img4, img4, imgZoom4]}
                show={frameSteps >= 4}
                first={first}
            />
        </>
    )
}

export default MonitorScreen;
