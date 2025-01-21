import { Link } from "react-router"
import { Icon } from "@iconify/react/dist/iconify.js"
import ItemBox from "../components/inventory/item-box"
import Item from "../components/inventory/item"
import useLocalStorageState from "use-local-storage-state"
import type { Item as Items } from "../models/items"

const Inventory = () => {
    const items = [
        {
            name: "Simple bow",
            image: "/items/bow_01.png",
            stats: [
                {name: "Dexterity", value: `+${15}`},
                {name: 'Attack speed', value: `+${5}%`},
            ]
        },
        {
            name: "Simple boots",
            image: "/items/boots_02.png",
            stats: [
                {name: "Dexterity", value: `+${15}`},
                {name: 'Attack speed', value: `+${5}%`},
            ]
        }
    ]

    const initializeSlots = () => {
        const slots = Array(6).fill([]);
        for (let i = 0; i < items.length; i++) {
          slots[i] = items[i];
        }
        return slots;
      };
    
      const [slots] = useLocalStorageState("slots", {
        defaultValue: initializeSlots(),
      });

    return (
        <div className="bg-zinc-900 h-screen flex flex-col justify-around px-4">
            <Link to="/">
                <Icon icon="pixelarticons:close" className="fixed top-2 left-4" width="40" height="40"  style={{color: '#fff'}} />
            </Link>
            <div className="flex items-center flex-col gap-4 w-full">
                <ItemBox>
                    <p className="flex justify-center items-center h-full">Helemt</p>
                </ItemBox>
                <div className="grid grid-cols-3 gap-4 w-full">
                    <ItemBox>
                        <p className="flex justify-center items-center h-full">Gloves</p>
                    </ItemBox>
                    <ItemBox>
                        <p className="flex justify-center items-center h-full">Arrmor</p>
                    </ItemBox>
                    <ItemBox>
                        <p className="flex justify-center items-center h-full">Weapon</p>
                    </ItemBox>
                </div>
                <ItemBox>
                    <p className="flex justify-center items-center h-full">Boots</p>
                </ItemBox>
            </div>
            <div>
                <ul className="grid grid-cols-3 gap-4">
                    {slots.map((slot, index) => (
                        <ItemBox key={index}>
                            <Item item={slot} />
                        </ItemBox>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Inventory