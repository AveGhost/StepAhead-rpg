import { createContext, ReactNode } from "react";
import useLocalStorageState from "use-local-storage-state";

interface PermisionContext {
    isPermission: boolean
    setIsPermission: (isPermission: boolean) => void
}

export const PermisionContext = createContext<PermisionContext | undefined>(undefined);

export const PermisionProvider = ({ children }: { children?: ReactNode }) => {
    const [isPermission, setIsPermission] = useLocalStorageState('isPermission', {defaultValue: false})

    return (
        <PermisionContext.Provider value={{isPermission, setIsPermission}}>
            {children}
        </PermisionContext.Provider>
    );
};