import './style.css';
import React, { useState } from 'react';
import { extend, Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Text } from "troika-three-text";
import fonts from "./fonts";

import Box from '../../atoms/Box';
import Header from '../../atoms/Header';
import CylinderFlow from '../../molecules/CylinderFlow';
import MonitorScreen from '../../molecules/MonitorScreen';
import SideMenu from '../../molecules/SideMenu';

extend({ Text });

const VSync = () => {
    const [fps, setFps] = useState(0);
    const [monitorHz, setMonitorHz] = useState(0);
    const [vSync, setVSync] = useState(false);

    const opts = {
        font: "Roboto",
        fontSize: 12,
        color: "#6593A6",
        maxWidth: 10,
        lineHeight: 1,
        scale: 0.05,
        letterSpacing: 0,
        textAlign: "justify",
        materialType: "MeshPhongMaterial"
    };

    function updateFrames(monitor, computer) {
        setFps(computer);
        setMonitorHz(monitor);
    };

    return (
        <div>
            <Header title="V-Sync - simulação" />
            <div class="content">
                <div class="canvasHolder">
                    <Canvas>
                        {/* <OrbitControls /> */}
                        <ambientLight color="white" />
                        <pointLight position={[10, 10, 10]} />
                        <CylinderFlow rotation-z={Math.PI / 2} position={[0, 0, 0]} size={[0.1, 0.1, 2.5, 30]} color='#1a9b1c' speed={fps} />

                        <text text={"CPU"} position={[-3, 2.5, 0]} {...opts} font={fonts[opts.font]} anchorX="center" anchorY="middle">
                            {opts.materialType === "MeshPhongMaterial" ? (<meshPhongMaterial attach="material" color={opts.color} />) : null}
                        </text>
                        <Box position={[-3, 0, 0]} size={[1.5, 2.5, 0.5]} color='#a8a010' />
                        <text text={`${fps}Hz`} position={[-3, -2.5, 0]} {...opts} font={fonts[opts.font]} anchorX="center" anchorY="middle">
                            {opts.materialType === "MeshPhongMaterial" ? (<meshPhongMaterial attach="material" color={opts.color} />) : null}
                        </text>

                        <text text={"Tela"} position={[3, 2.5, 0]} {...opts} font={fonts[opts.font]} anchorX="center" anchorY="middle">
                            {opts.materialType === "MeshPhongMaterial" ? (<meshPhongMaterial attach="material" color={opts.color} />) : null}
                        </text>
                        <MonitorScreen vSync={vSync} frameRate={monitorHz} fps={fps} />
                        <text text={`${monitorHz}Hz`} position={[3, -2.5, 0]} {...opts} font={fonts[opts.font]} anchorX="center" anchorY="middle">
                            {opts.materialType === "MeshPhongMaterial" ? (<meshPhongMaterial attach="material" color={opts.color} />) : null}
                        </text>

                    </Canvas>
                </div>
                <SideMenu title="V-Sync" explanation="O V-Sync (Vertical Synchronization) é uma funcionalidade disponível em algumas placas de vídeo para sincronização de quadros do computador com a tela. Mas por que isso? Embora nossas tecnologias sejam versatéis podemos enfrentar problemas ao alinhar a quantidade de quadros enviadas pelo computador com a quantidade de quadros que a tela aceita. Quando essa diferença se torna visivel é possível ver uma quebra no quadro. Normalmente se torna visível uma parte do quadro que não foi totalmente atualizado ainda, parecendo um corte na tela.">
                    <h3>Taxa de atulaização</h3>
                    <div class="select-frequency">
                        <h4>Tela:</h4>
                        <div class="radio-list">
                            <label><input type="radio" name="screen" value="60" onChange={event => updateFrames(event.target.value, fps)} />60Hz</label>
                            <label><input type="radio" name="screen" value="70" onChange={event => updateFrames(event.target.value, fps)} />70Hz</label>
                            <label><input type="radio" name="screen" value="80" onChange={event => updateFrames(event.target.value, fps)} />80Hz</label>
                        </div>
                    </div>
                    <div class="select-frequency">
                        <h4>Computador:</h4>
                        <div class="radio-list">
                            <label><input type="radio" name="computer" value="60" onChange={event => updateFrames(monitorHz, event.target.value)} />60Hz</label>
                            <label><input type="radio" name="computer" value="70" onChange={event => updateFrames(monitorHz, event.target.value)} />70Hz</label>
                            <label><input type="radio" name="computer" value="80" onChange={event => updateFrames(monitorHz, event.target.value)} />80Hz</label>
                        </div>
                    </div>
                    <div class="btn-onoff">
                        <h4>V-Sync:</h4>
                        <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                        </label>
                    </div>
                </SideMenu>
            </div>
        </div>
    );
}

export default VSync;