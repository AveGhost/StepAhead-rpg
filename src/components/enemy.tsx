import type { Enemy } from "../models/characters"

interface EnemyList {
    enemies: Enemy[]
}

const Enemy = ({enemies}: EnemyList) => {
    return (
        enemies.map((enemy) => (
            <img key={enemy.id} src='./character.png' width={'120px'} style={{bottom: `${enemy.position.y}%`, left: `${enemy.position.x}%`}} className="fixed" />
        ))
    )
}

export default Enemy