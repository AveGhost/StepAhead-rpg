import { Item } from "../models/items"
import { ItemStatistics } from "../models/items"
import { nanoid } from 'nanoid'
import { getRandomModifier } from "../mixins/getRandomModifier"

export const helmets: Item[] = [
    {
        id: nanoid(),
        name: "Simple hood",
        image: "/items/headgear_01.png",
        type: 'helmet',
        evasion: 5,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(1,5)},
            {name: ItemStatistics.arrmor, value: getRandomModifier(1,5)}
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Simple hood",
        image: "/items/headgear_01.png",
        type: 'helmet',
        evasion: 5,
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
        name: "Simple hood",
        image: "/items/headgear_01.png",
        type: 'helmet',
        evasion: 5,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: getRandomModifier(1,5)}
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Simple hood",
        image: "/items/headgear_01.png",
        type: 'helmet',
        evasion: 5,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(1,5)},
            {name: ItemStatistics.dexterity, value: getRandomModifier(1,5)}
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Simple hood",
        image: "/items/headgear_01.png",
        type: 'helmet',
        evasion: 5,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(1,5)},
            {name: ItemStatistics.endurance, value: getRandomModifier(1,5)}
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Simple hood",
        image: "/items/headgear_01.png",
        type: 'helmet',
        evasion: 5,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.endurance, value: getRandomModifier(1,5)},
            {name: ItemStatistics.luck, value: getRandomModifier(1,5)}
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Simple hood",
        image: "/items/headgear_01.png",
        type: 'helmet',
        evasion: 7,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(3,7)},
            {name: ItemStatistics.arrmor, value: getRandomModifier(3,7)}
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Simple hood",
        image: "/items/headgear_01.png",
        type: 'helmet',
        evasion: 7,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(3,7)},
            {name: ItemStatistics.endurance, value: getRandomModifier(3,7)}
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Simple hood",
        image: "/items/headgear_01.png",
        type: 'helmet',
        evasion: 7,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: getRandomModifier(3,7)}
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Simple hood",
        image: "/items/headgear_01.png",
        type: 'helmet',
        evasion: 7,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(3,7)},
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Simple hood",
        image: "/items/headgear_01.png",
        type: 'helmet',
        evasion: 7,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(3,7)},
            {name: ItemStatistics.arrmor, value: getRandomModifier(3,7)},
            {name: ItemStatistics.luck, value: getRandomModifier(3,7)}
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Simple hood",
        image: "/items/headgear_01.png",
        type: 'helmet',
        evasion: 7,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(3,7)},
            {name: ItemStatistics.arrmor, value: getRandomModifier(3,7)},
            {name: ItemStatistics.endurance, value: getRandomModifier(3,7)}
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Simple hood",
        image: "/items/headgear_01.png",
        type: 'helmet',
        evasion: 10,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(10,20)},
            {name: ItemStatistics.arrmor, value: getRandomModifier(10,20)},
            {name: ItemStatistics.luck, value: getRandomModifier(10,20)},
            {name: ItemStatistics.endurance, value: getRandomModifier(10,20)}
        ],
        price: 50,
        isOnSale: false,
        rarity: 'Rare'
    },
    {
        id: nanoid(),
        name: "Simple hood",
        image: "/items/headgear_01.png",
        type: 'helmet',
        evasion: 10,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(10,20)},
            {name: ItemStatistics.arrmor, value: getRandomModifier(10,20)},
            {name: ItemStatistics.dexterity, value: getRandomModifier(10,20)},
            {name: ItemStatistics.endurance, value: getRandomModifier(10,20)}
        ],
        price: 50,
        isOnSale: false,
        rarity: 'Rare'
    },
    {
        id: nanoid(),
        name: "Simple hood",
        image: "/items/headgear_01.png",
        type: 'helmet',
        evasion: 20,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(10,30)},
            {name: ItemStatistics.arrmor, value: getRandomModifier(10,30)},
            {name: ItemStatistics.luck, value: getRandomModifier(10,30)},
            {name: ItemStatistics.dexterity, value: getRandomModifier(10,30)},
            {name: ItemStatistics.endurance, value: getRandomModifier(10,30)}
        ],
        price: 250,
        isOnSale: false,
        rarity: 'Epic'
    },
    {
        id: nanoid(),
        name: "Hoodie hood",
        image: "/items/headgear_02.png",
        type: 'helmet',
        evasion: 30,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: 50},
            {name: ItemStatistics.arrmor, value: getRandomModifier(-50,-25)},
            {name: ItemStatistics.luck, value: getRandomModifier(10,30)},
        ],
        price: 500,
        isOnSale: false,
        rarity: 'Unique'
    },
    {
        id: nanoid(),
        name: "Simple helmet",
        image: "/items/headgear_01.png",
        type: 'helmet',
        arrmor: 5,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(1,5)},
            {name: ItemStatistics.arrmor, value: getRandomModifier(1,5)},
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Simple helmet",
        image: "/items/headgear_01.png",
        type: 'helmet',
        arrmor: 5,
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
        name: "Simple helmet",
        image: "/items/headgear_01.png",
        type: 'helmet',
        arrmor: 5,
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
        name: "Simple helmet",
        image: "/items/headgear_01.png",
        type: 'helmet',
        arrmor: 5,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.endurance, value: getRandomModifier(1,5)},
            {name: ItemStatistics.arrmor, value: getRandomModifier(1,5)},
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Simple helmet",
        image: "/items/headgear_01.png",
        type: 'helmet',
        arrmor: 5,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.strength, value: getRandomModifier(1,5)},
            {name: ItemStatistics.arrmor, value: getRandomModifier(1,5)},
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Simple helmet",
        image: "/items/headgear_01.png",
        type: 'helmet',
        arrmor: 5,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.strength, value: getRandomModifier(1,5)},
            {name: ItemStatistics.arrmor, value: getRandomModifier(1,5)},
            {name: ItemStatistics.endurance, value: getRandomModifier(1,5)}
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Simple helmet",
        image: "/items/headgear_01.png",
        type: 'helmet',
        arrmor: 7,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(3,7)},
            {name: ItemStatistics.arrmor, value: getRandomModifier(3,7)},
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Simple helmet",
        image: "/items/headgear_01.png",
        type: 'helmet',
        arrmor: 7,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(3,7)},
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Simple helmet",
        image: "/items/headgear_01.png",
        type: 'helmet',
        arrmor: 7,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: getRandomModifier(3,7)},
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Simple helmet",
        image: "/items/headgear_01.png",
        type: 'helmet',
        arrmor: 7,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(3,7)},
            {name: ItemStatistics.arrmor, value: getRandomModifier(3,7)},
            {name: ItemStatistics.endurance, value: getRandomModifier(3,7)}
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Simple helmet",
        image: "/items/headgear_01.png",
        type: 'helmet',
        arrmor: 7,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: getRandomModifier(3,7)},
            {name: ItemStatistics.endurance, value: getRandomModifier(3,7)},
            {name: ItemStatistics.strength, value: getRandomModifier(3,7)}
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Simple helmet",
        image: "/items/headgear_01.png",
        type: 'helmet',
        arrmor: 7,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.strength, value: getRandomModifier(3,7)},
            {name: ItemStatistics.endurance, value: getRandomModifier(3,7)},
            {name: ItemStatistics.luck, value: getRandomModifier(3,7)}
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Simple helmet",
        image: "/items/headgear_01.png",
        type: 'helmet',
        arrmor: 7,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.luck, value: getRandomModifier(3,7)},
            {name: ItemStatistics.arrmor, value: getRandomModifier(3,7)},
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Simple helmet",
        image: "/items/headgear_01.png",
        type: 'helmet',
        arrmor: 7,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(3,7)},
            {name: ItemStatistics.arrmor, value: getRandomModifier(3,7)},
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Simple helmet",
        image: "/items/headgear_01.png",
        type: 'helmet',
        arrmor: 10,
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
        name: "Simple helmet",
        image: "/items/headgear_01.png",
        type: 'helmet',
        arrmor: 10,
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
        name: "Simple helmet",
        image: "/items/headgear_01.png",
        type: 'helmet',
        arrmor: 10,
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
        name: "Simple helmet",
        image: "/items/headgear_01.png",
        type: 'helmet',
        arrmor: 10,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: getRandomModifier(10,20)},
            {name: ItemStatistics.luck, value: getRandomModifier(10,20)},
            {name: ItemStatistics.endurance, value: getRandomModifier(10,20)},
            {name: ItemStatistics.strength, value: getRandomModifier(10,20)}
        ],
        price: 50,
        isOnSale: false,
        rarity: 'Rare'
    },
    {
        id: nanoid(),
        name: "Simple helmet",
        image: "/items/headgear_01.png",
        type: 'helmet',
        arrmor: 20,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(10,30)},
            {name: ItemStatistics.arrmor, value: getRandomModifier(10,30)},
            {name: ItemStatistics.endurance, value: getRandomModifier(10,30)},
            {name: ItemStatistics.strength, value: getRandomModifier(10,30)},
            {name: ItemStatistics.luck, value: getRandomModifier(10,30)},
        ],
        price: 250,
        isOnSale: false,
        rarity: 'Epic'
    },
    {
        id: nanoid(),
        name: "Soldier helmet",
        image: "/items/headgear_02.png",
        type: 'helmet',
        arrmor: 30,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: 50},
            {name: ItemStatistics.evasion, value: getRandomModifier(-50,-25)},
            {name: ItemStatistics.strength, value: getRandomModifier(10,30)}
        ],
        price: 500,
        isOnSale: false,
        rarity: 'Unique'
    },
    {
        id: nanoid(),
        name: "Cool glasses",
        image: "/items/glasses.png",
        type: 'helmet',
        arrmor: 20,
        evasion: 20,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.luck, value: getRandomModifier(20,50)},
            {name: ItemStatistics.strength, value: getRandomModifier(10,40)},
            {name: ItemStatistics.dexterity, value: getRandomModifier(10,40)}
        ],
        price: 500,
        isOnSale: false,
        rarity: 'Unique'
    },
]
