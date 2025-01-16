export interface CharacterInfo {
    name?: string,
    hp?: number,
    maxHp?: number,
    lvl?: number,
}

export interface Enemy extends CharacterInfo {
    id: string,
    name?: string,
    position?: {x: number, y: number} | null,
    model: string,
}

export interface Player extends CharacterInfo {
    id: string,
    avatar?: string,
    gold?: number,
    exp?: number,
    requiredExp?: number,
}