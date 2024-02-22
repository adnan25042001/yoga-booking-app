import { createContext, useState, ReactNode, useEffect } from "react";
import { getAllYogaClass } from "../api/getAllYogaClass";

interface ContextProps {
    toggle: boolean;
    setToggle: (toggle: boolean) => void;
    isloading: boolean;
    setIsLoading: (isLoading: boolean) => void;
    yogaClasses: YogaClass[] | null;
    setyogaClasses: (yogaClasses: YogaClass[] | null) => void;
    currentYogaClass: YogaClass | null;
    setCurrentYogaClass: (currentYogaClass: YogaClass | null) => void;
    duplicateYogaClasses: YogaClass[] | null;
    setDuplicateYogaClasses: (duplicateYogaClasses: YogaClass[] | null) => void;
    searchResults: YogaClass[] | null;
    setSearchResults: (duplicateYogaClasses: YogaClass[] | null) => void;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}

interface MyContextProps {
    children: ReactNode;
}

export const Context = createContext<ContextProps | undefined>(undefined);

const MyContext = ({ children }: MyContextProps) => {
    const [toggle, setToggle] = useState<boolean>(false);
    const [isloading, setIsLoading] = useState<boolean>(true);
    const [yogaClasses, setyogaClasses] = useState<YogaClass[] | null>(null);
    const [currentYogaClass, setCurrentYogaClass] = useState<YogaClass | null>(
        null
    );
    const [duplicateYogaClasses, setDuplicateYogaClasses] = useState<
        YogaClass[] | null
    >(null);
    const [searchResults, setSearchResults] = useState<YogaClass[] | null>(
        null
    );
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        getAllYogaClass().then((data) => {
            setyogaClasses(data);
        });
        setIsLoading(false);
    }, []);

    useEffect(() => {
        const cookies: { [key: string]: string } = document.cookie
            .split(";")
            .reduce((cookies, item) => {
                const [name, value] = item.split("=");
                cookies[name.trim()] = value;
                return cookies;
            }, {} as { [key: string]: string });

        // Check if auth-token is present
        if (cookies["auth-token"]) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
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
                duplicateYogaClasses,
                setDuplicateYogaClasses,
                isLoggedIn,
                setIsLoggedIn,
                searchResults,
                setSearchResults,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default MyContext;
