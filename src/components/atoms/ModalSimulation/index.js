import './style.css';

import { simulationOptions } from '../../../utils/constants/simulationOptions.js';

const ModalSimulation = ({ title, onClick, value }) => {
    return (
        <div className="card_sim" onClick={event => onClick(value)}>
            <img src={simulationOptions[value].img} alt="Imagem representativa da simulação" />
            <h3>{title}</h3>
        </div>
    );
}

export default ModalSimulation;