import { useState, useEffect } from 'react'
import Enemy from '../components/enemies/enemy'
import { characterMove } from '../models/movement'
import { enemies } from '../api/enemies.ts'
import PlayerInfo from '../components/player/player-info'
const World = () => {
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

    const limitedEnemies = enemies.slice(0, spawnedEnemiesCount)

    return (
        <div className='map relative bg-[url(/map.webp)] min-h-[100vh] bg-center bg-cover bg-no-repeat bg-fixed'>
            <PlayerInfo player={{id: '1', name: 'AveGhost', avatar: 'avatar.png', gold: 0, lvl: 1, exp: 0, requiredExp: 100}} />
            <img src='./character.png' width={'120px'} style={{bottom: `${step}%`}} className="fixed right-[23%]" />
            {limitedEnemies.map((enemy) => (
                <Enemy key={enemy.id} enemies={enemy} />
            ))}
        </div>
    )
}

export default World