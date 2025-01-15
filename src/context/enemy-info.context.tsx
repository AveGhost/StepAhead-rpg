import { createContext, ReactNode } from "react";
import useLocalStorageState from "use-local-storage-state";
import { CharacterInfo } from "../models/characters";

interface EnemyInfoContext {
    enemyInfo: CharacterInfo;
    setEnemyInfo: (enemyInfo: CharacterInfo) => void;
}

export const enemyInfoContext = createContext<EnemyInfoContext | null>(null);

export const EnemyInfoProvider = ({ children }: { children?: ReactNode }) => {
    const [enemyInfo, setEnemyInfo] = useLocalStorageState<CharacterInfo>('enemyInfo', {
        defaultValue: { hp: 100, maxHp: 100, lvl: 1 },
    });

    return (
        <enemyInfoContext.Provider value={{ enemyInfo, setEnemyInfo }}>
            {children}
        </enemyInfoContext.Provider>
    );
}