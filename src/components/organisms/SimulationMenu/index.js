import React from 'react';
import ModalSimulation from "../../atoms/ModalSimulation";
import Button from '../../atoms/Button';
import Header from '../../atoms/Header';
import Modal from 'react-modal';

import { simulationOptions } from '../../../utils/constants/simulationOptions.js';

import './style.css';
import {
    BrowserRouter as Router,
    Link,
    useHistory,
} from "react-router-dom";

const SimulationMenu = () => {
    let history = useHistory();

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [cardIndex, setCardIndex] = React.useState();

    function redirectSimulation(simulation) {
        history.push(`/simulacao/${simulation}`);
    }

    function openModal(el) {
        console.log(el);
        // setImgSource(el.target.src);
        setCardIndex(el.target.name);
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Header title="Visual Sims" />

            <div className="card-container" id="cardContainer">
                <ModalSimulation title="V-Sync" value="vSync" onClick={openModal} />
                <ModalSimulation title="Simulação 2" value="Simulation2" onClick={openModal} />
                <ModalSimulation title="Simulação 3" value="Simulation3" onClick={openModal} />
                <ModalSimulation title="Simulação 4" value="Simulation4" onClick={openModal} />
                <ModalSimulation title="Simulação 5" value="Simulation5" onClick={openModal} />
                <ModalSimulation title="Simulação 6" value="Simulation6" onClick={openModal} />
            </div>

            <div className="footer">
                <Link to="/nova-simulacao" className="btn_criar">Criar nova simulação</Link>
            </div>

            {modalIsOpen && (
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className="modal"
                    overlayClassName="overlay"
                >
                    <div class="modal-header">
                        <Button action={closeModal} type="close" name="&times;" />
                    </div>
                    <div class="modal-content">
                        <img src={simulationOptions[cardIndex].img} alt="Imagem capa da simulação" />
                        <p>{simulationOptions[cardIndex].description}</p>
                    </div>
                    <Button name="Ir para simulação" type="primary" action={redirectSimulation(simulationOptions[cardIndex].path)} />
                </Modal>
            )}
        </div>
    );
}

export default SimulationMenu;