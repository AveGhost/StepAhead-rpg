export interface CharacterInfo {
    name?: string,
    hp?: number,
    maxHp?: number,
    lvl?: number,
}

export interface Enemy extends Partial<CharacterInfo>, Partial<CharacterStatistics>, Partial<GameStatistics> {
    id: string,
    name?: string,
    position?: {x: number, y: number} | null,
    model: string,
}

export interface Rewards {
    setGold?: (gold: number) => void,
    setExp?: (exp: number) => void
}

export interface Player extends Partial<CharacterInfo>, Partial<Rewards>, Partial<GameStatistics>, Partial<CharacterStatistics> {
    id: string,
    avatar: string,
    gold: number,
    exp: number,
    requiredExp: number,
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