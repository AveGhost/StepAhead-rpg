import { Item } from "./items"

export interface CharacterInfo {
    name?: string,
    hp?: number,
    maxHp?: number,
    lvl?: number,
}

export interface Enemy extends Partial<CharacterInfo>, Partial<CharacterStatistics>, Partial<GameStatistics>, Partial<MonsterRewards> {
    id: string,
    name?: string,
    position?: {x: number, y: number} | null,
    model: string,
}

export interface Rewards {
    setGold?: (gold: number) => void,
    setExp?: (exp: number) => void
}

export interface Player extends Partial<CharacterInfo>, Partial<Rewards> {
    id: string,
    avatar: string,
    gold: number,
    exp: number,
    requiredExp: number,
    skillPoints?: number,
    attributes?: CharacterStatistics,
    statistics?: GameStatistics
}

export interface CharacterStatistics {
    strength: number,
    dexterity: number,
    endurance: number,
    luck: number
}

export interface GameStatistics {
    attackSpeed: number,
    damage: number,
    arrmor: number,
    evasion: number
}

export interface MonsterRewards {
    gold: number,
    exp: number,
    item: Item
}