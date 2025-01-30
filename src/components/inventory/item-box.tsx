import { ReactNode } from "react"

const ItemBox = ({ children, className }: { children?: ReactNode; className?: string }) => {
    return (
      <div className={`relative w-full max-w-[170px] h-[170px] border flex justify-center items-center bg-transparent border-gray-600 ${className || "" }`}>
        {children}
      </div>
    );
  };
  

export default ItemBox