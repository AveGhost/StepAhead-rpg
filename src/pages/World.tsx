import { useState, useEffect, useContext } from 'react'
import Enemy from '../components/enemies/enemy'
import { characterMove } from '../models/movement'
import { enemies } from '../api/enemies.ts'
import PlayerInfo from '../components/player/player-info'
import { playerInfoContext } from '../context/player-info.context.tsx'
import { Enemy as EnemyType } from '../models/characters.tsx'
import { useNavigate } from 'react-router'
import { RandomSpawnMonstersContext } from '../context/random-spawn-monsters.context.tsx'

const World = () => {
    const [step, setStep] = useState(0);
    const { randomSpawnMonsters } = useContext(RandomSpawnMonstersContext)!
    const { playerInfo } = useContext(playerInfoContext)!
    const navigate = useNavigate()

    characterMove({ step, setStep })

    useEffect(() => {
    if(step >= 90) {
        setStep(0)
    }
    },[step])

    const choosenEnemy = (e: EnemyType): void => {
        navigate('/battle', {state: {monster: e}})
    }

    return (
        <div className='map relative bg-[url(/map.webp)] min-h-[100vh] bg-center bg-cover bg-no-repeat bg-fixed'>
            <PlayerInfo player={{id: '1', name: 'AveGhost', avatar: 'avatar.png', gold: playerInfo?.gold, lvl: playerInfo?.lvl, exp: playerInfo?.exp, requiredExp: playerInfo?.requiredExp}} />
            <img src='./character.png' width={'120px'} style={{bottom: `${step}%`}} className="fixed right-[23%]" />
            {randomSpawnMonsters.map((enemy) => (
                <Enemy key={enemy.id} enemies={enemy} onClick={() => choosenEnemy(enemy)} />
            ))}
        </div>
    )
}

export default World