import React,{useContext} from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const DarkComponent = () => {

    const {darkMode, toggleDarkMode} = useContext(ThemeContext)
    
    return (
        <div>
            <button onClick={toggleDarkMode}> ¡Cambiar a Modo Oscuro! </button>
        </div>
    )
}

export default DarkComponent