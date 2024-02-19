import { createContext, useState, ReactNode } from "react";

interface ContextProps {
    toggle: boolean;
    setToggle: (toggle: boolean) => void;
}

interface MyContextProps {
    children: ReactNode;
}

export const Context = createContext<ContextProps | undefined>(undefined);

const MyContext = ({ children }: MyContextProps) => {
    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <Context.Provider value={{ toggle, setToggle }}>
            {children}
        </Context.Provider>
    );
};

export default MyContext;
