import Enemy from "../enemies/enemy"
import CharacterHp from "../character-info/character-hp"
import CharacterLvl from "../character-info/character-lvl"
import CharacterName from "../character-info/character-name"
import { playerInfoContext } from "../../context/player-info.context"
import { useContext, useEffect, useState } from "react"
import BattleOver from "./battle-over-modal"
import { useNavigate, useLocation } from "react-router"

const Battle = () => {
    const {playerInfo} = useContext(playerInfoContext)!
    const navigate = useNavigate()
    const location = useLocation()
    const {monster} = location.state || {}

    const [isOver, setIsOver] = useState(false)
    const [playerHp, setPlayerHp] = useState(playerInfo?.hp)
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

    const claimReward = () => {
        setIsOver(false)
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
                            <CharacterName character={{name: "AveGhost"}} />
                            <CharacterLvl character={{lvl: playerInfo?.lvl}} />
                        </div>
                        <CharacterHp character={{hp: playerHp, maxHp: playerInfo?.maxHp}} />
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