import { Link } from "react-router"
import { Icon } from "@iconify/react/dist/iconify.js"
import ItemBox from "../components/inventory/item-box"
import Item from "../components/inventory/item"
import ItemButton from "../components/inventory/item-button"
import { InventoryContext } from "../context/inventory.context"
import { useContext } from "react"
import { playerInfoContext } from "../context/player-info.context"
import { Player } from "../models/characters"
import { initializeShop } from "../mixins/initializeShop"
const Shop = () => {
    const {buyItem, shopSlots, setShopSlots, slots, sellItem} = useContext(InventoryContext)!
    const { playerInfo, setGold, removeGold } = useContext(playerInfoContext)!

    const refreshShop = (playerInfo: Player) => {
        if(playerInfo.gold < 100) return
        setShopSlots(initializeShop())
        removeGold(100)
    }

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
                <button onClick={() => refreshShop(playerInfo)} disabled={playerInfo.gold < 100} className="bg-[#C19A6B] text-white w-full py-2 mt-4 border border-transparent hover:bg-opacity-30 hover:border-[#C19A6B] transition-all duration-300 max-w-[150px] mx-auto flex justify-center items-center gap-2">
                    <Icon icon="pixelarticons:repeat" width="24" height="24" />
                    <span className="flex gap-2 items-center">100 <Icon icon="wpf:coins" width="12" height="12"  style={{color: '#fff'}} /></span>
                </button>
            </div>
            <Link to="/">
                <Icon icon="pixelarticons:close" className="fixed top-2 left-4" width="40" height="40"  style={{color: '#fff'}} />
            </Link>
            <div className="grid grid-cols-3 gap-4">
                {shopSlots.map((slot, index) => (
                    <ItemBox key={index}>
                        <Item item={slot}>
                            {slot.isOnSale && <ItemButton isDisabled={playerInfo.gold < slot.price!} name='Buy' onClick={() => handleBuy(playerInfo,slot)} />}
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