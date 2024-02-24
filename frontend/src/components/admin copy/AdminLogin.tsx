import { useEffect, useState } from "react";
import imageUrl from "../../assets/images/yoga.png";
import { useNavigate } from "react-router-dom";
import { adminLoginHandler } from "../../assets/api/admin/adminLogin";

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const cookies: { [key: string]: string } = document.cookie
            .split(";")
            .reduce((cookies, item) => {
                const [name, value] = item.split("=");
                cookies[name.trim()] = value;
                return cookies;
            }, {} as { [key: string]: string });

        // Check if auth-token is present
        if (cookies["auth-token"] && cookies["role"] == "ADMIN") {
            navigate("/admin/dashboard");
        }
    }, []);

    const handleAdminLoginForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            username,
            password,
        };

        adminLoginHandler(data).then(() => {
            navigate("/admin/dashboard");
        });
    };

    return (
        <div className="max-w-6xl mx-auto py-8 px-2">
            <div className="max-w-[480px] mx-auto flex flex-col justify-center items-center text-center">
                <img
                    src={imageUrl}
                    alt="image"
                    className="w-28 h-28 rounded-full mb-3 border-4 border-mainClr"
                />

                <h2 className="text-2xl font-bold mb-6">Admin Login</h2>

                <form
                    onSubmit={handleAdminLoginForm}
                    className="flex flex-col mx-auto w-full gap-6 bg-white px-4 pt-6 pb-8 rounded-lg shadow-lg"
                >
                    <input
                        type="text"
                        placeholder="Enter your username"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                        className="bg-secondaryClr font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none"
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-secondaryClr font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none"
                    />
                    <input
                        type="submit"
                        value="Log in"
                        className="bg-mainClr text-white font-bold p-4 rounded-xl outline-none border-none cursor-pointer hover:shadow-lg hover:scale-95 transition-all"
                    />
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
