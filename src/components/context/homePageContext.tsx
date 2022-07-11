
import { useState, createContext } from "react"

interface InputProviderProp {
    children: React.ReactNode
}

type home = {
    isVisible: boolean,
    setVisibility: (flag: boolean) => void
}
export const HomeContext = createContext<home>({
    isVisible: true,
    setVisibility: (flag: boolean) => { }
})

export function HomeContainer({ children }: InputProviderProp) {

    const [isVisible, setIsVisible] = useState(true);

    function setVisibility(flag: boolean) {
        setIsVisible(flag)
    }


    return (
        <>
            <HomeContext.Provider value={{ isVisible, setVisibility }}>
                {children}
            </HomeContext.Provider>
        </>
    )
}