import { items } from "../api/items"

export const initializeSlots = () => {
    const slots = Array(6).fill([]);
    for (let i = 0; i < items.length; i++) {
        slots[i] = items[i];
    }
    return slots;
};