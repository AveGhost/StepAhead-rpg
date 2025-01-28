import { Player } from "../models/characters";

export const removeGold = (prev: Player, gold: number): Player => {
    return { ...prev, gold: prev.gold! - gold };
};
