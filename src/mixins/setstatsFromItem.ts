import { Player } from "../models/characters";
import { Item } from "../models/items";
import { GameStatistics } from "../models/characters";

export const setStatsFromItem = (prev: Player, item: Item): Player => {
    const updatedStatistics: GameStatistics = {
        attackSpeed: prev.statistics?.attackSpeed ?? 0,
        damage: prev.statistics?.damage ?? 0,
        arrmor: prev.statistics?.arrmor ?? 0,
        evasion: prev.statistics?.evasion ?? 0,
    };

    if(item.type === "weapon") {
        updatedStatistics.damage += item.damage!
    } else {
        updatedStatistics.arrmor += item.arrmor ?? 0
        updatedStatistics.evasion += item.evasion ?? 0
    }

    item.stats?.forEach((itemStat) => {
        const statName = itemStat.name as keyof GameStatistics;
        if (statName in updatedStatistics) {
            updatedStatistics[statName] += itemStat.value;
        }
    });

    return {
        ...prev,
        statistics: updatedStatistics,
    };
};

