import Battle from "../components/battle/battle"
import { PlayerInfoProvider } from "../context/player-info.context"
import { EnemyInfoProvider } from "../context/enemy-info.context"
const BattleArea = () => {
    return (
        <div className='map relative bg-[url(/map.webp)] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-black/40 min-h-[100vh] bg-center bg-cover bg-no-repeat bg-fixed'>
            <PlayerInfoProvider>
                <EnemyInfoProvider>
                    <Battle />
                </EnemyInfoProvider>
            </PlayerInfoProvider>
        </div>
    )
}

export default BattleArea