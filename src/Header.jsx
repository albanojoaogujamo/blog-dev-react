import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <h1>Blog Dev</h1>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/Sobre">Sobre</Link>
            </nav>
        </header>
    )
}

export default Header