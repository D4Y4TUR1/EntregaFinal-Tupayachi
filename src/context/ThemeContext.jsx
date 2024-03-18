import React,{useState ,createContext} from 'react'

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState(false)
    
    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode)
    }

    return (
        <ThemeContext.Provider value={{
            darkMode,
            toggleDarkMode 
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider