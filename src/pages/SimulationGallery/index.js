import React from 'react';
import { useHistory } from "react-router-dom";
import ModalSimulation from "../../components/atoms/ModalSimulation";
import Button from '../../components/atoms/Button';
import Header from '../../components/atoms/Header';
import Modal from 'react-modal';

import { simulationOptions } from '../../utils/constants/simulationOptions.js';

import './style.css';

const SimulationGallery = () => {
    let history = useHistory();

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [cardIndex, setCardIndex] = React.useState();

    function redirectSimulation(simulation) {
        history.push(`/simulacao/${simulation}`);
    }

    function openModal(el) {
        setCardIndex(el);
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="simulation-gallery">
            <Header title="Visual Sims" />

            <h2>Escolha um cartão para começar a explorar</h2>

            <div className="card-container" id="cardContainer">
                <ModalSimulation title="V-Sync" value="vSync" onClick={openModal} />
            </div>

            <div className="footer">
                <Button name="Criar nova simulação" type="primary" action={event => history.push("/nova-simulacao")} />
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
                    </div>
                    <div class="modal-content">
                        <img src={simulationOptions[cardIndex].img} alt="Imagem capa da simulação" height={250} />
                        <p>{simulationOptions[cardIndex].description}</p>
                    </div>
                    <Button name="Ir para simulação" type="primary" action={event => redirectSimulation(simulationOptions[cardIndex].path)} />
                </>)}
            </Modal>
        </div>
    );
}

export default SimulationGallery;