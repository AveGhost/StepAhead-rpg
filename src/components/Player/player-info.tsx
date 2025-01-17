import {Icon} from '@iconify/react';
import { Player } from '../../models/characters';
import CharacterLvl from '../character-info/character-lvl';
import CharacterName from '../character-info/character-name';
interface PlayerInfo {
    player: Player
    children?: React.ReactNode
}

const PlayerInfo = ({player, children}: PlayerInfo) => {
    return (
        <div className="flex justify-between items-center w-full gap-4 p-2 bg-gradient-to-b from-[#2f3336]/50 to-[#1d2021]/50 relative z-10">
            <div className='flex gap-4 w-full'>
                <img src="/avatar.png" className="w-[48px] h-[48px] rounded-full" alt="Player avatar" />
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                        <CharacterName character={player} />
                        <CharacterLvl character={player} />
                    </div>
                    <div className="w-full bg-gray-200 h-4 dark:bg-gray-700 relative">
                        <span className='absolute top-0 left-2 text-white text-[.7rem]'>{player.exp}/{player.requiredExp}</span>
                        <div className="bg-[#C19A6B] h-4" style={{width: `calc(${player.exp}/${player.requiredExp} * 100%)`}}></div>
                    </div>
                    <p className='flex gap-3 items-center text-sm text-white'><Icon icon="wpf:coins" width="18" height="18"  style={{color: '#C19A6B'}} /> {player.gold}</p>
                </div>
            </div>
            <div className='flex justify-around w-full'>
                {children}
            </div>
        </div>
    )
}

export default PlayerInfo