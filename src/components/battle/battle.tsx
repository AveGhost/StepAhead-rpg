import Enemy from "../enemies/enemy"
import CharacterHp from "../character-info/character-hp"
import CharacterLvl from "../character-info/character-lvl"
import CharacterName from "../character-info/character-name"
import { playerInfoContext } from "../../context/player-info.context"
import { useContext, useEffect, useState } from "react"
import BattleOver from "./battle-over-modal"
import { useNavigate, useLocation } from "react-router"
import { RandomSpawnMonstersContext } from "../../context/random-spawn-monsters.context"

const Battle = () => {
    const {playerInfo, setExp, setGold} = useContext(playerInfoContext)!
    const {hp, maxHp, lvl, name} = playerInfo!
    const navigate = useNavigate()
    const location = useLocation()
    const {monster} = location.state || {}

    const {randomSpawnMonsters,setRandomSpawnMonsters} = useContext(RandomSpawnMonstersContext)!

    const [isOver, setIsOver] = useState(false)
    const [playerHp, setPlayerHp] = useState(hp)
    const [enemyHp, setEnemyHp] = useState(monster.hp)

    const playerAttack = () => {
        if(isOver) return
        const damage = Math.floor(Math.random() * 10) + 1
        if(enemyHp) setEnemyHp(enemyHp - damage)
    }

    const enemyAttack = () => {
        if(isOver) return
        const damage = Math.floor(Math.random() * 10) + 1
        if(playerHp) setPlayerHp(playerHp - damage)
    }

    const Fight = () => {
        setTimeout(() => {
            playerAttack()
        }, 1000)

        setTimeout(() => {
            enemyAttack()
        },1000)

        if(playerHp! <= 0 || enemyHp! <= 0) {
            setIsOver(true)
        }
    }

    const removeMonster = () => {
        setRandomSpawnMonsters(randomSpawnMonsters.filter((m) => m.id !== monster.id))
    }

    const handleRewards = () => {
        setGold(5)
        setExp(20)
    }

    const claimReward = () => {
        setIsOver(false)
        removeMonster()
        handleRewards()
        navigate('/')
    }

    useEffect(() => {
        Fight()
    }, [enemyHp, playerHp])


    return (
        <>
            <div className="flex justify-between items-center w-full h-screen z-10 relative">
                <div>
                    <div className="max-w-[150px] mx-auto">
                        <div className="flex justify-between items-center mb-2">
                            <CharacterName character={{name: name}} />
                            <CharacterLvl character={{lvl: lvl}} />
                        </div>
                        <CharacterHp character={{hp: playerHp, maxHp: maxHp}} />
                    </div>
                    <img src='./character.png' width={'200px'} />
                </div>
                <div>
                    <div className="max-w-[150px] mx-auto">
                        <div className="flex justify-between items-center mb-2">
                            <CharacterName character={{name: monster.name}} />
                            <CharacterLvl character={{lvl: monster.lvl}} />
                        </div>
                        <CharacterHp character={{hp: enemyHp, maxHp: monster.hp}} />
                    </div>
                    <Enemy enemies={{id: monster.id, name: monster.name, model: monster.model}} />
                </div>
            </div>
            {isOver && <BattleOver claim={claimReward} /> }
        </>
    )
}

export default Battle