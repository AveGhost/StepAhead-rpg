interface ItemButtonProps {
    name: string
    onClick: () => void
}

const ItemButton = ({name, onClick}: ItemButtonProps) => {
    return (
        <button onClick={onClick} className="text-center bg-[#C19A6B] w-full p-1 mt-3">{name}</button>
    )
}

export default ItemButton