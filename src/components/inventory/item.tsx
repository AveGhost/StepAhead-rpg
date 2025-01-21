import type { Item } from "../../models/items"

const Item = ({item, equipItem, unequipItem}: {item?: Item, equipItem?: (item: Item) => void, unequipItem?: (item: Item) => void}) => {
    return (
        <div className="p-4 group">
            {item?.stats !== undefined &&
                <div className="text-[#C19A6B] text-center absolute -top-full left-0 opacity-0 group-hover:opacity-100 bg-gray-700 p-4 transition-opacity duration-300 w-full h-full overflow-y-auto pointer-events-none">
                    {item.stats.map((stat,index) => (
                        <p className="flex justify-between text-[.8rem]" key={index}>{stat.name}: {stat.value}</p>
                    ))}
                </div>
            }
            <img src={item?.image} className="w-full object-contain max-w-[60px] mx-auto"/>
            <p className="text-center">{item?.name}</p>
            {item?.isEquipped === false ? (
                    <button onClick={() => equipItem && equipItem(item)} className="text-center bg-[#C19A6B] w-full p-1 mt-3">Equip</button>
                ) : item?.isEquipped === true ? (
                    <button onClick={() => unequipItem && unequipItem(item)} className="text-center bg-[#C19A6B] w-full p-1 mt-3">Unequip</button>
                ) : ''
            }
        </div>
    )
}

export default Item