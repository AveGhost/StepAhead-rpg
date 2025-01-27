import { items } from "../api/items";
export const initializeSlots = () => {
    const slots = Array(6).fill([]);
    items.forEach((item, index) => {
        if (index < 6) {
            slots[index] = item;
        }
    })
    return slots;
};