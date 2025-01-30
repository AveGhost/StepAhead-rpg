import { createContext, ReactNode } from "react";
import useLocalStorageState from "use-local-storage-state";
import { Enemy } from "../models/characters";
import { lowLvlEnemies } from "../api/lowlvl-enemies";
import { mediumLvlEnemies } from "../api/mediumlvl-enemies";

type RandomSpawnMonstersContext = {
    randomSpawnMonsters: Enemy[]
    setRandomSpawnMonsters: (randomSpawnMonsters: Enemy[]) => void
    spawn: (playerLvl: number, steps: number) => void
}

export const RandomSpawnMonstersContext = createContext<RandomSpawnMonstersContext>({
    randomSpawnMonsters: [],
    setRandomSpawnMonsters: () => {},
    spawn: () => {}
})

export const RandomSpawnMonstersProvider = ({ children }: { children?: ReactNode }) => {
    const [randomSpawnMonsters, setRandomSpawnMonsters] = useLocalStorageState<Enemy[]>('randomSpawnMonsters', { defaultValue: [] })
    const limit = Math.floor(Math.random() * 5) + 1

    const getRandomEnemies = (enemies: any[], count: number) => {
        const shuffled = enemies.slice().sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    const spawn = (playerLvl: number, steps: number) => {
        if(steps >= 80) {
            setRandomSpawnMonsters([])
            return
        } 
        if(randomSpawnMonsters.length === 0 && playerLvl < 10) {
            setRandomSpawnMonsters(getRandomEnemies(lowLvlEnemies, limit))
        } else if(randomSpawnMonsters.length === 0 && playerLvl > 10) {
            setRandomSpawnMonsters(getRandomEnemies(mediumLvlEnemies, limit))
        }
    }
    return (
        <RandomSpawnMonstersContext.Provider value={{ randomSpawnMonsters, setRandomSpawnMonsters, spawn }}>
            {children}
        </RandomSpawnMonstersContext.Provider>
    )
}