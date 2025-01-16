import { createContext, ReactNode } from "react";
import useLocalStorageState from "use-local-storage-state";
import { Steps } from "../models/movement";

export const StepsContext = createContext<Steps>({
    steps: 0,
    setSteps: () => {}
})

export const StepsProvider = ({ children }: { children?: ReactNode }) => {
    const [steps, setSteps] = useLocalStorageState('steps', { defaultValue: 0 })
    return (
        <StepsContext.Provider value={{ steps, setSteps }}>
            {children}
        </StepsContext.Provider>
    )
}