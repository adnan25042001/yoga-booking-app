import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

const SearchBar = () => {
    return (
        <form className="w-[97%] sm:w-[70%] md:w-[55%] flex space-x-3 p-2 justify-center items-center bg-white rounded-xl">
            <MagnifyingGlassIcon className="h-6 w-6 text-rose-600 hidden xs:block" />
            <input
                type="text"
                placeholder="Search for classes, teachers, or studios"
                className="flex-1 bg-transparent border-none outline-none font-semibold text-rose-600"
            />
            <input
                type="submit"
                value="Search"
                className="py-1 px-3 xs:py-2 xs:px-4 bg-rose-600 text-sm xs:text-base text-white font-medium rounded-lg border-2 border-rose-600 hover:bg-transparent hover:text-black cursor-pointer"
            />
        </form>
    );
};

export default SearchBar;
