import { Item } from "../models/items"
import { ItemStatistics } from "../models/items"
import { nanoid } from 'nanoid'
import { getRandomModifier } from "../mixins/getRandomModifier"

export const boots: Item[] = [
    {
        id: nanoid(),
        name: "Simple boots",
        image: "/items/boots_02.png",
        type: 'boots',
        arrmor: 2,
        evasion: 2,
        isEquipped: false,
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Simple boots",
        image: "/items/boots_02.png",
        type: 'boots',
        arrmor: 2,
        evasion: 2,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(1,5)},
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Simple boots",
        image: "/items/boots_02.png",
        type: 'boots',
        arrmor: 2,
        evasion: 2,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: getRandomModifier(1,5)},
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Simple boots",
        image: "/items/boots_02.png",
        type: 'boots',
        arrmor: 2,
        evasion: 2,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.dexterity, value: getRandomModifier(1,5)},
            {name: ItemStatistics.luck, value: getRandomModifier(1,5)},
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Simple boots",
        image: "/items/boots_02.png",
        type: 'boots',
        arrmor: 2,
        evasion: 2,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.endurance, value: getRandomModifier(1,5)},
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Simple boots",
        image: "/items/boots_02.png",
        type: 'boots',
        arrmor: 2,
        evasion: 2,
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
        name: "Simple boots",
        image: "/items/boots_02.png",
        type: 'boots',
        arrmor: 4,
        evasion: 4,
        isEquipped: false,
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Simple glove",
        image: "/items/glove_01.png",
        type: 'gloves',
        arrmor: 4,
        evasion: 4,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(1,5)},
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Simple boots",
        image: "/items/boots_02.png",
        type: 'boots',
        arrmor: 4,
        evasion: 4,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(1,5)},
            {name: ItemStatistics.arrmor, value: getRandomModifier(3,7)}
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Simple boots",
        image: "/items/boots_02.png",
        type: 'boots',
        arrmor: 4,
        evasion: 4,
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
        name: "Simple boots",
        image: "/items/boots_02.png",
        type: 'boots',
        arrmor: 4,
        evasion: 4,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.dexterity, value: getRandomModifier(3,7)},
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Simple boots",
        image: "/items/boots_02.png",
        type: 'boots',
        arrmor: 4,
        evasion: 4,
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
        name: "Simple boots",
        image: "/items/boots_02.png",
        type: 'boots',
        arrmor: 4,
        evasion: 4,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(3,7)},
            {name: ItemStatistics.dexterity, value: getRandomModifier(3,7)}
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Simple boots",
        image: "/items/boots_02.png",
        type: 'boots',
        arrmor: 4,
        evasion: 4,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: getRandomModifier(3,7)},
            {name: ItemStatistics.strength, value: getRandomModifier(3,7)}
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Simple boots",
        image: "/items/boots_02.png",
        type: 'boots',
        arrmor: 6,
        evasion: 6,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(10,20)},
            {name: ItemStatistics.arrmor, value: getRandomModifier(10,20)},
        ],
        price: 50,
        isOnSale: false,
        rarity: 'Rare'
    },
    {
        id: nanoid(),
        name: "Simple boots",
        image: "/items/boots_02.png",
        type: 'boots',
        arrmor: 6,
        evasion: 6,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(10,20)},
            {name: ItemStatistics.arrmor, value: getRandomModifier(10,20)},
            {name: ItemStatistics.dexterity, value: getRandomModifier(10,20)}
        ],
        price: 50,
        isOnSale: false,
        rarity: 'Rare'
    },
    {
        id: nanoid(),
        name: "Simple boots",
        image: "/items/boots_02.png",
        type: 'boots',
        arrmor: 6,
        evasion: 6,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(10,20)},
            {name: ItemStatistics.arrmor, value: getRandomModifier(10,20)},
            {name: ItemStatistics.strength, value: getRandomModifier(10,20)}
        ],
        price: 50,
        isOnSale: false,
        rarity: 'Rare'
    },
    {
        id: nanoid(),
        name: "Simple boots",
        image: "/items/boots_02.png",
        type: 'boots',
        arrmor: 6,
        evasion: 6,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(10,20)},
            {name: ItemStatistics.arrmor, value: getRandomModifier(10,20)},
            {name: ItemStatistics.endurance, value: getRandomModifier(10,20)}
        ],
        price: 50,
        isOnSale: false,
        rarity: 'Rare'
    },
    {
        id: nanoid(),
        name: "Simple boots",
        image: "/items/boots_02.png",
        type: 'boots',
        arrmor: 6,
        evasion: 6,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(10,20)},
            {name: ItemStatistics.arrmor, value: getRandomModifier(10,20)},
            {name: ItemStatistics.luck, value: getRandomModifier(10,20)}
        ],
        price: 50,
        isOnSale: false,
        rarity: 'Rare'
    },
    {
        id: nanoid(),
        name: "Simple boots",
        image: "/items/boots_02.png",
        type: 'boots',
        arrmor: 10,
        evasion: 10,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(10,30)},
            {name: ItemStatistics.arrmor, value: getRandomModifier(10,30)},
            {name: ItemStatistics.endurance, value: getRandomModifier(10,30)},
            {name: ItemStatistics.strength, value: getRandomModifier(10,30)},
            {name: ItemStatistics.dexterity, value: getRandomModifier(10,30)},
        ],
        price: 250,
        isOnSale: false,
        rarity: 'Epic'
    },
    {
        id: nanoid(),
        name: "Stone boots",
        image: "/items/leather_boots_02.png",
        type: 'boots',
        arrmor: 50,
        evasion: 50,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.strength, value: getRandomModifier(-10,-5)},
            {name: ItemStatistics.dexterity, value: getRandomModifier(-10,-5)},
            {name: ItemStatistics.endurance, value: getRandomModifier(-10,-5)},
            {name: ItemStatistics.luck, value: getRandomModifier(-10,-5)}
        ],
        price: 500,
        isOnSale: false,
        rarity: 'Unique'
    },
]