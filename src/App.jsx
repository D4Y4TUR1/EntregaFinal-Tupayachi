import './App.css'
import NavBar from './components/NavBar/NavBar'
import Contenedor from './components/Contenedor/Contenedor'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {

  const productos = [
    {
      "producto": "Guantes",
      "precio": "20",
      "stock": "10"
    },

    {
      "producto": "Straps",
      "precio": "25",
      "stock": "12"
    },

    {
      "producto": "Cinturones",
      "precio": "40",
      "stock": "5"
    },

    {
      "producto": "Toalla",
      "precio": "6",
      "stock": "20"  
    }
  ]

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Bienvenidos a mi E-commerce"}/>

    </>
  )
}

export default App
