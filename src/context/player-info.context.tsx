import { createContext, ReactNode } from "react";
import { Player } from "../models/characters";
import useLocalStorageState from "use-local-storage-state";
import { nanoid } from "nanoid";

interface PlayerInfoContext {
    playerInfo: Player
    setGold: (gold: number) => void
    setExp: (exp: number) => void
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
        attackSpeed: 0,
        damage: 10,
        arrmor: 0,
        evasion: 0,
        strength: 10,
        dexterity: 10,
        endurance: 10,
        luck: 10
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
            };
        });
    };

    return (
        <playerInfoContext.Provider value={{ playerInfo, setGold, setExp }}>
            {children}
        </playerInfoContext.Provider>
    );
};
