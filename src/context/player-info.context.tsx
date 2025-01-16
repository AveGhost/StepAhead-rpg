import { createContext, ReactNode } from "react";
import { CharacterInfo } from "../models/characters";
import useLocalStorageState from "use-local-storage-state";

interface PlayerInfoContext {
    playerInfo: CharacterInfo | null;
}

export const playerInfoContext = createContext<PlayerInfoContext | null>(null);

export const PlayerInfoProvider = ({ children }: { children?: ReactNode }) => {
    const [playerInfo] = useLocalStorageState<CharacterInfo>('playerInfo', {
        defaultValue: { hp: 100, maxHp: 100, lvl: 1 },
    });

    return (
        <playerInfoContext.Provider value={{ playerInfo}}>
            {children}
        </playerInfoContext.Provider>
    );
};
