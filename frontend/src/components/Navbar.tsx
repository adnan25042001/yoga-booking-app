import logo from "../assets/images/logo.png";
import { Context } from "../assets/context/MyContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt1, HiX } from "react-icons/hi";

const Navbar = () => {
    const context = useContext(Context);

    if (!context) {
        throw new Error("Navbar must be used within a MyContext provider");
    }

    const { toggle, setToggle, isLoggedIn, setIsLoggedIn } = context;

    const handleLogout = () => {
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() - 7);
        document.cookie = `auth-token=; expires=${expiryDate.toUTCString()}; path=/`;
        document.cookie = `role=; expires=${expiryDate.toUTCString()}; path=/`;

        setIsLoggedIn(false);
    };

    return (
        <div className="border-b-[1px] border-b-gray-400/40">
            <nav className="max-w-7xl mx-auto px-2 py-4 flex justify-between items-center relative">
                <Link
                    to="/"
                    className="flex gap-2 justify-center items-center z-50"
                >
                    <img
                        src={logo}
                        alt="logo"
                        className="h-8 w-8 sm:h-10 sm:w-10"
                    />
                    <span className="text-xl sm:text-2xl font-extrabold">
                        YogaMaster
                    </span>
                </Link>

                {!toggle ? (
                    <HiMenuAlt1
                        className="h-8 w-8 cursor-pointer block sm:hidden rounded-md hover:bg-gray-200 z-50"
                        onClick={() => setToggle(true)}
                    />
                ) : (
                    <HiX
                        className="h-8 w-8 cursor-pointer block sm:hidden rounded-md hover:bg-gray-200 z-50"
                        onClick={() => setToggle(false)}
                    />
                )}

                <div
                    className={`${
                        toggle ? "top-0" : "top-[-1000px]"
                    } flex flex-col sm:flex-row items-end bg-white justify-center p-4 pt-20 pb-8 gap-8 sm:gap-12 w-full sm:w-auto absolute left-0 sm:static sm:bg-transparent sm:p-0 transition-all duration-300 z-10`}
                >
                    <Link
                        to="/explore"
                        className="py-2 px-4 bg-bg-transparent text-sm sm:text-base text-black font-medium rounded-xl border-2 border-rose-600 hover:bg-rose-600 hover:text-white"
                    >
                        Explore
                    </Link>
                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            className="py-2 px-4 bg-rose-600 text-sm sm:text-base text-white font-medium rounded-xl border-2 border-rose-600 hover:bg-transparent hover:text-black"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className="py-2 px-4 bg-rose-600 text-sm sm:text-base text-white font-medium rounded-xl border-2 border-rose-600 hover:bg-transparent hover:text-black"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
