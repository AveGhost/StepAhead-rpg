import { Link } from "react-router"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useContext, useEffect } from "react"
import { playerInfoContext } from "../context/player-info.context"
import CharacterStatistic from "../components/character-info/character-statistic"
import { calculatePlayerDamage } from "../mixins/statistic"
import { calculateAttackSpeed } from "../mixins/statistic"
import { calculateHp } from "../mixins/statistic"
import { calculateCriticalHit } from "../mixins/statistic"
import { NotificationContext } from "../context/notification.context"
const CharacterPage = () => {
    const { playerInfo, setStats } = useContext(playerInfoContext)!
    const { attributes, statistics, skillPoints } = playerInfo!
    const {isLvlUp,setIsLvlUp} = useContext(NotificationContext)!

    useEffect(() => {
        if(isLvlUp) setIsLvlUp(false)
    },[])

    const Statistic = [
        { name: 'Strength', value: attributes?.strength },
        { name: 'Dexterity', value: attributes?.dexterity },
        { name: 'Endurance', value: attributes?.endurance },
        { name: 'Luck', value: attributes?.luck },
    ]

    return (
        <div className="bg-zinc-900 h-dvh flex flex-col items-center justify-center">
            <Link to="/">
                <Icon icon="pixelarticons:close" className="fixed top-2 left-4" width="40" height="40"  style={{color: '#fff'}} />
            </Link>
            <ul className="grid grid-cols-2 gap-4 p-4 border-2 border-white">
                <li>HP: {calculateHp(playerInfo)}</li>
                <li>Damage: {calculatePlayerDamage(playerInfo)}</li>
                <li>Attack speed: {calculateAttackSpeed(playerInfo)}%</li>
                <li>Armor: {statistics?.arrmor}</li>
                <li>Evasion: {statistics?.evasion}%</li>
                <li>Critical hit chance: {calculateCriticalHit(playerInfo)}%</li>
            </ul>
            <ul className="flex flex-col justify-center items-center gap-10 p-4">
                {Statistic && Statistic.map((statistic) => (
                    <CharacterStatistic onClick={() => setStats(statistic.name.toLowerCase(), statistic.value ?? 0, skillPoints)} key={statistic.name} name={statistic.name} value={statistic.value ?? 0} />
                ))}
            </ul>
            <p className="mt-4">Skill points: {skillPoints}</p>
        </div>
    )
}

export default CharacterPage