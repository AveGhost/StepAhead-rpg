import { ReactNode } from "react"

const ItemBox = ({children}: {children?: ReactNode}) => {
    return (
        <div className="w-full h-full max-w-[150px] border border-gray-600 aspect-square">
            {children}
        </div>
    )
}

export default ItemBox