import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <> 
      <NavBar />
      <Routes>
        <Route exact path='/'
          element={
            <ItemListContainer greeting={'Home'}/>
          } 
        />
        <Route
          path='/category/:categoryId'
          element = {
            <ItemListContainer/>
          }
        
        />
        <Route exact path='/item/:itemId'element={
            <ItemDetailContainer />
          }         
        />
      </Routes>
    </>
  );
}

// Routes envuelve a todas las rutas
// Route derivadas para home, filtro por category, y detail del producto.

// la muestra del listado de cards, y de la seleccion de categoría sucede sobre el mismo componente. Al ir hacia la categoría, el componente se filtra en base a la seleccion.


export default App;

