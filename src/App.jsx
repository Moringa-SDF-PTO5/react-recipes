import './App.css';
import Home from './screens/Home';
import Recipe from './screens/Recipe';
import { BrowserRouter, MemoryRouter, HashRouter,  Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/recipe/:strId' element={<Recipe/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
