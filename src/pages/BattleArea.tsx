import Battle from "../components/battle/battle"
const BattleArea = () => {
    return (
        <div className='map relative bg-[url(/map.webp)] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-black/40 min-h-[100vh] bg-center bg-cover bg-no-repeat bg-fixed'>
            <Battle />
        </div>
    )
}

export default BattleArea