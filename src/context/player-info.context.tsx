import { createContext, ReactNode } from "react";
import { Player } from "../models/characters";
import useLocalStorageState from "use-local-storage-state";
import { nanoid } from "nanoid";

interface PlayerInfoContext {
    playerInfo: Player
    setGold: (gold: number) => void
    setExp: (exp: number) => void
    setStats: (stat: string, value: number, skillPoints?: number) => void
}

export const playerInfoContext = createContext<PlayerInfoContext | undefined>(undefined);

export const PlayerInfoProvider = ({ children }: { children?: ReactNode }) => {
    const [playerInfo, setPlayerInfo] = useLocalStorageState<Player>('playerInfo', {defaultValue: {
        id: nanoid(),
        name: 'AveGhost',
        avatar: 'avatar.png',
        gold: 0,
        lvl: 1,
        exp: 0,
        requiredExp: 100,
        hp: 100,
        maxHp: 100,
        damage: 5,
        attackSpeed: 0,
        arrmor: 0,
        evasion: 0,
        strength: 7,
        dexterity: 3,
        endurance: 5,
        luck: 1,
        skillPoints: 0,
    }});
    const setGold = (gold: number) => {
        setPlayerInfo(prev => ({ ...prev, gold: prev.gold! + gold }));
    };

    const setExp = (exp: number) => {
        setPlayerInfo(prev => {
            const newExp = prev.exp! + exp;
            const levelUp = newExp >= prev.requiredExp!;
            return {
                ...prev,
                exp: levelUp ? newExp - prev.requiredExp! : newExp,
                lvl: levelUp ? prev.lvl! + 1 : prev.lvl,
                skillPoints: levelUp ? prev.skillPoints! + 1 : prev.skillPoints,
            };
        });
    };

    const setStats = (stat: string, value: number, skillPoints?: number) => {
        if(skillPoints! <= 0) return
        setPlayerInfo(prev => ({ ...prev, [stat]: value + 1, skillPoints: prev.skillPoints! - 1 }));
    };

    return (
        <playerInfoContext.Provider value={{ playerInfo, setGold, setExp, setStats }}>
            {children}
        </playerInfoContext.Provider>
    );
};
