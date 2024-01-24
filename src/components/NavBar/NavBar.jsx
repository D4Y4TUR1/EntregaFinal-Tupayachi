import React from 'react';
import CardWidget from '../CardWidget/CardWidget';
import "./navBar.css"

const NavBar = () => {
    
    return(

        <div className='navBar'>
        <section>
            <div>
                <img className='logoXW' src="./Logo.png" alt="Logo de Gimnasio" />
            </div>
        </section>

        <section>    
            <nav>
                <ul>
                    <li>
                        <a href="">INICIO</a>
                    </li>
                    <li>
                        <a href="">PLANES</a>
                    </li>
                    <li>
                        <a href="">PRODUCTOS</a>
                    </li>
                    <li>
                        <a href="">HORARIOS</a>
                    </li>
                    <li>
                        <a href="">CONTACTO</a>
                    </li>
                </ul>
            </nav>
        </section>
            <CardWidget/>
        <section>

        </section>
            

        </div>

    )
}

export default NavBar;