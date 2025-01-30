import { items } from "../api/items";

const commonItems = items.filter(item => item.rarity === "Common")
const uncommonItems = items.filter(item => item.rarity === "Uncommon")
const rareItems = items.filter(item => item.rarity === "Rare")
const epicItems = items.filter(item => item.rarity === "Epic")

export const ShopItemDrop = () => {
    const dropChance = Math.floor(Math.random() * 100) + 1
    if(dropChance > 1 && dropChance <= 3) {
        const epicItem = epicItems[Math.floor(Math.random() * epicItems.length)]
        epicItem.isOnSale = true
        return epicItem
    } else if(dropChance > 5 && dropChance <= 10) {
        const rareItem = rareItems[Math.floor(Math.random() * rareItems.length)]
        rareItem.isOnSale = true
        return rareItem
    } else if(dropChance > 10 && dropChance <= 25) {
        const uncommonItem = uncommonItems[Math.floor(Math.random() * uncommonItems.length)]
        uncommonItem.isOnSale = true
        return uncommonItem
    } else {
        const commonItem = commonItems[Math.floor(Math.random() * commonItems.length)]
        commonItem.isOnSale = true
        return commonItem
    }
}