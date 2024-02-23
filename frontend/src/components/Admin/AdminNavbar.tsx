import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { useContext } from "react";
import { Context } from "../../assets/context/MyContext";

const AdminNavbar = () => {
    const context = useContext(Context);
    const navigate = useNavigate();

    if (!context) {
        throw new Error("Navbar must be used within a MyContext provider");
    }

    const { toggle, setToggle } = context;

    const handleLogout = () => {
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() - 7);
        document.cookie = `auth-token=; expires=${expiryDate.toUTCString()}; path=/`;
        document.cookie = `role=; expires=${expiryDate.toUTCString()}; path=/`;

        setToggle(false);

        navigate("/");
    };
    return (
        <div className="border-b-[1px] border-b-gray-400/40">
            <nav className="max-w-7xl mx-auto px-2 py-4 flex justify-between items-center relative">
                <Link
                    to="/admin/dashboard"
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
                        to="/admin/addyogaclass"
                        onClick={() => setToggle(false)}
                        className="py-2 px-4 bg-bg-transparent text-sm sm:text-base text-black font-medium rounded-xl border-2 border-mainClr hover:bg-mainClr hover:text-white"
                    >
                        Add Yoga Class
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="py-2 px-4 bg-mainClr text-sm sm:text-base text-white font-medium rounded-xl border-2 border-mainClr hover:bg-transparent hover:text-black"
                    >
                        Logout
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default AdminNavbar;
