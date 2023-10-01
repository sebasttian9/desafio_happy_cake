import './App.css'
import { Route, Routes } from 'react-router-dom'
import  Navigation  from './components/navegation/Navigation';
import Home from './components/Home/Home';
import Contacto from './components/Contacto/Contacto';
import Error_404 from './components/not_found/Error_404';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route
          path='/'
          element={<Home/>} 
        />
        <Route
          path='/contacto' 
          element={<Contacto />}
        />
        <Route
          path='*'
          element={<Error_404 />} 
        />
      </Routes>
    </>
  )
}

export default App
