import { items } from "../api/items";

export const initializeShop = () => {
    const slots = Array(6).fill([]);
    items.forEach((item, index) => {
        if(item.isOnSale && index < 6) {
            slots[index] = item
        }
    })
    return slots;
}