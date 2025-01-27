import { Link } from "react-router"
import { Icon } from "@iconify/react/dist/iconify.js"
import ItemBox from "../components/inventory/item-box"
import Item from "../components/inventory/item"
import ItemButton from "../components/inventory/item-button"
import { InventoryContext } from "../context/inventory.context"
import { useContext } from "react"
import { playerInfoContext } from "../context/player-info.context"
import { Player } from "../models/characters"
const Shop = () => {
    const {buyItem, shopSlots} = useContext(InventoryContext)!
    const { playerInfo } = useContext(playerInfoContext)!

    const handleBuy = (playerInfo: Player, item: Item) => {
        buyItem(playerInfo, item)
    }
    return (
        <div className="bg-zinc-900 h-screen flex flex-col justify-center px-4">
            <Link to="/">
                <Icon icon="pixelarticons:close" className="fixed top-2 left-4" width="40" height="40"  style={{color: '#fff'}} />
            </Link>
            <div className="grid grid-cols-3 gap-4">
                {shopSlots.map((slot, index) => (
                    <ItemBox key={index}>
                        <Item item={slot}>
                            {slot.isOnSale && <ItemButton name='Buy' onClick={() => handleBuy(playerInfo,slot)} />}
                        </Item>
                    </ItemBox>
                ))}
            </div>
        </div>
    )
}

export default Shop