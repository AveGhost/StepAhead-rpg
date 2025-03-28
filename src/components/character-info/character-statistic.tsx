import { Icon } from "@iconify/react/dist/iconify.js"

interface CharacterStatisticProps {
    name: string,
    value: number
    onClick?: (stat: string, value: number) => void
}

const CharacterStatistic = ({ name, value, onClick }: CharacterStatisticProps) => {
    return (
        <li className="flex items-center gap-4">{name}: {value}
            <button onClick={() => onClick && onClick(name, value)} className="w-8 h-8 flex items-center justify-center">
                <span className="text-2xl"><Icon icon="memory:plus-circle" width="22" height="22"  style={{color: '#C19A6B'}} /></span>
            </button>
        </li>
    )
}

export default CharacterStatistic