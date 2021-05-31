import './style.css';

const Button = ({ name, type, action }) => {
    return (
        <button className={type} onClick={action}>
            {name}
        </button>
    );
}

export default Button;