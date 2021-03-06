import './style.css';

const Input = ({ width, type, action, value, name }) => {
    return (
        <input class="styledInput" type={type} onInput={action} value={value} name={name} style={{ width: width }} />
    );
}

export default Input;