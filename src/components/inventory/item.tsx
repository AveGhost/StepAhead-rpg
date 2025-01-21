import type { Item } from "../../models/items"

const Item = ({item}: {item?: Item}) => {
    return (
        <div className="p-4 relative group overflow-hidden">
            {item?.stats &&
                <div className="text-[#C19A6B] text-center absolute top-0 left-0 opacity-0 group-hover:opacity-100 bg-black/80 p-4 transition-opacity duration-300 w-full h-full overflow-y-auto">
                    {item.stats.map((stat,index) => (
                        <p className="flex justify-between text-[.8rem]" key={index}>{stat.name}: {stat.value}</p>
                    ))}
                </div>
            }
            <img src={item?.image} className="w-full h-full"/>
            <p className="text-center">{item?.name}</p>
        </div>
    )
}

export default Item