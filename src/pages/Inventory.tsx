import { Link } from "react-router"
import { Icon } from "@iconify/react/dist/iconify.js"
import ItemBox from "../components/inventory/item-box"
import Item from "../components/inventory/item"
import useLocalStorageState from "use-local-storage-state"
import { items } from "../api/items"
const Inventory = () => {

    const [characterSlots, setCharacterSlots] = useLocalStorageState("character-slots", {defaultValue: [
        {name: 'Helemt', image: '', type: 'helmet'},
        {name: 'Gloves', image: '', type: 'gloves'},
        {name: 'Arrmor', image: '', type: 'arrmor'},
        {name: 'Weapon', image: '', type: 'weapon'},
        {name: 'Boots', image: '', type: 'boots'}
    ]})

    const initializeSlots = () => {
        const slots = Array(6).fill([]);
        for (let i = 0; i < items.length; i++) {
          slots[i] = items[i];
        }
        return slots;
      };
    
      const [slots, setSlots] = useLocalStorageState("slots", {
        defaultValue: initializeSlots(),
      });

      const equipItem = (item: Item) => {
        setCharacterSlots((prev) => {
          const newCharacterSlots = [...prev];
          const slotIndex = newCharacterSlots.findIndex(slot => slot.type === item.type);
      
          if (slotIndex !== -1) {
            newCharacterSlots[slotIndex] = item;
            item.isEquipped = true;
            setSlots(() => {
                let newSlots = slots.filter((slot) => slot.type !== item.type)
                return [...newSlots, []]
            })
          }
          return newCharacterSlots;
        });
      };

      const unequipItem = (item: Item) => {
        setCharacterSlots((prev) => {
          const newCharacterSlots = [...prev];
          const slotIndex = newCharacterSlots.findIndex(slot => slot.type === item.type);
          if (slotIndex !== -1) {
            newCharacterSlots[slotIndex] = {name: 'Empty', image: '', type: item.type};
            setSlots((prev) => {
                let newSlots = [...prev]
                const emptySlot = newSlots.findIndex(slot => slot.length === 0)
                if(emptySlot !== -1) {
                    newSlots[emptySlot] = item
                    item.isEquipped = false
                }
                return newSlots
            })
          }
          return newCharacterSlots;
        });
      }

    return (
        <div className="bg-zinc-900 h-screen flex flex-col justify-around px-4">
            <Link to="/">
                <Icon icon="pixelarticons:close" className="fixed top-2 left-4" width="40" height="40"  style={{color: '#fff'}} />
            </Link>
            <div className="grid grid-rows-[auto auto auto] grid-cols-3 gap-4 w-full">
                {characterSlots.map((slot, index) => (
                    <ItemBox key={index} className={`${index === 0 ? "col-span-3 justify-self-center" : index >= 1 && index <= 3 ? "" : "col-span-3 justify-self-center" }`}>
                        <Item item={slot} unequipItem={unequipItem} />
                    </ItemBox>
                ))}
            </div>
            <ul className="grid grid-cols-3 gap-4">
                {slots.map((slot, index) => (
                    <ItemBox key={index}>
                        <Item equipItem={equipItem} item={slot} />
                    </ItemBox>
                ))}
            </ul>
        </div>
    )
}

export default Inventory