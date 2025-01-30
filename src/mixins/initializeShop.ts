import { ShopItemDrop } from "./shopItemsDrop";

export const initializeShop = () => {
    const slots = Array(6).fill([]);
    for(let i = 0; i < 6; i++) {
        slots[i] = ShopItemDrop()
    }
    return slots;
}