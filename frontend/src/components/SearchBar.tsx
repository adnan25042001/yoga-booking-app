import { useContext, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Context } from "../assets/context/MyContext";

const SearchBar = () => {
    const context = useContext(Context);
    const [searchText, setSearchText] = useState<string>("");

    if (!context) {
        throw new Error("MyContext provider error");
    }

    const { duplicateYogaClasses, setSearchResults } = context;

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!duplicateYogaClasses) return;

        const filteredClasses = duplicateYogaClasses.filter(
            (yogaClass: any) => {
                return (
                    yogaClass.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ||
                    yogaClass.instructor
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ||
                    yogaClass.organization
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
                );
            }
        );

        setSearchResults(filteredClasses); // Set search results
    };

    return (
        <form
            onSubmit={handleSearch}
            className="w-[97%] sm:w-[70%] md:w-[55%] flex space-x-3 p-2 justify-center items-center bg-white rounded-xl"
        >
            <FaMagnifyingGlass className="h-6 w-6 text-mainClr hidden xs:block" />
            <input
                type="text"
                placeholder="Search for classes, teachers, or studios"
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full bg-transparent border-none outline-none font-semibold text-mainClr"
            />
            <input
                type="submit"
                value="Search"
                className="px-3 py-2 xs:px-4 bg-mainClr text-base text-white font-medium rounded-lg border-2 border-mainClr hover:bg-transparent hover:text-black cursor-pointer"
            />
        </form>
    );
};

export default SearchBar;
