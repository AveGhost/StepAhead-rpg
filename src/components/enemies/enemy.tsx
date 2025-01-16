import type { Enemy as Enemies } from "../../models/characters"

interface EnemyList {
    enemies: Enemies
    onClick?: () => void
}

const Enemy = ({enemies, onClick}: EnemyList) => {
    return (
        <img onClick={onClick} src={enemies.model} width={'120px'} style={{bottom: `${enemies.position?.y}%`, left: `${enemies.position?.x}%`}} className={enemies.position ? 'fixed' : `w-full max-w-[200px]`} />
    )
}

export default Enemy