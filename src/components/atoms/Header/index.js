import './style.css';

import Button from '../Button';
import {
    useHistory,
} from "react-router-dom";

const Header = ({ title }) => {
    let history = useHistory();

    function redirectHome() {
        history.goBack();
    }

    return (<div className="header">
        <h2 className="title">{title}</h2>
        <Button action={redirectHome} type="goBack" name="Voltar" />
    </div>);
}

export default Header;