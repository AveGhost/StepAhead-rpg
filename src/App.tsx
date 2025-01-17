import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router';
import World from './pages/World';
import BattleArea from './pages/BattleArea';
import CharacterPage from './pages/CharacterPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' index element={<World/>}></Route>
          <Route path='battle' element={<BattleArea/>}></Route>
          <Route path='character' element={<CharacterPage/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
