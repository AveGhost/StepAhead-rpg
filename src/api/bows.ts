import { Item } from "../models/items"
import { ItemStatistics } from "../models/items"
import { nanoid } from 'nanoid'
import { getRandomModifier } from "../mixins/getRandomModifier"

export const bows: Item[] = [
    {
        id: nanoid(),
        name: "Simple bow",
        image: "/items/bow_01.png",
        type: 'weapon',
        damage: 5,
        attackSpeed: 1,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.attackSpeed, value: getRandomModifier(1,5)},
            {name: ItemStatistics.damage, value: getRandomModifier(1,5)}
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Simple bow",
        image: "/items/bow_01.png",
        type: 'weapon',
        damage: 5,
        attackSpeed: 1,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.dexterity, value: getRandomModifier(1,5)},
            {name: ItemStatistics.luck, value: getRandomModifier(1,5)}
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Simple bow",
        image: "/items/bow_01.png",
        type: 'weapon',
        damage: 5,
        attackSpeed: 1,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.attackSpeed, value: getRandomModifier(1,5)},
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Simple bow",
        image: "/items/bow_01.png",
        type: 'weapon',
        damage: 5,
        attackSpeed: 1,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.damage, value: getRandomModifier(1,5)}
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Simple bow",
        image: "/items/bow_01.png",
        type: 'weapon',
        damage: 5,
        attackSpeed: 1,
        isEquipped: false,
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Simple bow",
        image: "/items/bow_01.png",
        type: 'weapon',
        damage: 5,
        attackSpeed: 1,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.dexterity, value: getRandomModifier(1,5)},
            {name: ItemStatistics.luck, value: getRandomModifier(1,5)},
            {name: ItemStatistics.strength, value: getRandomModifier(1,5)}
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Simple bow",
        image: "/items/bow_01.png",
        type: 'weapon',
        damage: 5,
        attackSpeed: 1,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.damage, value: getRandomModifier(1,5)},
            {name: ItemStatistics.dexterity, value: getRandomModifier(1,5)}
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Simple bow",
        image: "/items/bow_01.png",
        type: 'weapon',
        damage: 5,
        attackSpeed: 1,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.attackSpeed, value: getRandomModifier(1,5)},
            {name: ItemStatistics.damage, value: getRandomModifier(1,5)},
            {name: ItemStatistics.luck, value: getRandomModifier(1,5)},
            {name: ItemStatistics.dexterity, value: getRandomModifier(1,5)}
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Simple bow",
        image: "/items/bow_01.png",
        type: 'weapon',
        damage: 7,
        attackSpeed: 1,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.attackSpeed, value: getRandomModifier(3,7)},
            {name: ItemStatistics.damage, value: getRandomModifier(3,7)}
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Simple bow",
        image: "/items/bow_01.png",
        type: 'weapon',
        damage: 7,
        attackSpeed: 1,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.dexterity, value: getRandomModifier(3,7)},
            {name: ItemStatistics.luck, value: getRandomModifier(3,7)}
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Simple bow",
        image: "/items/bow_01.png",
        type: 'weapon',
        damage: 7,
        attackSpeed: 1,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.attackSpeed, value: getRandomModifier(3,7)},
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Simple bow",
        image: "/items/bow_01.png",
        type: 'weapon',
        damage: 7,
        attackSpeed: 1,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.damage, value: getRandomModifier(3,7)}
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Simple bow",
        image: "/items/bow_01.png",
        type: 'weapon',
        damage: 7,
        attackSpeed: 1,
        isEquipped: false,
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Simple bow",
        image: "/items/bow_01.png",
        type: 'weapon',
        damage: 7,
        attackSpeed: 1,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.dexterity, value: getRandomModifier(3,7)},
            {name: ItemStatistics.luck, value: getRandomModifier(3,7)},
            {name: ItemStatistics.strength, value: getRandomModifier(3,7)}
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Simple bow",
        image: "/items/bow_01.png",
        type: 'weapon',
        damage: 7,
        attackSpeed: 1,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.damage, value: getRandomModifier(3,7)},
            {name: ItemStatistics.dexterity, value: getRandomModifier(3,7)}
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Simple bow",
        image: "/items/bow_01.png",
        type: 'weapon',
        damage: 7,
        attackSpeed: 1,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.attackSpeed, value: getRandomModifier(3,7)},
            {name: ItemStatistics.damage, value: getRandomModifier(3,7)},
            {name: ItemStatistics.luck, value: getRandomModifier(3,7)},
            {name: ItemStatistics.dexterity, value: getRandomModifier(3,7)}
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Simple bow",
        image: "/items/bow_01.png",
        type: 'weapon',
        damage: 10,
        attackSpeed: 1.2,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.attackSpeed, value: getRandomModifier(5,10)},
            {name: ItemStatistics.damage, value: getRandomModifier(5,10)},
            {name: ItemStatistics.dexterity, value: getRandomModifier(5,10)},
            {name: ItemStatistics.strength, value: getRandomModifier(5,10)}
        ],
        price: 50,
        isOnSale: false,
        rarity: 'Rare'
    },
    {
        id: nanoid(),
        name: "Simple bow",
        image: "/items/bow_01.png",
        type: 'weapon',
        damage: 10,
        attackSpeed: 1.2,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.attackSpeed, value: getRandomModifier(5,10)},
            {name: ItemStatistics.damage, value: getRandomModifier(5,10)},
            {name: ItemStatistics.dexterity, value: getRandomModifier(5,10)},
            {name: ItemStatistics.luck, value: getRandomModifier(5,10)}
        ],
        price: 50,
        isOnSale: false,
        rarity: 'Rare'
    },
    {
        id: nanoid(),
        name: "Simple bow",
        image: "/items/bow_01.png",
        type: 'weapon',
        damage: 30,
        attackSpeed: 1.4,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.attackSpeed, value: getRandomModifier(10,30)},
            {name: ItemStatistics.damage, value: getRandomModifier(10,30)},
            {name: ItemStatistics.dexterity, value: getRandomModifier(10,30)},
            {name: ItemStatistics.luck, value: getRandomModifier(10,30)},
            {name: ItemStatistics.strength, value: getRandomModifier(10,30)}
        ],
        price: 250,
        isOnSale: false,
        rarity: 'Epic'
    },
    {
        id: nanoid(),
        name: "Cannon bow",
        image: "/items/bow_02.png",
        type: 'weapon',
        damage: 50,
        attackSpeed: 2,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.attackSpeed, value: 50},
            {name: ItemStatistics.damage, value: getRandomModifier(-50,-25)},
            {name: ItemStatistics.luck, value: getRandomModifier(10,50)},
        ],
        price: 500,
        isOnSale: false,
        rarity: 'Unique'
    },
]