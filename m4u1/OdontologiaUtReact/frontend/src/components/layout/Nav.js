import { Link } from "react-router-dom";

const Nav = (props) => {
    return (

        <nav>
            <div>

                <ul>

                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link> </li>
                    <li><Link to="/novedades">Servicios</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>

                </ul>
            </div>
        </nav>


    );
}

export default Nav;