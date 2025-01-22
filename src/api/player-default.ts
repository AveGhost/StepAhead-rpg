import { nanoid } from "nanoid"

export const playerDefault = {
    id: nanoid(),
    name: 'AveGhost',
    avatar: 'avatar.png',
    gold: 0,
    lvl: 1,
    exp: 0,
    requiredExp: 100,
    hp: 100,
    maxHp: 100,
    attributes: {
        strength: 7,
        dexterity: 3,
        endurance: 5,
        luck: 1
    },
    statistics: {
        attackSpeed: 1,
        damage: 5,
        arrmor: 0,
        evasion: 0
    },
    skillPoints: 0,
}