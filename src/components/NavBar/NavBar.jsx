import React from 'react';
import CardWidget from '../CardWidget/CardWidget';
import "./navBar.css"
import { Link, NavLink } from 'react-router-dom';
const NavBar = () => {
    
    return(

        <div className='navBar'>
            <section>
                <div>
                    <Link to={'/'}>
                    <img className='logoXW' src="/Logo.png" alt="Logo de Gimnasio" />
                    </Link>
                </div>
            </section>

            <section>    
                <nav>
                    <ul>
                        <li>
                            <NavLink to={'/'}>Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to={'categoria/Suplementos'}>Suplementos</NavLink>
                        </li>
                        <li>
                            <NavLink to={'categoria/Accesorios'}>Accesorios</NavLink>
                        </li>
                        <li>
                            <NavLink to={'categoria/Ropa'}>Ropa</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/Contacto'}>Contacto</NavLink>
                        </li>
                    </ul>
                </nav>
            </section>
            <CardWidget/>            
        </div>

    )
}

export default NavBar;