import { useState, useEffect } from 'react'
import './App.css'
import Enemy from './components/enemy';
import { characterMove } from './models/movement';
import { enemies } from './api/enemies';
import PlayerInfo from './components/Player/Player-info';

const enemy: Enemy[] = enemies

function App() {
  const [step, setStep] = useState(0);
  const [spawnedEnemiesCount, setSpawnedEnemiesCount] = useState(0);

  const spawnRandomNumOfEnemy = () => {
    const randomNum = Math.floor(Math.random() * 5) + 1;
    setSpawnedEnemiesCount(randomNum)
  }

  characterMove({ step, setStep })

  useEffect(() => {
    if(step >= 90) {
      setStep(0)
    }
    spawnRandomNumOfEnemy()
  },[step])

  const limitedEnemies = enemy.slice(0, spawnedEnemiesCount)

  return (
    <div className='map relative bg-[url(/map.webp)] min-h-[100vh] bg-center bg-cover bg-no-repeat bg-fixed'>
      <PlayerInfo />
      <img src='./character.png' width={'120px'} style={{bottom: `${step}%`}} className="fixed right-[23%]" />
      <Enemy enemies={limitedEnemies} />
    </div>
  )
}

export default App
