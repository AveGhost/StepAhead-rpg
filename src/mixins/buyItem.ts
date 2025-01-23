import { Player } from "../models/characters"
import { Item } from "../models/items"

export const buyItem = (player: Player, item: Item, inventory: (Item | null)[], setInventory: (inventory: (Item | null)[]) => Item) => {
    if(player.gold >= item.price!) {
        player.gold -= item.price!
        const emptyIndex = inventory.findIndex((slot) => slot === null)
        if(emptyIndex !== -1) {
            const newInventory = [...inventory]
            newInventory[emptyIndex] = item
            setInventory(newInventory)
        }
    }
}