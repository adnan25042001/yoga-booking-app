import { Link, useNavigate } from "react-router-dom";
import imageUrl from "../assets/images/yoga.png";
import { loginHandler } from "../assets/api/login";
import { useEffect, useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
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

        console.log(cookies);

        // Check if auth-token is present
        if (cookies["auth-token"] && cookies["role"] == "USER") {
            navigate("/");
        }
    }, []);

    const handleSubmitLoginForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            email,
            number,
            password,
        };

        loginHandler(data).then(() => {
            navigate("/");
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

                <h2 className="text-2xl font-bold mb-1">Login</h2>

                <p className="text-base font-semibold text-mainClr mb-6">
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        className="underline underline-offset-1 hover:underline-offset-4 transition-all"
                    >
                        Sign up
                    </Link>
                </p>

                <form
                    onSubmit={handleSubmitLoginForm}
                    className="flex flex-col mx-auto w-full gap-6 bg-white px-4 pt-6 pb-8 rounded-lg shadow-lg"
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        className="bg-secondaryClr font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none"
                    />
                    <input
                        type="tel"
                        placeholder="Enter your phone number"
                        required
                        onChange={(e) => {
                            setNumber(e.target.value);
                        }}
                        pattern="[0-9]{10}"
                        className="bg-secondaryClr font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none"
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        required
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
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

export default Login;
