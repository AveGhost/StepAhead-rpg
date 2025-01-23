import type { Item } from "../../models/items"
import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext } from "react";
import { playerInfoContext } from "../../context/player-info.context";
import { Player } from "../../models/characters";
export const BasicStats = ({ name, value }: { name: string; value: number }) => {
    return <p className="text-white flex justify-between">{name}: {value}</p>;
};
const ShopItem = ({item, buyItem}: {item?: Item, buyItem: (playerInfo: Player, item: Item) => void}) => {
    const {playerInfo} = useContext(playerInfoContext)!

    return (
        item?.name && (
            <div className="p-4 group">
                <div className="text-[#C19A6B] text-center absolute -top-full left-0 opacity-0 group-hover:opacity-100 bg-gray-700 p-4 transition-opacity duration-300 w-full h-full overflow-y-auto pointer-events-none">
                    <span className="flex items-center text-white gap-2">{item?.price} <Icon icon="wpf:coins" width="16" height="16"  style={{color: '#fff'}} /></span>
                    {item?.damage ? (
                            <BasicStats name="Damage" value={item?.damage} />
                        ) : item?.arrmor && item?.evasion ? (
                            <>
                                <BasicStats name="Arrmor" value={item?.arrmor} />
                                <BasicStats name="Evasion" value={item?.evasion} />
                            </>
                        ) : item?.arrmor ? (
                            <BasicStats name="Arrmor" value={item?.arrmor} />
                        ) : item?.evasion ? (
                            <BasicStats name="Evasion" value={item?.evasion} />
                        ) : ''
                    }
                    {item?.stats !== undefined &&
                        item.stats.map((stat,index) => (
                            <p className="flex justify-between text-[.8rem]" key={index}>{stat.name}: {stat.value}</p>
                        ))
                    }
                </div>
                <img src={item?.image} className="w-full object-contain max-w-[60px] mx-auto"/>
                <p className="text-center">{item?.name}</p>
                <button onClick={() => buyItem(playerInfo, item)} className="bg-[#C19A6B] w-full mt-3 p-2">Buy</button>
            </div>
        )
    )
}

export default ShopItem