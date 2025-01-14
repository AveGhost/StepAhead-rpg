import Enemy from "../components/enemies/enemy"
import CharacterHp from "../components/character-info/character-hp"
import CharacterLvl from "../components/character-info/character-lvl"
import CharacterName from "../components/character-info/character-name"
const Battle = () => {
    return (
        <div className='map relative bg-[url(/map.webp)] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-black/40 min-h-[100vh] bg-center bg-cover bg-no-repeat bg-fixed'>
            <div className="flex justify-between items-center w-full h-screen z-10 relative">
                <div>
                    <div className="max-w-[150px] mx-auto">
                        <div className="flex justify-between items-center mb-2">
                            <CharacterName character={{name: "AveGhost"}} />
                            <CharacterLvl character={{lvl: 1}} />
                        </div>
                        <CharacterHp character={{hp: 100, maxHp: 100}} />
                    </div>
                    <img src='./character.png' width={'200px'} />
                </div>
                <div>
                    <div className="max-w-[150px] mx-auto">
                        <div className="flex justify-between items-center mb-2">
                            <CharacterName character={{name: "Bandit"}} />
                            <CharacterLvl character={{lvl: 1}} />
                        </div>
                        <CharacterHp character={{hp: 100, maxHp: 100}} />
                    </div>
                    <Enemy enemies={{id: "143", name: "Enemy"}} />
                </div>
            </div>
        </div>
    )
}

export default Battle