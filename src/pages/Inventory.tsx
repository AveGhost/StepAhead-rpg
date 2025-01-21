import { Link } from "react-router"
import { Icon } from "@iconify/react/dist/iconify.js"
import ItemBox from "../components/inventory/item-box"
import Item from "../components/inventory/item"
import useLocalStorageState from "use-local-storage-state"
import { items } from "../api/items"
const Inventory = () => {

    const [characterSlots, setCharacterSlots] = useLocalStorageState("character-slots", {defaultValue: [
        {name: 'Helemt', image: '', type: 'helmet', stats: []},
        {name: 'Gloves', image: '', type: 'gloves', stats: []},
        {name: 'Arrmor', image: '', type: 'arrmor', stats: []},
        {name: 'Weapon', image: '', type: 'weapon', stats: []},
        {name: 'Boots', image: '', type: 'boots', stats: []}
    ]})

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
            <div className="grid grid-rows-[auto auto auto] grid-cols-3 gap-4 w-full">
                {characterSlots.map((slot, index) => (
                    <ItemBox key={index} className={`${index === 0 ? "col-span-3 justify-self-center" : index >= 1 && index <= 3 ? "" : "col-span-3 justify-self-center" }`}>
                        <Item item={slot} />
                    </ItemBox>
                ))}
            </div>
            <ul className="grid grid-cols-3 gap-4">
                {slots.map((slot, index) => (
                    <ItemBox key={index}>
                        <Item item={slot} />
                    </ItemBox>
                ))}
            </ul>
        </div>
    )
}

export default Inventory