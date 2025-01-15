import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router';
import World from './pages/World';
import BattleArea from './pages/BattleArea';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' index element={<World/>}></Route>
          <Route path='battle' element={<BattleArea/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
