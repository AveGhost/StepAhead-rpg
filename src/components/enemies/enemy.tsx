import { Enemy as Enemies } from "../models/characters"

interface EnemyList {
    enemies: Enemies[]
}

const Enemy = ({enemies}: EnemyList) => {
    return (
        <img src='./character.png' width={'120px'} style={{bottom: `${enemies.position?.y}%`, left: `${enemies.position?.x}%`}} className={enemies.position ? 'fixed' : `w-full max-w-[200px]`} />
    )
}

export default Enemy