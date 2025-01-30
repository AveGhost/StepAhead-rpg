import { Link } from "react-router"
import { Icon } from "@iconify/react/dist/iconify.js"
import ItemBox from "../components/inventory/item-box"
import Item from "../components/inventory/item"
import { InventoryContext } from "../context/inventory.context"
import { playerInfoContext } from "../context/player-info.context"
import { useContext, useEffect } from "react"
import ItemButton from "../components/inventory/item-button"
import { NotificationContext } from "../context/notification.context"
const Inventory = () => {
    const { characterSlots, slots, equipItem, unequipItem } = useContext(InventoryContext)!
    const {setStatsFromItem, removeStatsFromItem} = useContext(playerInfoContext)!
    const {isNewItem, setIsNewItem} = useContext(NotificationContext)!

    useEffect(() => {
        if(isNewItem) setIsNewItem(false)
    },[])

    const handleEquip = (item: Item) => {
        equipItem(item)
        setStatsFromItem(item)
    }

    const handleUnequip = (item: Item) => {
        unequipItem(item)
        removeStatsFromItem(item)
    }

    return (
        <div className="bg-zinc-900 h-full flex flex-col justify-around px-4">
            <Link to="/">
                <Icon icon="pixelarticons:close" className="fixed top-2 left-4" width="40" height="40"  style={{color: '#fff'}} />
            </Link>
            <div className="grid grid-rows-[auto auto auto] grid-cols-3 gap-4 w-full py-4">
                {characterSlots.map((slot, index) => (
                    <ItemBox key={index} className={`${index === 0 ? "col-span-3 justify-self-center" : index >= 1 && index <= 3 ? "" : "col-span-3 justify-self-center" }`}>
                        <Item item={slot}>
                            {slot.isEquipped && <ItemButton name='Unequip' onClick={() => handleUnequip(slot)} />}
                        </Item>
                    </ItemBox>
                ))}
            </div>
            <ul className="grid grid-cols-2 gap-4 py-4">
                {slots.map((slot, index) => (
                    <ItemBox key={index}>
                        <Item item={slot}>
                            {slot.isEquipped === false && <ItemButton name='Equip' onClick={() => handleEquip(slot)} />}
                        </Item>
                    </ItemBox>
                ))}
            </ul>
        </div>
    )
}

export default Inventory