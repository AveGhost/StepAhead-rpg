import { useEffect, useContext } from 'react'
import Enemy from '../components/enemies/enemy'
import { characterMove } from '../models/movement'
import PlayerInfo from '../components/player/player-info'
import { playerInfoContext } from '../context/player-info.context.tsx'
import { Enemy as EnemyType } from '../models/characters.tsx'
import { Link, useNavigate } from 'react-router'
import { RandomSpawnMonstersContext } from '../context/random-spawn-monsters.context.tsx'
import { StepsContext } from '../context/steps-context.tsx'
import { nanoid } from 'nanoid'
import { Icon } from '@iconify/react/dist/iconify.js'

const World = () => {
    const { steps, setSteps } = useContext(StepsContext)!
    const { randomSpawnMonsters, setRandomSpawnMonsters, spawn } = useContext(RandomSpawnMonstersContext)!
    const { playerInfo } = useContext(playerInfoContext)!
    const navigate = useNavigate()

    characterMove({ steps, setSteps })

    useEffect(() => {
    if(steps >= 90) {
        setSteps(0)
        setRandomSpawnMonsters([])
    }
    spawn()
    },[steps])

    const choosenEnemy = (e: EnemyType): void => {
        navigate('/battle', {state: {monster: e}})
    }

    return (
        <div className='map relative bg-[url(/map.webp)] min-h-[100vh] bg-center bg-cover bg-no-repeat bg-fixed'>
            <PlayerInfo player={{id: nanoid(), name: 'AveGhost', avatar: 'avatar.png', gold: playerInfo?.gold, lvl: playerInfo?.lvl, exp: playerInfo?.exp, requiredExp: playerInfo?.requiredExp}} >
                <Link to='/character' className='border-2 p-2 flex justify-center items-center w-12 h-12 border-white'>
                    <Icon icon="pixelarticons:human-height" width="40" height="40" />
                </Link>
                <Link to='/inventory' className='border-2 flex justify-center items-center w-12 h-12 p-2 border-white'>
                    <Icon icon="pixelarticons:archive" width="40" height="40"  style={{color: '#fff'}} />
                </Link>
                <span className='border-2 flex justify-center items-center w-12 h-12 p-2 border-white'>
                    <Icon icon="pixelarticons:cart" width="40" height="40" />
                </span>
            </PlayerInfo>
            <img src='./character.png' width={'120px'} style={{bottom: `${steps}%`}} className="fixed right-[23%]" />
            {randomSpawnMonsters.map((enemy) => (
                <Enemy key={enemy.id} enemies={enemy} onClick={() => choosenEnemy(enemy)} />
            ))}
        </div>
    )
}

export default World