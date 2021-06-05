import './style.css';
import {
  useHistory
} from "react-router-dom";

import Button from '../Button';

const IntroductionCard = () => {
  let history = useHistory();

  function toSimulationsMenu() {
    history.push("/simulacoes");
  }

  return (
    <div className="body">
      <p>Bem vindo ao Visual Sims, este site tem como objetivo te ajudar a visualizar conceitos ensinados em sala de aula de uma forma mais prática. Por meio de simulações utilizando conceitos de Computação Gráfica você poderá aprender de forma mais fácil e divertida!</p>
      <Button action={toSimulationsMenu} name="Explorar" />
    </div>
  );
}

export default IntroductionCard;