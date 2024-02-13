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
                        <a href="#">INICIO</a>
                    </li>
                    <li>
                        <a href="#">SUPLEMENTOS</a>
                    </li>
                    <li>
                        <a href="#">ACCESORIOS</a>
                    </li>
                    <li>
                        <a href="#">ROPA DEPORTIVA</a>
                    </li>
                    <li>
                        <a href="#">CONTACTO</a>
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