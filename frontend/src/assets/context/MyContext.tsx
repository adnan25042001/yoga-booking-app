import { createContext, useState, ReactNode, useEffect } from "react";
import { getAllYogaClass } from "../api/getAllYogaClass";

interface ContextProps {
    toggle: boolean;
    setToggle: (toggle: boolean) => void;
    isloading: boolean;
    setIsLoading: (isLoading: boolean) => void;
    yogaClasses: [YogaClass] | null;
    setyogaClasses: (yogaClasses: [YogaClass] | null) => void;
    currentYogaClass: YogaClass | null;
    setCurrentYogaClass: (currentYogaClass: YogaClass | null) => void;
}

interface MyContextProps {
    children: ReactNode;
}

export const Context = createContext<ContextProps | undefined>(undefined);

const MyContext = ({ children }: MyContextProps) => {
    const [toggle, setToggle] = useState<boolean>(false);
    const [isloading, setIsLoading] = useState<boolean>(true);
    const [yogaClasses, setyogaClasses] = useState<[YogaClass] | null>(null);
    const [currentYogaClass, setCurrentYogaClass] = useState<YogaClass | null>(
        null
    );

    useEffect(() => {
        getAllYogaClass().then((data) => {
            setyogaClasses(data);
        });
        setIsLoading(false);
    }, []);

    return (
        <Context.Provider
            value={{
                toggle,
                setToggle,
                isloading,
                setIsLoading,
                yogaClasses,
                setyogaClasses,
                currentYogaClass,
                setCurrentYogaClass,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default MyContext;
