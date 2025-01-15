import { CharacterInfo } from "../../models/characters"

interface Character {
    character: CharacterInfo
}
const CharacterHp = ({character}: Character) => {
    return (
        <div className="w-full mx-auto bg-gray-200 h-5 dark:bg-gray-700 relative">
            <span className='absolute top-[1px] left-2 text-white text-[.7rem]'>{character.hp}/{character.maxHp}</span>
            <div className="bg-[#ff0000] h-5" style={{width: `calc(${character.hp} / ${character.maxHp} * 100%)`}}></div>
        </div>
    )
}

export default CharacterHp