import { Item } from "../models/items"
import { ItemStatistics } from "../models/items"
import { nanoid } from 'nanoid'

export const items: Item[] = [
    {
        id: nanoid(),
        name: "Simple bow",
        image: "/items/bow_01.png",
        type: 'weapon',
        damage: 10,
        attackSpeed: 1,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.attackSpeed, value: 5},
            {name: ItemStatistics.damage, value: 5}
        ],
        price: 100,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Wooden boots",
        image: "/items/boots_02.png",
        type: 'boots',
        arrmor: 2,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: 5},
            {name: ItemStatistics.evasion, value: 5}
        ],
        price: 50,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: "Magic bow",
        image: "/items/bow_02.png",
        type: 'weapon',
        damage: 40,
        attackSpeed: 10,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.attackSpeed, value: 5},
            {name: ItemStatistics.damage, value: 5}
        ],
        price: 100,
        isOnSale: false,
        rarity: 'Epic'
    },
    {
        id: nanoid(),
        name: 'Wooden gloves',
        image: '/items/glove_01.png',
        type: 'gloves',
        isEquipped: false,
        stats: [
            {name: ItemStatistics.dexterity, value: 5},
            {name: ItemStatistics.endurance, value: 5}
        ],
        price: 10,
        isOnSale: false,
        rarity: 'Common'
    },
    {
        id: nanoid(),
        name: 'Wooden arrmor',
        image: '/items/leather_armor.png',
        type: 'arrmor',
        isEquipped: false,
        arrmor: 5,
        price: 0,
        isOnSale: false,
    }
]