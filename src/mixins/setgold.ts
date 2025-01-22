import { Player } from "../models/characters";

export const setGold = (prev: Player, gold: number): Player => {
    return { ...prev, gold: prev.gold! + gold };
};
