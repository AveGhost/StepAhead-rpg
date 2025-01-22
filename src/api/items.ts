import { Item } from "../models/items"
import { ItemStatistics } from "../models/items"

export const items: Item[] = [
    {
        name: "Simple bow",
        image: "/items/bow_01.png",
        type: 'weapon',
        damage: 10,
        attackSpeed: 1,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.attackSpeed, value: 5},
            {name: ItemStatistics.damage, value: 5}
        ]
    },
    {
        name: "Simple boots",
        image: "/items/boots_02.png",
        type: 'boots',
        arrmor: 2,
        isEquipped: false,
        stats: [
            {name: ItemStatistics.arrmor, value: 5},
            {name: ItemStatistics.evasion, value: 5}
        ]
    }
]