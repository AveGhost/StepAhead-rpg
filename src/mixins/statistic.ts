import { Player } from "../models/characters";

export const calculatePlayerDamage = (player: Player): number => {
    return Math.floor(player.statistics?.damage! + (player.attributes?.strength! * 0.4))
}

export const calculateAttackSpeed = (player: Player): number => {
    return Math.floor(player.statistics?.attackSpeed! + (player.attributes?.dexterity! * 0.2))
}

export const calculateHp = (player: Player): number => {
    return Math.floor(player.hp! + (player.attributes?.endurance! * 0.5))
}

export const calculateCriticalHit = (player: Player): number => {
    return Math.floor(player.attributes?.luck! * 0.5)
}