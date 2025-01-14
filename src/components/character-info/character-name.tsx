import { CharacterInfo } from "../../models/characters"

interface Character {
    character: CharacterInfo
}
const CharacterName = ({character}: Character) => {
    return (
        <h2 className="text-lg font-medium text-white">{character.name}</h2>
    )
}

export default CharacterName