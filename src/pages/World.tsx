import { useEffect, useContext, useState } from 'react'
import Enemy from '../components/enemies/enemy'
import { useCharacterMove } from '../models/movement.tsx'
import PlayerInfo from '../components/player/player-info'
import { playerInfoContext } from '../context/player-info.context.tsx'
import { Enemy as EnemyType } from '../models/characters.tsx'
import { Link, useNavigate } from 'react-router'
import { RandomSpawnMonstersContext } from '../context/random-spawn-monsters.context.tsx'
import { StepsContext } from '../context/steps-context.tsx'
import { nanoid } from 'nanoid'
import { Icon } from '@iconify/react/dist/iconify.js'
import RewardsModal from '../components/rewards/rewards-modal.tsx'
import Notification from '../components/notification/notification.tsx'
import { NotificationContext } from '../context/notification.context.tsx'
import { InventoryContext } from '../context/inventory.context.tsx'

const World = () => {
    const { steps, setSteps } = useContext(StepsContext)!
    const { randomSpawnMonsters, spawn } = useContext(RandomSpawnMonstersContext)!
    const { isLvlUp, isNewItem, setIsLvlUp } = useContext(NotificationContext)!
    const { playerInfo } = useContext(playerInfoContext)!
    const {slots} = useContext(InventoryContext)!
    const [showRewards, setShowRewards] = useState(false)
    const [selectedEnemy, setSelectedEnemy] = useState<EnemyType | undefined>(undefined)
    const navigate = useNavigate()


    const threshold = 1.5;
    const debounceTime = 800;

    useCharacterMove({ setSteps,  threshold, debounceTime })
    
    useEffect(() => {
        if(steps >= 80) setSteps(0)
        spawn(playerInfo.lvl!, steps)
    },[steps])

    useEffect(() => {
        if(playerInfo.skillPoints! > 0) {
            setIsLvlUp(true)
        }
    }, [])

    const justForTest = () => {
        setSteps(steps + 3)
    }

    const choosenEnemy = (e: EnemyType): void => {
        setShowRewards(true)
        setSelectedEnemy(e)
    }

    const goToBattle = (e: EnemyType): void => {
        navigate('/battle', {state: {monster: e}})
        setShowRewards(false)
    }

    const cancelBattle = (): void => {
        setShowRewards(false)
    }

    return (
        <div className='map relative bg-[url(/map.webp)] min-h-[100vh] bg-center bg-cover bg-no-repeat bg-fixed'>
            <PlayerInfo player={{id: nanoid(), name: 'AveGhost', avatar: 'avatar.png', gold: playerInfo?.gold, lvl: playerInfo?.lvl, exp: playerInfo?.exp, requiredExp: playerInfo?.requiredExp}} >
                <Link to='/character' className='border-2 p-2 flex justify-center items-center w-12 h-12 border-white relative'>
                    {isLvlUp && <Notification />}
                    <Icon icon="pixelarticons:human-height" width="40" height="40" />
                </Link>
                <Link to='/inventory' className='border-2 flex justify-center items-center w-12 h-12 p-2 border-white relative'>
                    {isNewItem && <Notification />}
                    <Icon icon="pixelarticons:archive" width="40" height="40"  style={{color: '#fff'}} />
                </Link>
                <Link to="/shop" className='border-2 flex justify-center items-center w-12 h-12 p-2 border-white relative'>
                    <Icon icon="pixelarticons:cart" width="40" height="40" />
                </Link>
            </PlayerInfo>
            <h1 className='text-6xl text-center' onClick={justForTest}>{randomSpawnMonsters.length}</h1>
            <img src='./character.png' width={'90px'} style={{bottom: `${steps}%`}} className="fixed right-[23%]" />
            {randomSpawnMonsters.map((enemy) => (
                <Enemy key={enemy.id} enemies={enemy} onClick={() => choosenEnemy(enemy)} />
            ))}
            {showRewards && <RewardsModal enemies={selectedEnemy} goToBattle={() => goToBattle(selectedEnemy!)} cancelBattle={() => cancelBattle()} inventorySlots={slots} />}
        </div>
    )
}

export default World