import { Link } from "react-router"
import { Icon } from "@iconify/react/dist/iconify.js"
import ItemBox from "../components/inventory/item-box"
import Item from "../components/inventory/item"
import { InventoryContext } from "../context/inventory.context"
import { useContext } from "react"
import { playerInfoContext } from "../context/player-info.context"
const Inventory = () => {
    const { characterSlots, equipItem, unequipItem, slots } = useContext(InventoryContext)!
    const {setStatsFromItem, removeStatsFromItem} = useContext(playerInfoContext)!
    return (
        <div className="bg-zinc-900 h-screen flex flex-col justify-around px-4">
            <Link to="/">
                <Icon icon="pixelarticons:close" className="fixed top-2 left-4" width="40" height="40"  style={{color: '#fff'}} />
            </Link>
            <div className="grid grid-rows-[auto auto auto] grid-cols-3 gap-4 w-full">
                {characterSlots.map((slot, index) => (
                    <ItemBox key={index} className={`${index === 0 ? "col-span-3 justify-self-center" : index >= 1 && index <= 3 ? "" : "col-span-3 justify-self-center" }`}>
                        <Item item={slot} unequipItem={unequipItem} removeItemStats={removeStatsFromItem} />
                    </ItemBox>
                ))}
            </div>
            <ul className="grid grid-cols-3 gap-4">
                {slots.map((slot, index) => (
                    <ItemBox key={index}>
                        <Item equipItem={equipItem} setItemStats={setStatsFromItem} item={slot} />
                    </ItemBox>
                ))}
            </ul>
        </div>
    )
}

export default Inventory