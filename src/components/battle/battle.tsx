import Enemy from "../enemies/enemy"
import CharacterHp from "../character-info/character-hp"
import CharacterLvl from "../character-info/character-lvl"
import CharacterName from "../character-info/character-name"
import { playerInfoContext } from "../../context/player-info.context"
import { enemyInfoContext } from "../../context/enemy-info.context"
import { useContext, useEffect, useState } from "react"
import BattleOver from "./battle-over-modal"
import { useNavigate } from "react-router"

const Battle = () => {
    const {playerInfo} = useContext(playerInfoContext)
    const {enemyInfo} = useContext(enemyInfoContext)
    const navigate = useNavigate()

    const [isOver, setIsOver] = useState(false)
    const [playerHp, setPlayerHp] = useState(playerInfo.hp)
    const [enemyHp, setEnemyHp] = useState(enemyInfo.hp)

    const playerAttack = () => {
        if(isOver) return
        const damage = Math.floor(Math.random() * 10) + 1
        setEnemyHp(enemyHp - damage)
    }

    const enemyAttack = () => {
        if(isOver) return
        const damage = Math.floor(Math.random() * 10) + 1
        setPlayerHp(playerHp - damage)
    }

    const Fight = () => {
        setTimeout(() => {
            playerAttack()
        }, 1000)

        setTimeout(() => {
            enemyAttack()
        },1000)

        if(playerHp <= 0 || enemyHp <= 0) {
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
                            <CharacterLvl character={{lvl: playerInfo.lvl}} />
                        </div>
                        <CharacterHp character={{hp: playerHp, maxHp: playerInfo.maxHp}} />
                    </div>
                    <img src='./character.png' width={'200px'} />
                </div>
                <div>
                    <div className="max-w-[150px] mx-auto">
                        <div className="flex justify-between items-center mb-2">
                            <CharacterName character={{name: "Bandit"}} />
                            <CharacterLvl character={{lvl: enemyInfo.lvl}} />
                        </div>
                        <CharacterHp character={{hp: enemyHp, maxHp: playerInfo.maxHp}} />
                    </div>
                    <Enemy enemies={[{id: "143", name: "Enemy"}]} />
                </div>
            </div>
            {isOver && <BattleOver claim={claimReward} /> }
        </>
    )
}

export default Battle