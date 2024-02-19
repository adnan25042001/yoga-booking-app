import logo from "../assets/images/logo.png";

const Navbar = () => {
    return (
        <div className="border-b-[1px] border-b-gray-400/40">
            <nav className="max-w-7xl mx-auto px-2 py-4 flex justify-between items-center">
                <div className="flex gap-2 justify-center items-center">
                    <img
                        src={logo}
                        alt="logo"
                        className="h-8 w-8 sm:h-10 sm:w-10"
                    />
                    <span className="text-xl sm:text-2xl font-extrabold">
                        YogaMaster
                    </span>
                </div>
                
                <div className="flex gap-8 sm:gap-12">
                    <button className="py-2 px-4 bg-rose-600 text-sm sm:text-base text-white font-medium rounded-xl border-2 border-rose-600 hover:bg-transparent hover:text-black">
                        Explore
                    </button>
                    <button className="py-2 px-4 bg-bg-transparent text-sm sm:text-base text-black font-medium rounded-xl border-2 border-rose-600 hover:bg-rose-600 hover:text-white">
                        Login
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
