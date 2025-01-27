import { Icon } from "@iconify/react/dist/iconify.js"
import CharacterName from "../character-info/character-name"
import CharacterLvl from "../character-info/character-lvl"
import ItemBox from "../inventory/item-box"
import { Enemy as Enemies } from "../../models/characters"
import Item from "../inventory/item"
interface RewardModalProps {
    enemies?: Enemies
    goToBattle: () => void,
    cancelBattle: () => void
}

const RewardsModal = ({enemies, goToBattle, cancelBattle}: RewardModalProps) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-[#000000] bg-opacity-50 flex justify-center items-center z-10">
            <div className="border border-[#C19A6B] bg-black/40 p-6 w-[400px] relative">
                <Icon icon="pixelarticons:close" className="absolute top-2 left-4" width="30" height="30"  style={{color: '#fff'}} onClick={cancelBattle} />
                <div className="flex justify-between items-center mb-2 mt-7">
                    <CharacterName character={{name: enemies?.name}} />
                    <CharacterLvl character={{lvl: enemies?.lvl}} />
                </div>
                <h4 className="font-medium">Rewards:</h4>
                <ul className="flex flex-col gap-3 mt-6">
                    <li className="flex justify-between items-center">EXP: <span className="flex gap-3 items-center">{enemies?.exp}<Icon icon="mdi:star-four-points-box-outline" width="24" height="24"  style={{color: '#fff'}} /></span></li>
                    <li className="flex justify-between items-center">GOLD: <span className="flex gap-3 items-center">{enemies?.gold}<Icon icon="material-symbols-light:money-bag" width="24" height="24"  style={{color: '#C19A6B'}} /></span></li>
                    {enemies?.item &&
                        <li className="flex justify-center w-full max-w-[125px] mx-auto">
                            <ItemBox>
                                <Item item={enemies?.item} />
                            </ItemBox>
                        </li>
                    }
                </ul>
                <button onClick={() => goToBattle()} className="bg-[#C19A6B] text-white w-full py-2 mt-4 border border-transparent hover:bg-opacity-30 hover:border-[#C19A6B] transition-all duration-300">Fight</button>
            </div>
        </div>
    )
}

export default RewardsModal