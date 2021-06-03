import './style.css';

const SideMenu = ({ title, explanation, children }) => {

    return (<div className="sideMenu">
        <h2 className="title">{title}</h2>
        <p class="explanation">{explanation}</p>
        <h2>Controles</h2>
        <div>
            {children}
        </div>
    </div>);
}

export default SideMenu;