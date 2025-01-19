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
    const {hp, maxHp, lvl, name, damage, attackSpeed, arrmor, evasion} = playerInfo!
    const navigate = useNavigate()
    const location = useLocation()
    const {monster} = location.state || {}
    
    const defaultAttackSpeed = 2000
    const playerAttackSpeed = defaultAttackSpeed - (defaultAttackSpeed * (attackSpeed ?? 0) / 100)
    const monsterAttackSpeed = defaultAttackSpeed - (defaultAttackSpeed * (monster.attackSpeed ?? 0) / 100)

    const {randomSpawnMonsters,setRandomSpawnMonsters} = useContext(RandomSpawnMonstersContext)!

    const [isOver, setIsOver] = useState(false)
    const [playerHp, setPlayerHp] = useState(hp)
    const [enemyHp, setEnemyHp] = useState(monster.hp)

    const calculateAttack = (dmg: number, def: number, evade: number): number => {
        if(evade > Math.random() * 100) return 0
        if(dmg - (def * 0.5) < 0) return 1
        return dmg - (def * 0.5)
    }

    const playerAttack = () => {
        if(isOver) return
        const dmg = Math.floor(Math.random() * 10 + 1 + (damage ?? 2 * 0.5))
        if(enemyHp) setEnemyHp(enemyHp - calculateAttack(dmg, monster.arrmor ?? 0, monster.evasion))
    }

    const enemyAttack = () => {
        if(isOver) return
        const dmg = Math.floor(Math.random() * 10 + 1 + (monster.damage ?? 2 * 0.5))
        if(playerHp) setPlayerHp(playerHp - calculateAttack(dmg, arrmor ?? 0, evasion ?? 0))
    }

    const playerTrun = () => {
        setTimeout(() => {
            playerAttack()
        }, playerAttackSpeed)
    }

    const enemyTurn = () => {
        setTimeout(() => {
            enemyAttack()
        }, monsterAttackSpeed)
    }

    const fightOver = () => {
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
        playerTrun()
    }, [enemyHp])

    useEffect(() => {
        enemyTurn()
    }, [playerHp])

    useEffect(() => {
        fightOver()
    },[playerHp, enemyHp])


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