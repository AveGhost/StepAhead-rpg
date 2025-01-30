import type { Item } from "../../models/items"
import ItemDefaultStatistic from "./item-statistic"
import { Icon } from "@iconify/react/dist/iconify.js"

const itemRarity = (item?: Item) => {
    if (item?.rarity === 'Common') {
        return 'common'
    } else if (item?.rarity === 'Uncommon') {
        return 'uncommon'
    } else if (item?.rarity === 'Rare') {
        return 'rare'
    } else if (item?.rarity === 'Epic') {
        return 'epic'
    } else if (item?.rarity === 'Unique') {
        return 'unique'
    }
}
const Item = ({item, children}: {item?: Item, children?: React.ReactNode}) => {
    return (
        <div className="p-4 group h-full flex flex-col">
            {item?.stats !== undefined &&
                <div className="text-[#C19A6B] h-0 pointer-events-none text-center absolute -top-full left-0 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:h-full bg-gray-700 p-4 transition-all duration-300 w-full overflow-y-auto">
                    <div className="text-white flex justify-between mb-2">
                        <p>Price:</p>
                        <span className="flex items-center gap-2">{item.price} <Icon icon="wpf:coins" width="12" height="12"  style={{color: '#fff'}} /></span>
                    </div>
                    <ItemDefaultStatistic item={item} />
                    {item.stats.map((stat,index) => (
                        <p className="flex justify-between text-[.8rem]" key={index}>{stat.name}: {stat.value}</p>
                    ))}
                </div>
            }
            <div className="flex flex-col justify-center items-center h-full">
                {item?.image !== '' &&
                    <div className={`rounded-full p-2 aspect-square w-full max-w-[50px] mx-auto flex justify-center items-center ${itemRarity(item)}`}>
                        <img src={item?.image} className="w-full object-contain rounded-full"/>
                    </div>
                }
                <p className="text-center">{item?.name}</p>
                {children}
            </div>
        </div>
    )
}

export default Item