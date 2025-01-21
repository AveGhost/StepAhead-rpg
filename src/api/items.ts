import { Item } from "../models/items"

export const items: Item[] = [
    {
        name: "Simple bow",
        image: "/items/bow_01.png",
        type: 'weapon',
        isEquipped: false,
        stats: [
            {name: "Dexterity", value: `+${15}`},
            {name: 'Attack speed', value: `+${5}%`},
        ]
    },
    {
        name: "Simple boots",
        image: "/items/boots_02.png",
        type: 'boots',
        isEquipped: false,
        stats: [
            {name: "Dexterity", value: `+${15}`},
            {name: 'Attack speed', value: `+${5}%`},
        ]
    }
]