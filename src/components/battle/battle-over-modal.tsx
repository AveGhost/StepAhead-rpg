import { Icon } from "@iconify/react/dist/iconify.js"

interface BattleOverProps {
    claim: () => void
    gainedExp: number
    gainedGold: number
}

const BattleOver = ({claim, gainedExp, gainedGold}: BattleOverProps) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-[#000000] bg-opacity-50 flex justify-center items-center z-10">
            <div className="border border-[#C19A6B] bg-black/40 p-6 w-[400px]">
                <h3 className="text-3xl text-center mb-4">Battle Over</h3>
                <h4 className="text-xl font-medium">Rewards:</h4>
                <ul className="flex flex-col gap-3 mt-6">
                    <li className="flex justify-between items-center">EXP: <span className="flex gap-3 items-center">{gainedExp}<Icon icon="mdi:star-four-points-box-outline" width="24" height="24"  style={{color: '#fff'}} /></span></li>
                    <li className="flex justify-between items-center">GOLD: <span className="flex gap-3 items-center">{gainedGold}<Icon icon="material-symbols-light:money-bag" width="24" height="24"  style={{color: '#C19A6B'}} /></span></li>
                </ul>
                <button onClick={() => claim()} className="bg-[#C19A6B] text-white w-full py-2 mt-4 border border-transparent hover:bg-opacity-30 hover:border-[#C19A6B] transition-all duration-300">Claim</button>
            </div>
        </div>
    )
}

export default BattleOver