import { Link } from "react-router"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useContext } from "react"
import { playerInfoContext } from "../context/player-info.context"
import CharacterStatistic from "../components/character-info/character-statistic"

const CharacterPage = () => {
    const { playerInfo } = useContext(playerInfoContext)!
    const { maxHp, damage, attackSpeed, arrmor, evasion, strength, dexterity, endurance, luck } = playerInfo

    const Statistic = [
        { name: 'Strength', value: strength },
        { name: 'Dexterity', value: dexterity },
        { name: 'Endurance', value: endurance },
        { name: 'Luck', value: luck },
    ]
    return (
        <div className="bg-zinc-900 h-screen flex flex-col items-center justify-center">
            <Link to="/">
                <Icon icon="pixelarticons:close" className="fixed top-2 left-4" width="40" height="40"  style={{color: '#fff'}} />
            </Link>
            <ul className="grid grid-cols-2 gap-4 p-4 border-2 border-white">
                <li>HP: {maxHp}</li>
                <li>Damage: {damage}</li>
                <li>Attack speed: {attackSpeed}%</li>
                <li>Armor: {arrmor}</li>
                <li>Evasion: {evasion}%</li>
                <li>Critical hit chance: 5%</li>
            </ul>
            <ul className="flex flex-col justify-center items-center gap-10 p-4">
                {Statistic && Statistic.map((statistic) => (
                    <CharacterStatistic key={statistic.name} name={statistic.name} value={statistic.value ?? 0} />
                ))}
            </ul>
        </div>
    )
}

export default CharacterPage