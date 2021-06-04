import './style.css';
import React, { useState } from 'react';
import uuid from "short-uuid";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import fonts from "./fonts";

import Box from '../../atoms/Box';
import Button from '../../atoms/Button';
import Header from '../../atoms/Header';
import Input from '../../atoms/Input';

import Modal from 'react-modal';
import AddButton from '../../atoms/CreateObjects/AddButton';
import NewBox from '../../atoms/CreateObjects/NewBox';
import NewCylinder from '../../atoms/CreateObjects/NewCylinder';
import NewSphere from '../../atoms/CreateObjects/NewSphere';

const NewSimulation = () => {
    const [header, setheader] = useState(<></>);
    const [message, setMessage] = useState(<><p>Nesta página você  pode criar uma nova simulação</p>
        <p>Adicione novos objetos livremente :)</p>
        <Button name="Prosseguir" type="primary" action={event => closeModal()} /></>);
    const [items, addItem] = useState([]);
    const [boxList, setBoxList] = useState([]);
    const [position, setPosition] = useState([0, 0, 0]);
    const [size, setSize] = useState([0, 0, 0]);
    const [modalIsOpen, setIsOpen] = useState(true);

    // const boxHandleClick = useCallback(e => { addItem(items => [...items, uuid.generate()]); setBoxList([position, size]); closeModal() }, [])

    const opts = {
        font: "Roboto",
        fontSize: 6,
        color: "#000",
        maxWidth: 30,
        lineHeight: 1,
        scale: 0.05,
        letterSpacing: 0,
        textAlign: "justify",
        materialType: "MeshPhongMaterial"
    };

    function closeModal() {
        setIsOpen(false);
        console.log(position);
    }

    function boxHandleClick() {
        addItem(items => [...items, uuid.generate()]);
        setBoxList(boxList => [...boxList, [position, size]]);
        closeModal();
    }

    function addBox() {
        setheader(<h2>Cubo</h2>);
        setMessage(<>
            <div class="object-menu">
                <div class="xyz-options">
                    <h3>Posição:</h3>
                    <label>x: <Input type="number" name="pos_x" width={40} value={position[0]} action={event => setPosition([event.target.value, position[1], position[2]])} /></label>
                    <label>y: <Input type="number" name="pos_y" width={40} value={position[1]} action={event => setPosition([position[0], event.target.value, position[2]])} /></label>
                    <label>z: <Input type="number" name="pos_z" width={40} value={position[2]} action={event => setPosition([position[0], position[1], event.target.value])} /></label>
                </div>
                <div class="xyz-options">
                    <h3>Dimensões:</h3>
                    <label>x: <Input type="number" name="size_x" width={40} action={event => setSize([event.target.value, size[1], size[2]])} /></label>
                    <label>y: <Input type="number" name="size_y" width={40} action={event => setSize([size[0], event.target.value, size[2]])} /></label>
                    <label>z: <Input type="number" name="size_z" width={40} action={event => setSize([size[0], size[1], event.target.value])} /></label>
                </div>
            </div>
            <Button name="Posicionar" type="primary" action={event => boxHandleClick()} />
        </>);
        setIsOpen(true);
    }

    function addCylinder() {
        setheader(<h2>Cilindro</h2>);
        setMessage(<>
            <div class="object-menu">
                <div class="xyz-options">
                    <h3>Posição:</h3>
                    <label>x: <Input type="number" name="pos_x" width={40} /></label>
                    <label>y: <Input type="number" name="pos_y" width={40} /></label>
                    <label>z: <Input type="number" name="pos_z" width={40} /></label>
                </div>
                <div class="xyz-options">
                    <h3>Medidas:</h3>
                    <label>comprimento: <Input type="number" name="size_x" width={40} /></label>
                    <label>raio: <Input type="number" name="size_y" width={40} /></label>
                </div>
            </div>
            <Button name="Posicionar" type="primary" action={event => closeModal()} />
        </>);
        setIsOpen(true);
    }

    function addSphere() {
        setheader(<h2>Esfera</h2>);
        setMessage(<>
            <div class="object-menu">
                <div class="xyz-options">
                    <h3>Posição:</h3>
                    <label>x: <Input type="number" name="pos_x" width={40} /></label>
                    <label>y: <Input type="number" name="pos_y" width={40} /></label>
                    <label>z: <Input type="number" name="pos_z" width={40} /></label>
                </div>
                <div class="xyz-options">
                    <h3>Medidas:</h3>
                    <label>raio: <Input type="number" name="size_x" width={40} /></label>
                </div>
            </div>
            <Button name="Posicionar" type="primary" action={event => closeModal()} />
        </>);
        setIsOpen(true);
    }

    return (
        <div>
            <Header title="V-Sync - simulação" />
            <div class="content">
                <div class="left-canvas">
                    <Canvas>
                        <OrbitControls
                            enableZoom={false}
                            enableRotate={false}
                        />

                        <ambientLight color="white" />
                        <pointLight position={[10, 10, 10]} />

                        <text
                            text={`Cubo`}
                            position={[-0.5, 2.8, 0]}
                            {...opts}
                            font={fonts[opts.font]}
                            anchorX="center"
                            anchorY="middle">
                            {opts.materialType === "MeshPhongMaterial" ? (<meshPhongMaterial attach="material" color={opts.color} />) : null}
                        </text>
                        <NewBox position={[-0.5, 2, 0]} size={[0.8, 0.8, 0.5]} color='red' />
                        <AddButton position={[1, 2, 0]} color='red' action={addBox} />

                        <text
                            text={`Cilindro`}
                            position={[-0.5, 0.5, 0]}
                            {...opts}
                            font={fonts[opts.font]}
                            anchorX="center"
                            anchorY="middle">
                            {opts.materialType === "MeshPhongMaterial" ? (<meshPhongMaterial attach="material" color={opts.color} />) : null}
                        </text>
                        <NewCylinder rotation-z={Math.PI / 2} position={[-0.5, 0, 0]} size={[0.1, 0.1, 1, 30]} color='blue' />
                        <AddButton position={[1, 0, 0]} color='blue' action={addCylinder} />

                        <text
                            text={`Esfera`}
                            position={[-0.5, -1.2, 0]}
                            {...opts}
                            font={fonts[opts.font]}
                            anchorX="center"
                            anchorY="middle">
                            {opts.materialType === "MeshPhongMaterial" ? (<meshPhongMaterial attach="material" color={opts.color} />) : null}
                        </text>
                        <NewSphere position={[-0.5, -2, 0]} size={[0.5, 32, 32]} color='yellow' />
                        <AddButton position={[1, -2, 0]} color='yellow' action={addSphere} />
                    </Canvas>
                </div>
                <div class="right-canvas">
                    <Canvas>
                        <OrbitControls />
                        <axisHelper />
                        <ambientLight color="white" />
                        <pointLight position={[10, 10, 10]} />

                        <NewBox position={[0, 0, 0]} size={[0.8, 0.8, 0.5]} color='blue' />

                        {items.map((key, index) => (
                            <Box key={key} position={boxList[index].position} size={boxList[index].size} color="red" />
                        ))}
                    </Canvas>
                </div>
                <div class="left-menu">
                    <h3>Objetos disponíveis</h3>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modal"
                overlayClassName="overlay"
            >
                {modalIsOpen && (<>
                    <div class="modal-header">
                        <Button action={closeModal} type="close" name="&times;" />
                        {header}
                    </div>
                    <div class="modal-aviso">
                        {message}
                    </div>
                </>)}
            </Modal>
        </div>
    );
}

export default NewSimulation;