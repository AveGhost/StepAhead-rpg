import { createContext, ReactNode } from "react";
import useLocalStorageState from "use-local-storage-state";
import { Enemy } from "../models/characters";
import { lowLvlEnemies } from "../api/lowlvl-enemies";
import { mediumLvlEnemies } from "../api/mediumlvl-enemies";

type RandomSpawnMonstersContext = {
    randomSpawnMonsters: Enemy[]
    setRandomSpawnMonsters: (randomSpawnMonsters: Enemy[]) => void
    spawn: (playerLvl: number) => void
}

export const RandomSpawnMonstersContext = createContext<RandomSpawnMonstersContext>({
    randomSpawnMonsters: [],
    setRandomSpawnMonsters: () => {},
    spawn: () => {}
})

export const RandomSpawnMonstersProvider = ({ children }: { children?: ReactNode }) => {
    const [randomSpawnMonsters, setRandomSpawnMonsters] = useLocalStorageState<Enemy[]>('randomSpawnMonsters', { defaultValue: [] })
    const limit = Math.floor(Math.random() * 5) + 1
    const spawn = (playerLvl: number) => {
        if(randomSpawnMonsters.length === 0 && playerLvl < 10) {
            setRandomSpawnMonsters(lowLvlEnemies.slice(0, limit))
        } else if(randomSpawnMonsters.length === 0 && playerLvl > 10) {
            setRandomSpawnMonsters(mediumLvlEnemies.slice(0, limit))
        }
    }
    return (
        <RandomSpawnMonstersContext.Provider value={{ randomSpawnMonsters, setRandomSpawnMonsters, spawn }}>
            {children}
        </RandomSpawnMonstersContext.Provider>
    )
}