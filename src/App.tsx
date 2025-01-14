import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router';
import World from './pages/World';
import Battle from './pages/Battle';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' index element={<World/>}></Route>
          <Route path='battle' element={<Battle/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
