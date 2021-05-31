import './style.css';

import { simulationOptions } from '../../../utils/constants/simulationOptions.js';

const ModalSimulation = ({ title, onClick, value }) => {
    return (
        <div className="card_sim" onClick={onClick} name={value}>
            <img src={simulationOptions[value].img} alt="Imagem representativa da simulação" name={value}></img>
            <p name={value}>{title}</p>
        </div>
    );
}

export default ModalSimulation;