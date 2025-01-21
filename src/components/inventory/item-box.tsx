import { ReactNode } from "react"

const ItemBox = ({ children, className }: { children?: ReactNode; className?: string }) => {
    return (
      <div className={`relative w-full h-full max-w-[150px] border flex justify-center items-center border-gray-600 aspect-square ${className || "" }`}>
        {children}
      </div>
    );
  };
  

export default ItemBox