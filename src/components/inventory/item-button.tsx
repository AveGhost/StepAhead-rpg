interface ItemButtonProps {
    name: string
    onClick: () => void
    isDisabled?: boolean
}

const ItemButton = ({name, onClick, isDisabled}: ItemButtonProps) => {
    return (
        <button onClick={onClick} disabled={isDisabled} className="text-center bg-[#C19A6B] w-full p-1 mt-auto">{name}</button>
    )
}

export default ItemButton