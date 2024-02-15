import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Error from './components/Error/Error'

function App() {

  return (
    <>
    <BrowserRouter>
      
      <NavBar/>
      <Routes>

        <Route path='/' element={ <ItemListContainer greeting={"Bienvenid@s a mi E-commerce"}/>}/>
        <Route path='/categoria/:categoriaId' element={ <ItemListContainer />}/>
        <Route path='/detalle/:id' element={ <ItemDetailContainer />}/>
        <Route path='*' element={<Error/>} />

      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
