import { Item } from "../models/items"
import { ItemStatistics } from "../models/items"
import { nanoid } from 'nanoid'
import { getRandomModifier } from "../mixins/getRandomModifier"

export const swords: Item[] = [
    {
        id: nanoid(),
        name: "Iron sword",
        image: "/items/sword_01.png",
        type: 'weapon',
        damage: 7,
        attackSpeed: 0.8,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.damage, value: getRandomModifier(1,5)},
            {name: ItemStatistics.strength, value: getRandomModifier(1,5)},
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Iron sword",
        image: "/items/sword_01.png",
        type: 'weapon',
        damage: 7,
        attackSpeed: 0.8,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.damage, value: getRandomModifier(1,5)},
            {name: ItemStatistics.attackSpeed, value: getRandomModifier(1,3)},
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Iron sword",
        image: "/items/sword_01.png",
        type: 'weapon',
        damage: 7,
        attackSpeed: 0.8,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.damage, value: getRandomModifier(1,5)},
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Iron sword",
        image: "/items/sword_01.png",
        type: 'weapon',
        damage: 7,
        attackSpeed: 0.8,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.strength, value: getRandomModifier(1,5)},
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Iron sword",
        image: "/items/sword_01.png",
        type: 'weapon',
        damage: 7,
        attackSpeed: 0.8,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.damage, value: getRandomModifier(1,5)},
            {name: ItemStatistics.dexterity, value: getRandomModifier(1,5)},
            {name: ItemStatistics.luck, value: getRandomModifier(1,5)}
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Iron sword",
        image: "/items/sword_01.png",
        type: 'weapon',
        damage: 7,
        attackSpeed: 0.8,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.attackSpeed, value: getRandomModifier(1,3)},
            {name: ItemStatistics.strength, value: getRandomModifier(1,5)},
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Iron sword",
        image: "/items/sword_01.png",
        type: 'weapon',
        damage: 7,
        attackSpeed: 0.8,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.luck, value: getRandomModifier(1,5)},
            {name: ItemStatistics.strength, value: getRandomModifier(1,5)},
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Iron sword",
        image: "/items/sword_01.png",
        type: 'weapon',
        damage: 10,
        attackSpeed: 0.8,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.damage, value: getRandomModifier(3,7)},
            {name: ItemStatistics.strength, value: getRandomModifier(3,7)},
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Iron sword",
        image: "/items/sword_01.png",
        type: 'weapon',
        damage: 10,
        attackSpeed: 0.8,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.damage, value: getRandomModifier(3,7)},
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Iron sword",
        image: "/items/sword_01.png",
        type: 'weapon',
        damage: 10,
        attackSpeed: 0.8,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.strength, value: getRandomModifier(3,7)},
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Iron sword",
        image: "/items/sword_01.png",
        type: 'weapon',
        damage: 10,
        attackSpeed: 0.8,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.damage, value: getRandomModifier(3,7)},
            {name: ItemStatistics.strength, value: getRandomModifier(3,7)},
            {name: ItemStatistics.attackSpeed, value: getRandomModifier(1,5)}
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Iron sword",
        image: "/items/sword_01.png",
        type: 'weapon',
        damage: 10,
        attackSpeed: 0.8,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.strength, value: getRandomModifier(3,7)},
            {name: ItemStatistics.dexterity, value: getRandomModifier(3,7)},
            {name: ItemStatistics.luck, value: getRandomModifier(3,7)}
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Iron sword",
        image: "/items/sword_01.png",
        type: 'weapon',
        damage: 10,
        attackSpeed: 0.8,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.damage, value: getRandomModifier(3,7)},
            {name: ItemStatistics.strength, value: getRandomModifier(3,7)},
            {name: ItemStatistics.luck, value: getRandomModifier(3,7)},
            {name: ItemStatistics.dexterity, value: getRandomModifier(3,7)}
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Iron sword",
        image: "/items/sword_01.png",
        type: 'weapon',
        damage: 10,
        attackSpeed: 0.8,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.damage, value: getRandomModifier(3,7)},
            {name: ItemStatistics.attackSpeed, value: getRandomModifier(1,5)},
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Iron sword",
        image: "/items/sword_01.png",
        type: 'weapon',
        damage: 15,
        attackSpeed: 1,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.damage, value: getRandomModifier(10,20)},
            {name: ItemStatistics.strength, value: getRandomModifier(10,20)},
            {name: ItemStatistics.attackSpeed, value: getRandomModifier(8,15)},
            {name: ItemStatistics.luck, value: getRandomModifier(10,20)}
        ],
        price: 50,
        isOnSale: false,
        rarity: 'Rare'
    },
    {
        id: nanoid(),
        name: "Iron sword",
        image: "/items/sword_01.png",
        type: 'weapon',
        damage: 15,
        attackSpeed: 1,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.damage, value: getRandomModifier(10,20)},
            {name: ItemStatistics.strength, value: getRandomModifier(10,20)},
            {name: ItemStatistics.attackSpeed, value: getRandomModifier(8,15)},
            {name: ItemStatistics.dexterity, value: getRandomModifier(10,20)}
        ],
        price: 50,
        isOnSale: false,
        rarity: 'Rare'
    },
    {
        id: nanoid(),
        name: "Iron sword",
        image: "/items/sword_01.png",
        type: 'weapon',
        damage: 45,
        attackSpeed: 1.2,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.damage, value: getRandomModifier(10,30)},
            {name: ItemStatistics.strength, value: getRandomModifier(10,30)},
            {name: ItemStatistics.attackSpeed, value: getRandomModifier(10,30)},
            {name: ItemStatistics.luck, value: getRandomModifier(10,30)},
            {name: ItemStatistics.dexterity, value: getRandomModifier(10,30)}
        ],
        price: 250,
        isOnSale: false,
        rarity: 'Epic'
    },
    {
        id: nanoid(),
        name: "Giant sword",
        image: "/items/sword_02.png",
        type: 'weapon',
        damage: 65,
        attackSpeed: 1.5,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.damage, value: 50},
            {name: ItemStatistics.attackSpeed, value: getRandomModifier(-50,-25)},
            {name: ItemStatistics.strength, value: getRandomModifier(10,30)}
        ],
        price: 500,
        isOnSale: false,
        rarity: 'Unique'
    },
]