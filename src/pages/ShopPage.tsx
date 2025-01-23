import { Link } from "react-router"
import { Icon } from "@iconify/react/dist/iconify.js"
import ItemBox from "../components/inventory/item-box"
import ShopItem from "../components/shop/shop-item"
import { items } from "../api/items"
import { InventoryContext } from "../context/inventory.context"
import { useContext } from "react"
const Shop = () => {
    const shopSlots = Array(6).fill([])
    const {buyItem} = useContext(InventoryContext)!
    return (
        <div className="bg-zinc-900 h-screen flex flex-col justify-center px-4">
            <Link to="/">
                <Icon icon="pixelarticons:close" className="fixed top-2 left-4" width="40" height="40"  style={{color: '#fff'}} />
            </Link>
            <div className="grid grid-cols-3 gap-4">
                {shopSlots.map((_, index) => (
                    <ItemBox key={index}>
                        <ShopItem item={items[index]} buyItem={buyItem} />
                    </ItemBox>
                ))}
            </div>
        </div>
    )
}

export default Shop