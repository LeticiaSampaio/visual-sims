import './style.css';
import React, { useEffect, useState } from 'react';
import { extend, Canvas } from '@react-three/fiber';
import { Text } from "troika-three-text";
import fonts from "./fonts";

import Box from '../../atoms/Box';
import Button from '../../atoms/Button';
import Header from '../../atoms/Header';
import CylinderFlow from '../../molecules/CylinderFlow';
import ComputerObject from '../../molecules/ComputerObject';
import MonitorScreen from '../../molecules/MonitorScreen';
import SideMenu from '../../molecules/SideMenu';

import { IoInformationCircleOutline } from 'react-icons/io5';
import ReactTooltip from "react-tooltip";
import TrafficLight from '../../molecules/TrafficLight';

import Modal from 'react-modal';
import { OrbitControls } from '@react-three/drei';
import Cylinder from '../../atoms/Cylinder';

extend({ Text });

const VSync = () => {
    const [fps, setFps] = useState(60);
    const [monitorHz, setMonitorHz] = useState(60);
    const [vSync, setVSync] = useState(false);
    const [tooltips, setTooltips] = useState(0);
    const [trafficLightStatus, setTrafficLightStatus] = useState(false);

    const [modalIsOpen, setIsOpen] = React.useState(true);

    function closeModal() {
        setIsOpen(false);
    }

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

    function addTooltip() {
        setTooltips(tooltips + 1);
    }

    function updateFrames(monitor, computer) {
        setMonitorHz(monitor);

        if (vSync) {
            setFps(monitor);
        } else {
            setFps(computer);
        }
    };

    function updateTrafficLight(status) {
        if (vSync) {
            setTrafficLightStatus(status);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            if (!vSync) {
                setTrafficLightStatus(false);
            }
        }, 10);
    }, [vSync, trafficLightStatus]);

    return (
        <div>
            <Header title="V-Sync - simulação" />
            <div class="content">
                <div class="canvasHolder">
                    <Canvas>
                        <ambientLight color="white" />
                        <pointLight position={[10, 10, 10]} />
                        {/* <OrbitControls /> */}
                        <text
                            text={`${tooltips}/3`}
                            position={[-4.5, 3, 0]}
                            {...opts}
                            font={fonts[opts.font]}
                            anchorX="center"
                            anchorY="middle">
                            {opts.materialType === "MeshPhongMaterial" ? (<meshPhongMaterial attach="material" color={opts.color} />) : null}
                        </text>

                        <CylinderFlow
                            rotation-z={Math.PI / 2}
                            position={[0, 0, 0]}
                            size={[0.1, 0.1, 2.4, 30]}
                            color='#1a9b1c'
                            speed={fps}
                            action={addTooltip}
                            signStatus={trafficLightStatus}
                        />

                        <ComputerObject
                            position={[-3, 0, 0]}
                            size={[1.5, 2.5, 0.5]}
                            color='#cccccc'
                            action={addTooltip}
                        />
                        <text
                            text={`${fps}fps`}
                            position={[-3, -2.5, 0]}
                            {...opts}
                            font={fonts[opts.font]}
                            anchorX="center"
                            anchorY="middle">
                            {opts.materialType === "MeshPhongMaterial" ? (<meshPhongMaterial attach="material" color={opts.color} />) : null}
                        </text>

                        <TrafficLight
                            position={[3.5, 2.5, 0]}
                            size={[0.8, 0.8, 0.5]}
                            action={addTooltip}
                            color={trafficLightStatus ? 'red' : 'green'}
                        />

                        <Cylinder
                            position={[3.5, 1.5, 0]}
                            size={[0.05, 0.05, 1, 30]}
                            color='#000'
                        />

                        <Box
                            position={[5.2, 0, 0]}
                            size={[0.1, 1.5, 0.26]}
                            color={trafficLightStatus ? 'red' : 'green'}
                        />

                        <MonitorScreen
                            vSync={vSync}
                            frameRate={monitorHz}
                            fps={fps}
                            position={[3.5, 1.2, 0]}
                            action={updateTrafficLight}
                        />
                        <text
                            text={`${monitorHz}Hz`}
                            position={[3.5, -2.5, 0]}
                            {...opts}
                            font={fonts[opts.font]}
                            anchorX="center"
                            anchorY="middle">
                            {opts.materialType === "MeshPhongMaterial" ? (<meshPhongMaterial attach="material" color={opts.color} />) : null}
                        </text>

                    </Canvas>
                </div>
                <SideMenu title="V-Sync" explanation="O V-Sync (Vertical Synchronization) é uma funcionalidade disponível em algumas placas de vídeo para sincronização de quadros do computador com a tela. Mas por que isso? Embora nossas tecnologias sejam versáteis podemos enfrentar problemas ao alinhar a quantidade de quadros enviadas pelo computador com a quantidade de quadros que a tela aceita. Essa diferença se torna um problema quando é possível ver uma quebra no quadro. Essa quebra ocorre porque a velocidade de renderização do quadro atual é diferente da velocidade em que os quadros estão chegando. Sendo a renderização ser feita de cima para baixo, enquanto um quadro está terminando de renderizar o próximo já inicia o processo, por isso acaba parecendo um corte na tela horizontalmente.">
                    <h3>Taxa de atualização</h3>
                    <div class="select-frequency">
                        <div class="title-and-tooltip">
                            <div>
                                <IoInformationCircleOutline data-tip data-for="screen_information" />
                                <ReactTooltip id="screen_information" place="top" effect="solid" delayHide={200}>
                                    <span class="tooltipText">Valores para exemplo</span>
                                </ReactTooltip>
                            </div>
                            <h4>Tela:</h4>
                        </div>
                        <div class="radio-list">
                            <label>
                                <input type="radio" name="screen" value="60"
                                    onChange={event => updateFrames(event.target.value, fps)}
                                />60Hz</label>
                            <label>
                                <input type="radio" name="screen" value="120"
                                    onChange={event => updateFrames(event.target.value, fps)}
                                />120Hz</label>
                            <label>
                                <input type="radio" name="screen" value="144"
                                    onChange={event => updateFrames(event.target.value, fps)}
                                />144Hz</label>
                        </div>
                    </div>
                    <div class="select-frequency">
                        <div class="title-and-tooltip">
                            <div>
                                <IoInformationCircleOutline data-tip data-for="computer_information" />
                                <ReactTooltip id="computer_information" place="top" effect="solid" delayHide={200}>
                                    <span class="tooltipText">Valores de exemplo</span>
                                </ReactTooltip>
                            </div>
                            <h4>Computador:</h4>
                        </div>
                        <div class="radio-list">
                            <label>
                                <input type="radio" name="computer" value="60"
                                    onChange={event => updateFrames(monitorHz, event.target.value)}
                                    disabled={vSync}
                                    checked={fps === "60"}
                                />60 fps</label>
                            <label>
                                <input type="radio" name="computer" value="120"
                                    onChange={event => updateFrames(monitorHz, event.target.value)}
                                    disabled={vSync}
                                    checked={fps === "120"}
                                />120 fps</label>
                            <label>
                                <input type="radio" name="computer" value="144"
                                    onChange={event => updateFrames(monitorHz, event.target.value)}
                                    disabled={vSync}
                                    checked={fps === "144"}
                                />144 fps</label>
                        </div>
                    </div>
                    <div class="btn-onoff">
                        <div class="title-and-tooltip">
                            <div>
                                <IoInformationCircleOutline data-tip data-for="vSync_information" />
                                <ReactTooltip id="vSync_information" place="top" effect="solid" delayHide={200}>
                                    <span class="tooltipText">Ligando o V-Sync o computador irá controlar o envio dos frames, liberando o próximo frame somente após a total renderização do anterior</span>
                                </ReactTooltip>
                            </div>
                            <h4>V-Sync:</h4>
                        </div>
                        <label class="switch">
                            <input
                                type="checkbox"
                                onChange={event => { setVSync(!vSync); updateFrames(monitorHz, monitorHz) }}
                            />
                            <span class="slider round"></span>
                        </label>
                    </div>
                </SideMenu>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modal"
                overlayClassName="overlay"
            >
                {modalIsOpen && (
                    <div class="modal-aviso">
                        <p>Esta simulação é apenas uma ilustração do conceito de V-Sync.</p>
                        <p>Ela está sendo reproduzida com uma velocidade menor que a real para podermos ver como as coisas acontecem.</p>
                        <p>Passe o mouse pelos objetos e descubra todas as informações extras!</p>
                        <Button name="Prosseguir" type="primary" action={event => closeModal()} />
                    </div>)}
            </Modal>
        </div>
    );
}

export default VSync;