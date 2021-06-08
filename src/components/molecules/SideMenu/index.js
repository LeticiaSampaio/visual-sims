import './style.css';

const SideMenu = ({ title, explanation, children, action }) => {

    return (<div className="sideMenu">
        <h2 className="title">{title}</h2>
        <p class="explanation">{explanation}</p>
        <button class="link" onClick={action}>veja o texto completo</button>
        <h2>Controles</h2>
        <div>
            {children}
        </div>
    </div>);
}

export default SideMenu;