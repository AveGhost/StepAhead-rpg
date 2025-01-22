import { createContext, ReactNode } from "react";
import { Player } from "../models/characters";
import useLocalStorageState from "use-local-storage-state";
import { playerDefault } from "../api/player-default";
import { setExp as setExpFunction } from "../mixins/setexp";
import { setGold as setGoldFunction } from "../mixins/setgold";
import { setStats as setStatsFunction } from "../mixins/setstats";
import { setStatsFromItem as setStatsFromItemFunction } from "../mixins/setstatsFromItem";
import { removeStatsFromItem as removeStatsFromItemFunction } from "../mixins/removeStatsFromItem";
import { Item } from "../models/items";

interface PlayerInfoContext {
    playerInfo: Player
    setGold: (gold: number) => void
    setExp: (exp: number) => void
    setStats: (stat: string, value: number, skillPoints?: number) => void
    setStatsFromItem: (item: Item) => void
    removeStatsFromItem: (item: Item) => void
}

export const playerInfoContext = createContext<PlayerInfoContext | undefined>(undefined);

export const PlayerInfoProvider = ({ children }: { children?: ReactNode }) => {
    const [playerInfo, setPlayerInfo] = useLocalStorageState<Player>('playerInfo', {defaultValue: {...playerDefault}});
    
    const setGold = (gold: number) => {
        setPlayerInfo(prev => setGoldFunction(prev, gold));
    };

    const setExp = (exp: number) => {
        setPlayerInfo(prev => setExpFunction(prev, exp));
    };

    const setStats = (stat: string, value: number, skillPoints?: number) => {
        setPlayerInfo(prev => setStatsFunction(prev, stat, value, skillPoints || 0));
    };

    const setStatsFromItem = (item: Item) => {
        setPlayerInfo(prev => setStatsFromItemFunction(prev, item));
    };

    const removeStatsFromItem = (item: Item) => {
        setPlayerInfo(prev => removeStatsFromItemFunction(prev, item));
    };

    return (
        <playerInfoContext.Provider value={{ playerInfo, setGold, setExp, setStats, setStatsFromItem, removeStatsFromItem }}>
            {children}
        </playerInfoContext.Provider>
    );
};
