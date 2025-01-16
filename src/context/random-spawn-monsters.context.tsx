import { createContext, ReactNode } from "react";
import useLocalStorageState from "use-local-storage-state";
import { Enemy } from "../models/characters";
import { enemies } from "../api/enemies";

type RandomSpawnMonstersContext = {
    randomSpawnMonsters: Enemy[]
    setRandomSpawnMonsters: (randomSpawnMonsters: Enemy[]) => void
}

export const RandomSpawnMonstersContext = createContext<RandomSpawnMonstersContext>({
    randomSpawnMonsters: [],
    setRandomSpawnMonsters: () => {},
})

export const RandomSpawnMonstersProvider = ({ children }: { children?: ReactNode }) => {
    const [randomSpawnMonsters, setRandomSpawnMonsters] = useLocalStorageState<Enemy[]>('randomSpawnMonsters', { defaultValue: [] })
    const limit = Math.floor(Math.random() * 5) + 1
    if(randomSpawnMonsters.length === 0) {
        setRandomSpawnMonsters(enemies.slice(0, limit))
    }
    return (
        <RandomSpawnMonstersContext.Provider value={{ randomSpawnMonsters, setRandomSpawnMonsters }}>
            {children}
        </RandomSpawnMonstersContext.Provider>
    )
}