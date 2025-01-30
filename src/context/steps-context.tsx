import { createContext, ReactNode } from "react";
import useLocalStorageState from "use-local-storage-state";

interface Steps {
    steps: number
    setSteps: (steps: number | ((prev: number) => number)) => void;
}

export const StepsContext = createContext<Steps>({
    steps: 0,
    setSteps: () => {}
})

export const StepsProvider = ({ children }: { children?: ReactNode }) => {
    const [steps, setSteps] = useLocalStorageState<number>('steps', { defaultValue: 0 })
    return (
        <StepsContext.Provider value={{ steps, setSteps }}>
            {children}
        </StepsContext.Provider>
    )
}