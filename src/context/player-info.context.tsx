import { createContext, ReactNode } from "react";
import { Player } from "../models/characters";
import useLocalStorageState from "use-local-storage-state";

interface PlayerInfoContext {
    playerInfo: Player| null;
}

export const playerInfoContext = createContext<PlayerInfoContext | null>(null);

export const PlayerInfoProvider = ({ children }: { children?: ReactNode }) => {
    const [playerInfo] = useLocalStorageState<Player>('playerInfo', {
        defaultValue: { id: '1', name: 'AveGhost', avatar: 'avatar.png', gold: 0, exp: 0, requiredExp: 100, hp: 100, maxHp: 100, lvl: 1 },
    });

    return (
        <playerInfoContext.Provider value={{ playerInfo}}>
            {children}
        </playerInfoContext.Provider>
    );
};
