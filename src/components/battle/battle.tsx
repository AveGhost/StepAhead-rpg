import Enemy from "../enemies/enemy"
import CharacterHp from "../character-info/character-hp"
import CharacterLvl from "../character-info/character-lvl"
import CharacterName from "../character-info/character-name"
import { playerInfoContext } from "../../context/player-info.context"
import { InventoryContext } from "../../context/inventory.context"
import { useContext, useEffect, useState } from "react"
import BattleOver from "./battle-over-modal"
import { useNavigate, useLocation } from "react-router"
import { RandomSpawnMonstersContext } from "../../context/random-spawn-monsters.context"
import { calculatePlayerDamage } from "../../mixins/statistic"
import { calculateAttackSpeed } from "../../mixins/statistic"
import { calculateHp } from "../../mixins/statistic"
import { calculateCriticalHit } from "../../mixins/statistic"
import { Item } from "../../models/items"
import { NotificationContext } from "../../context/notification.context"

const Battle = () => {
    const {playerInfo, setExp, setGold} = useContext(playerInfoContext)!
    const {setSlots} = useContext(InventoryContext)!
    const {setIsNewItem} = useContext(NotificationContext)!
    const {lvl, name, statistics} = playerInfo!
    const navigate = useNavigate()
    const location = useLocation()
    const {monster} = location.state || {}
    
    const defaultAttackSpeed = 2000
    const playerAttackSpeed = defaultAttackSpeed - (defaultAttackSpeed * (calculateAttackSpeed(playerInfo) ?? 0) / 100)
    const monsterAttackSpeed = defaultAttackSpeed - (defaultAttackSpeed * (monster.attackSpeed ?? 0) / 100)

    const {randomSpawnMonsters,setRandomSpawnMonsters} = useContext(RandomSpawnMonstersContext)!

    const [isOver, setIsOver] = useState(false)
    const [playerWin, setPlayerWin] = useState(false)
    const [monsterWin, setMonsterWin] = useState(false)
    const [gainedExp, setGainedExp] = useState(monster.exp)
    const [gainedGold, setGainedGold] = useState(monster.gold)
    const [gainedItem, setGainedItem] = useState<Item | undefined>(undefined)
    const [isPlayerAttack, setIsPlayerAttack] = useState(false)
    const [isMonsterAttack, setIsMonsterAttack] = useState(false)
    const [playerHp, setPlayerHp] = useState(calculateHp(playerInfo))
    const maxPlayerHp = calculateHp(playerInfo)
    const [enemyHp, setEnemyHp] = useState(monster.hp)

    useEffect(() => {
        fightOver(playerHp, enemyHp)
    },[isOver])

    const fightOver = (currentPlayerHp: number, currentEnemyHp: number) => {
        if(currentPlayerHp <= 0) {
            setMonsterWin(true)
            setGainedExp(Math.floor(gainedExp * 0.2))
            setGainedGold(Math.floor(gainedGold * 0.2))
        } else if(currentEnemyHp <= 0) {
            setPlayerWin(true)
            if(monster.item) {
                setGainedItem(monster.item)
                setIsNewItem(true)
            }
        }
    }

    const calculateAttack = (dmg: number, def: number, evade: number, criticalHit: number): number => {
        if(evade > Math.floor(Math.random() * 100 + 1)) return 0
        if(dmg - (def * 0.5) < 0) return 1
        if(criticalHit >= Math.floor(Math.random() * 100 + 1)) return (dmg * 2 - (def * 0.5))
        return Math.floor(dmg - (def * 0.5))
    }

    const playerAttack = () => {
        if(enemyHp <= 0 || playerHp <= 0) {
            setIsOver(true) 
            return
        } 
        const dmg = Math.floor(Math.random() * (calculatePlayerDamage(playerInfo)) + 1)
        const criticalHit = calculateCriticalHit(playerInfo)
        if(enemyHp) setEnemyHp(enemyHp - calculateAttack(dmg, monster.arrmor ?? 0, monster.evasion, criticalHit))
    }

    const enemyAttack = () => {
        if(enemyHp <= 0 || playerHp <= 0) {
            setIsOver(true)
            return
        } 
        const dmg = Math.floor(Math.random() * monster.damage + 1)
        if(playerHp) setPlayerHp(playerHp - calculateAttack(dmg, statistics?.arrmor ?? 0, statistics?.evasion ?? 0, monster.luck))
    }

    const playerTrun = () => {
        setTimeout(() => {
            playerAttack()
            setIsPlayerAttack(!isPlayerAttack)
        }, playerAttackSpeed)
    }

    const enemyTurn = () => {
        setTimeout(() => {
            enemyAttack()
            setIsMonsterAttack(!isMonsterAttack)
        }, monsterAttackSpeed)
    }
    const removeMonster = () => {
        setRandomSpawnMonsters(randomSpawnMonsters.filter((m) => m.id !== monster.id))
    }

    const handleRewards = () => {
        if(playerWin) {
            setGold(Math.floor(gainedGold))
            setExp(Math.floor(gainedExp))
            setSlots((slots: Item[][]) => {
                let newSlots = [...slots]
                const emptySlot = newSlots.findIndex(slot => slot.length === 0)
                if(emptySlot !== -1) {
                    newSlots[emptySlot] = monster.item
                }
                return newSlots
            })
        } else if(monsterWin) {
            setGold(gainedGold)
            setExp(gainedExp)
        }
    }

    const claimReward = () => {
        setIsOver(false)
        removeMonster()
        handleRewards()
        navigate('/')
    }
    
    useEffect(() => {
        playerTrun()
    },[isPlayerAttack])

    useEffect(() => {
        enemyTurn()
    },[isMonsterAttack])

    return (
        <>
            <div className="flex justify-around items-center w-full h-screen z-10 relative">
                <div>
                    <div className="max-w-[150px] mx-auto">
                        <div className="flex justify-between items-center mb-2">
                            <CharacterName character={{name: name}} />
                            <CharacterLvl character={{lvl: lvl}} />
                        </div>
                        <CharacterHp character={{hp: playerHp, maxHp: maxPlayerHp}} />
                    </div>
                    <img src='./character.png' width={'120px'} />
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
            {isOver && <BattleOver claim={claimReward} gainedExp={gainedExp} gainedGold={gainedGold} item={gainedItem} /> }
        </>
    )
}

export default Battle