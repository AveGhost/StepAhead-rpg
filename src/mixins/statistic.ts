import { Player } from "../models/characters";

export const calculatePlayerDamage = (player: Player): number => {
    return Math.floor(player.damage! + (player.strength! * 0.4))
}

export const calculateAttackSpeed = (player: Player): number => {
    return Math.floor(player.attackSpeed! + (player.dexterity! * 0.2))
}

export const calculateHp = (player: Player): number => {
    return Math.floor(player.hp! + (player.endurance! * 0.5))
}

export const calculateCriticalHit = (player: Player): number => {
    return Math.floor(player.luck! * 0.5)
}