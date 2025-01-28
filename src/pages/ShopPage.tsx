import { Link } from "react-router"
import { Icon } from "@iconify/react/dist/iconify.js"
import ItemBox from "../components/inventory/item-box"
import Item from "../components/inventory/item"
import ItemButton from "../components/inventory/item-button"
import { InventoryContext } from "../context/inventory.context"
import { useContext, useEffect } from "react"
import { playerInfoContext } from "../context/player-info.context"
import { Player } from "../models/characters"
import { NotificationContext } from "../context/notification.context"
const Shop = () => {
    const {buyItem, shopSlots, slots, sellItem} = useContext(InventoryContext)!
    const { playerInfo, setGold, removeGold } = useContext(playerInfoContext)!
    const {isNewShopItem, setIsNewShopItem} = useContext(NotificationContext)!

    useEffect(() => {
        if(isNewShopItem) setIsNewShopItem(false)
    },[])

    const handleBuy = (playerInfo: Player, item: Item) => {
        if(playerInfo.gold < item.price!) return
        removeGold(item.price!)
        buyItem(playerInfo, item)
    }

    const handleSell = (item: Item) => {
        const itemPrice = item.price! * 0.5
        setGold(itemPrice)
        sellItem(item)
    }
    return (
        <div className="bg-zinc-900 h-screen flex flex-col justify-around px-4">
            <div>
                <h1 className="text-2xl text-center">Shop</h1>
                <p className="text-lg text-[#C19A6B] justify-center items-center flex gap-2">Your gold: {playerInfo?.gold} <Icon icon="wpf:coins" width="12" height="12"  style={{color: '#C19A6B'}} /></p>
            </div>
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
            <ul className="grid grid-cols-3 gap-4">
                {slots.map((slot, index) => (
                    <ItemBox key={index}>
                        <Item item={slot}>
                            {slot.price && slot.price > 0 && <ItemButton name='Sale' onClick={() => handleSell(slot)} />}
                        </Item>
                    </ItemBox>
                ))}
            </ul>
        </div>
    )
}

export default Shop