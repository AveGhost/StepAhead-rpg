import { createContext, ReactNode } from "react";
import useLocalStorageState from "use-local-storage-state";
import { Item } from "../models/items";
import { initializeSlots } from "../mixins/initializeSlots";
import { initializeShop } from "../mixins/initializeShop";
import { Player } from "../models/characters";
interface InventoryContext {
    characterSlots: Item[];
    setCharacterSlots: (characterSlots: Item[]) => void;
    slots: Item[];
    setSlots: (slots: Item[][]) => void;
    equipItem: (item: Item) => void;
    unequipItem: (item: Item) => void;
    shopSlots: Item[];
    setShopSlots: (shopSlots: Item[]) => void;
    buyItem: (playerInfo: Player, item: Item) => void;
}

export const InventoryContext = createContext<InventoryContext | undefined>(undefined);

export const InventoryProvider = ({ children }: { children?: ReactNode }) => {
    const [characterSlots, setCharacterSlots] = useLocalStorageState<Item[]>("character-slots", {defaultValue: [
        {name: 'Helemt', image: '', type: 'helmet'},
        {name: 'Gloves', image: '', type: 'gloves'},
        {name: 'Arrmor', image: '', type: 'arrmor'},
        {name: 'Weapon', image: '', type: 'weapon'},
        {name: 'Boots', image: '', type: 'boots'}
    ]})
    
    const [slots, setSlots] = useLocalStorageState("slots", {
        defaultValue: initializeSlots(),
    });

    const [shopSlots, setShopSlots] = useLocalStorageState("shop-slots", {
        defaultValue: initializeShop(),
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
            newCharacterSlots[slotIndex] = {name: item.type.charAt(0).toUpperCase() + item.type.slice(1), image: '', type: item.type};
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

      const buyItem = (playerInfo: Player, item: Item) => {
        if(playerInfo?.gold >= item?.price!) {
            playerInfo.gold -= item?.price!
            setSlots((prev) => {
                let newSlots = [...prev]
                const emptySlot = newSlots.findIndex(slot => slot.length === 0)
                if(emptySlot !== -1) {
                    newSlots[emptySlot] = item
                    item.isOnSale = false
                }
                return newSlots
            })
            setShopSlots((prev) => {
                let newSlots = [...prev]
                const shopItem = newSlots.findIndex(slot => slot.name === item.name)
                if(shopItem !== -1) {
                    newSlots[shopItem] = []
                    item.isOnSale = false
                }
                return newSlots
            })
        }
    }

    return (
        <InventoryContext.Provider value={{characterSlots, setCharacterSlots, slots, setSlots, equipItem, unequipItem, buyItem, shopSlots, setShopSlots}}>
            {children}
        </InventoryContext.Provider>
    );
};
