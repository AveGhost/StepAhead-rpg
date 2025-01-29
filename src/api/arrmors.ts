import { Item } from "../models/items"
import { ItemStatistics } from "../models/items"
import { nanoid } from 'nanoid'
import { getRandomModifier } from "../mixins/getRandomModifier"

export const arrmors: Item[] = [
    {
        id: nanoid(),
        name: "Solid armor",
        image: "/items/leather_armor.png",
        type: 'arrmor',
        arrmor: 5,
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
        name: "Solid armor",
        image: "/items/leather_armor.png",
        type: 'arrmor',
        arrmor: 5,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: getRandomModifier(1,5)},
            {name: ItemStatistics.evasion, value: getRandomModifier(1,5)}
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Solid armor",
        image: "/items/leather_armor.png",
        type: 'arrmor',
        arrmor: 5,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: getRandomModifier(1,5)},
            {name: ItemStatistics.endurance, value: getRandomModifier(1,5)}
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Solid armor",
        image: "/items/leather_armor.png",
        type: 'arrmor',
        arrmor: 5,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: getRandomModifier(1,5)},
            {name: ItemStatistics.strength, value: getRandomModifier(1,5)}
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Solid armor",
        image: "/items/leather_armor.png",
        type: 'arrmor',
        arrmor: 7,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: getRandomModifier(3,7)},
            {name: ItemStatistics.evasion, value: getRandomModifier(3,7)},
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Solid armor",
        image: "/items/leather_armor.png",
        type: 'arrmor',
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
        name: "Solid armor",
        image: "/items/leather_armor.png",
        type: 'arrmor',
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
        name: "Solid armor",
        image: "/items/leather_armor.png",
        type: 'arrmor',
        arrmor: 7,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: getRandomModifier(3,7)},
            {name: ItemStatistics.strength, value: getRandomModifier(3,7)},
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Solid armor",
        image: "/items/leather_armor.png",
        type: 'arrmor',
        arrmor: 7,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: getRandomModifier(3,7)},
            {name: ItemStatistics.endurance, value: getRandomModifier(3,7)},
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Solid armor",
        image: "/items/leather_armor.png",
        type: 'arrmor',
        arrmor: 7,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: getRandomModifier(3,7)},
            {name: ItemStatistics.endurance, value: getRandomModifier(3,7)},
            {name: ItemStatistics.strength, value: getRandomModifier(3,7)},
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Solid armor",
        image: "/items/leather_armor.png",
        type: 'arrmor',
        arrmor: 7,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: getRandomModifier(3,7)},
            {name: ItemStatistics.luck, value: getRandomModifier(3,7)},
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Solid armor",
        image: "/items/leather_armor.png",
        type: 'arrmor',
        arrmor: 10,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: getRandomModifier(10,20)},
            {name: ItemStatistics.evasion, value: getRandomModifier(10,20)},
        ],
        price: 50,
        isOnSale: false,
        rarity: 'Rare'
    },
    {
        id: nanoid(),
        name: "Solid armor",
        image: "/items/leather_armor.png",
        type: 'arrmor',
        arrmor: 10,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: getRandomModifier(10,20)},
            {name: ItemStatistics.evasion, value: getRandomModifier(10,20)},
            {name: ItemStatistics.strength, value: getRandomModifier(10,20)}
        ],
        price: 50,
        isOnSale: false,
        rarity: 'Rare'
    },
    {
        id: nanoid(),
        name: "Solid armor",
        image: "/items/leather_armor.png",
        type: 'arrmor',
        arrmor: 10,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: getRandomModifier(10,20)},
            {name: ItemStatistics.evasion, value: getRandomModifier(10,20)},
            {name: ItemStatistics.endurance, value: getRandomModifier(10,20)}
        ],
        price: 50,
        isOnSale: false,
        rarity: 'Rare'
    },
    {
        id: nanoid(),
        name: "Solid armor",
        image: "/items/leather_armor.png",
        type: 'arrmor',
        arrmor: 10,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: getRandomModifier(10,20)},
            {name: ItemStatistics.endurance, value: getRandomModifier(10,20)},
            {name: ItemStatistics.strength, value: getRandomModifier(10,20)}
        ],
        price: 50,
        isOnSale: false,
        rarity: 'Rare'
    },
    {
        id: nanoid(),
        name: "Solid armor",
        image: "/items/leather_armor.png",
        type: 'arrmor',
        arrmor: 10,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: getRandomModifier(10,20)},
            {name: ItemStatistics.luck, value: getRandomModifier(10,20)},
        ],
        price: 50,
        isOnSale: false,
        rarity: 'Rare'
    },
    {
        id: nanoid(),
        name: "Solid armor",
        image: "/items/leather_armor.png",
        type: 'arrmor',
        arrmor: 20,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: getRandomModifier(10,20)},
            {name: ItemStatistics.evasion, value: getRandomModifier(10,20)},
            {name: ItemStatistics.endurance, value: getRandomModifier(10,20)},
            {name: ItemStatistics.strength, value: getRandomModifier(10,20)},
            {name: ItemStatistics.luck, value: getRandomModifier(10,20)}
        ],
        price: 250,
        isOnSale: false,
        rarity: 'Epic'
    },
    {
        id: nanoid(),
        name: "Black steel armor",
        image: "/items/iron_armor.png",
        type: 'arrmor',
        arrmor: 10,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.endurance, value: 50},
            {name: ItemStatistics.strength, value: getRandomModifier(10,40)},
            {name: ItemStatistics.dexterity, value: getRandomModifier(-20,-5)}
        ],
        price: 500,
        isOnSale: false,
        rarity: 'Unique'
    },
    {
        id: nanoid(),
        name: "Dirty robe",
        image: "/items/mantua.png",
        type: 'arrmor',
        evasion: 5,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(1,5)}
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Dirty robe",
        image: "/items/mantua.png",
        type: 'arrmor',
        evasion: 5,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: getRandomModifier(1,5)},
            {name: ItemStatistics.evasion, value: getRandomModifier(1,5)}
        ],
        price: 15,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Dirty robe",
        image: "/items/mantua.png",
        type: 'arrmor',
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
        name: "Dirty robe",
        image: "/items/mantua.png",
        type: 'arrmor',
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
        name: "Dirty robe",
        image: "/items/mantua.png",
        type: 'arrmor',
        evasion: 7,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: getRandomModifier(3,7)},
            {name: ItemStatistics.evasion, value: getRandomModifier(3,7)},
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Dirty robe",
        image: "/items/mantua.png",
        type: 'arrmor',
        evasion: 7,
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
        name: "Dirty robe",
        image: "/items/mantua.png",
        type: 'arrmor',
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
        name: "Dirty robe",
        image: "/items/mantua.png",
        type: 'arrmor',
        evasion: 7,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(3,7)},
            {name: ItemStatistics.dexterity, value: getRandomModifier(3,7)},
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Solid armor",
        image: "/items/leather_armor.png",
        type: 'arrmor',
        evasion: 7,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(3,7)},
            {name: ItemStatistics.endurance, value: getRandomModifier(3,7)},
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Dirty robe",
        image: "/items/mantua.png",
        type: 'arrmor',
        evasion: 7,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(3,7)},
            {name: ItemStatistics.endurance, value: getRandomModifier(3,7)},
            {name: ItemStatistics.dexterity, value: getRandomModifier(3,7)},
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Dirty robe",
        image: "/items/mantua.png",
        type: 'arrmor',
        evasion: 7,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(3,7)},
            {name: ItemStatistics.luck, value: getRandomModifier(3,7)},
        ],
        price: 25,
        isOnSale: false,
        rarity: 'Uncommon'
    },
    {
        id: nanoid(),
        name: "Dirty robe",
        image: "/items/mantua.png",
        type: 'arrmor',
        evasion: 10,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: getRandomModifier(10,20)},
            {name: ItemStatistics.evasion, value: getRandomModifier(10,20)},
        ],
        price: 50,
        isOnSale: false,
        rarity: 'Rare'
    },
    {
        id: nanoid(),
        name: "Dirty robe",
        image: "/items/mantua.png",
        type: 'arrmor',
        evasion: 10,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: getRandomModifier(10,20)},
            {name: ItemStatistics.evasion, value: getRandomModifier(10,20)},
            {name: ItemStatistics.dexterity, value: getRandomModifier(10,20)}
        ],
        price: 50,
        isOnSale: false,
        rarity: 'Rare'
    },
    {
        id: nanoid(),
        name: "Dirty robe",
        image: "/items/mantua.png",
        type: 'arrmor',
        evasion: 10,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: getRandomModifier(10,20)},
            {name: ItemStatistics.evasion, value: getRandomModifier(10,20)},
            {name: ItemStatistics.endurance, value: getRandomModifier(10,20)}
        ],
        price: 50,
        isOnSale: false,
        rarity: 'Rare'
    },
    {
        id: nanoid(),
        name: "Dirty robe",
        image: "/items/mantua.png",
        type: 'arrmor',
        evasion: 10,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(10,20)},
            {name: ItemStatistics.endurance, value: getRandomModifier(10,20)},
            {name: ItemStatistics.dexterity, value: getRandomModifier(10,20)}
        ],
        price: 50,
        isOnSale: false,
        rarity: 'Rare'
    },
    {
        id: nanoid(),
        name: "Dirty robe",
        image: "/items/mantua.png",
        type: 'arrmor',
        evasion: 10,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.evasion, value: getRandomModifier(10,20)},
            {name: ItemStatistics.luck, value: getRandomModifier(10,20)},
        ],
        price: 50,
        isOnSale: false,
        rarity: 'Rare'
    },
    {
        id: nanoid(),
        name: "Dirty robe",
        image: "/items/mantua.png",
        type: 'arrmor',
        evasion: 20,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: getRandomModifier(10,20)},
            {name: ItemStatistics.evasion, value: getRandomModifier(10,20)},
            {name: ItemStatistics.endurance, value: getRandomModifier(10,20)},
            {name: ItemStatistics.strength, value: getRandomModifier(10,20)},
            {name: ItemStatistics.luck, value: getRandomModifier(10,20)}
        ],
        price: 250,
        isOnSale: false,
        rarity: 'Epic'
    },
    {
        id: nanoid(),
        name: "Stealth robe",
        image: "/items/fablic_clothe.png",
        type: 'arrmor',
        evasion: 10,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.dexterity, value: 50},
            {name: ItemStatistics.luck, value: getRandomModifier(10,15)},
            {name: ItemStatistics.strength, value: getRandomModifier(-20,-5)}
        ],
        price: 500,
        isOnSale: false,
        rarity: 'Unique'
    },
]