import { Player } from "../models/characters";
export const setExp = (prev: Player, exp: number): Player => {
    const newExp = prev.exp! + exp;
    const levelUp = newExp >= prev.requiredExp!;
    return {
        ...prev,
        exp: levelUp ? newExp - prev.requiredExp! : newExp,
        lvl: levelUp ? prev.lvl! + 1 : prev.lvl,
        requiredExp: levelUp ? prev.requiredExp! + 20 : prev.requiredExp!,
        skillPoints: levelUp ? prev.skillPoints! + 1 : prev.skillPoints,
    };
};
