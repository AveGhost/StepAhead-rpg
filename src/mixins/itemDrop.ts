import { items } from "../api/items";

const commonItems = items.filter(item => item.rarity === "Common")
const uncommonItems = items.filter(item => item.rarity === "Uncommon")
const rareItems = items.filter(item => item.rarity === "Rare")
const epicItems = items.filter(item => item.rarity === "Epic")
const uniqueItems = items.filter(item => item.rarity === "Unique")

export const ItemDrop = () => {
    const dropChance = Math.floor(Math.random() * 100) + 1
    if(dropChance <= 1) {
        const uniqueItem = uniqueItems[Math.floor(Math.random() * uniqueItems.length)]
        return uniqueItem
    } else if(dropChance > 1 && dropChance <= 5) {
        const epicItem = epicItems[Math.floor(Math.random() * epicItems.length)]
        return epicItem
    } else if(dropChance > 5 && dropChance <= 10) {
        const rareItem = rareItems[Math.floor(Math.random() * rareItems.length)]
        return rareItem
    } else if(dropChance > 10 && dropChance <= 25) {
        const uncommonItem = uncommonItems[Math.floor(Math.random() * uncommonItems.length)]
        return uncommonItem
    } else if(dropChance > 25 && dropChance <= 45) {
        const commonItem = commonItems[Math.floor(Math.random() * commonItems.length)]
        return commonItem
    } else {
        return
    }
}