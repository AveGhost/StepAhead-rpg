import type { Item } from "../../models/items"
import ItemDefaultStatistic from "./item-statistic"
import { Icon } from "@iconify/react/dist/iconify.js"
const Item = ({item, children}: {item?: Item, children?: React.ReactNode}) => {
    return (
        <div className="p-4 group">
            {item?.stats !== undefined &&
                <div className="text-[#C19A6B] text-center absolute -top-full left-0 opacity-0 group-hover:opacity-100 bg-gray-700 p-4 transition-opacity duration-300 w-full h-full overflow-y-auto pointer-events-none">
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
            <img src={item?.image} className="w-full object-contain max-w-[60px] mx-auto"/>
            <p className="text-center">{item?.name}</p>
            {children}
        </div>
    )
}

export default Item