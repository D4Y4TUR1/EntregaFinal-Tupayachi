import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
function App() {

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Bienvenidos a mi E-commerce"}/>
    <ItemDetailContainer id={1}/>

    </>
  )
}

export default App
