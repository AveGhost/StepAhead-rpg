import { Player } from "../models/characters";

export const setStats = (prev: Player, stat: string, value: number, skillPoints: number): Player => {
    if (skillPoints <= 0) return prev;

    if (!(stat in prev.attributes!)) return prev;

    return {
        ...prev,
        attributes: {
            ...prev.attributes!,
            [stat]: value + 1,
        },
        skillPoints: prev.skillPoints! - 1,
    };
};
