import { CharacterInfo } from "../../models/characters"

interface Character {
    character: CharacterInfo
}
const CharacterLvl = ({character}: Character) => {
    return (
        <span className="border border-slate-300 rounded-full w-[23px] h-[24px] flex justify-center items-center text-white text-[.8rem]">{character.lvl}</span>
    )
}

export default CharacterLvl