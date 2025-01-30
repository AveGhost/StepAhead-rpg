import { createContext, ReactNode } from "react";
import useLocalStorageState from "use-local-storage-state";

interface NotificationContext {
    isLvlUp: boolean
    setIsLvlUp: (isLvlUp: boolean) => void
    isNewItem: boolean
    setIsNewItem: (isNewItem: boolean) => void
}

export const NotificationContext = createContext<NotificationContext | undefined>(undefined);

export const NotificationProvider = ({ children }: { children?: ReactNode }) => {
    const [isLvlUp, setIsLvlUp] = useLocalStorageState('isLvlUp', {defaultValue: false})
    const [isNewItem, setIsNewItem] = useLocalStorageState('isNewItem', {defaultValue: false})

    return (
        <NotificationContext.Provider value={{isLvlUp, setIsLvlUp, isNewItem, setIsNewItem}}>
            {children}
        </NotificationContext.Provider>
    );
};