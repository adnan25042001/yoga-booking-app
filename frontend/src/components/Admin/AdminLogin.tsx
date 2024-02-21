import imageUrl from "../../assets/images/yoga.png";

const AdminLogin = () => {
    return (
        <div className="max-w-6xl mx-auto py-8 px-2">
            <div className="max-w-[480px] mx-auto flex flex-col justify-center items-center text-center">
                <img
                    src={imageUrl}
                    alt="image"
                    className="w-28 h-28 rounded-full mb-3"
                />

                <h2 className="text-2xl font-bold mb-6">Admin Login</h2>

                <form action="" className="flex flex-col mx-auto w-full gap-6">
                    <input
                        type="text"
                        placeholder="Enter your username"
                        required
                        className="bg-rose-50 font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none"
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        required
                        className="bg-rose-50 font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none"
                    />
                    <input
                        type="submit"
                        value="Log in"
                        className="bg-rose-600 text-white font-bold p-4 rounded-xl outline-none border-none cursor-pointer hover:shadow-lg hover:scale-95 transition-all"
                    />
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
