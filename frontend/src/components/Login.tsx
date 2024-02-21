import { Link } from "react-router-dom";
import imageUrl from "../assets/images/yoga.png";
import { loginHandler } from "../assets/api/login";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmitLoginForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            email,
            number,
            password,
        };

        loginHandler(data);
    };

    return (
        <div className="max-w-6xl mx-auto py-8 px-2">
            <div className="max-w-[480px] mx-auto flex flex-col justify-center items-center text-center">
                <img
                    src={imageUrl}
                    alt="image"
                    className="w-28 h-28 rounded-full mb-3"
                />

                <h2 className="text-2xl font-bold mb-1">Login</h2>

                <p className="text-base font-semibold text-rose-600 mb-6">
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
                    className="flex flex-col mx-auto w-full gap-6"
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        className="bg-rose-50 font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none"
                    />
                    <input
                        type="tel"
                        placeholder="Enter your phone number"
                        required
                        onChange={(e) => {
                            setNumber(e.target.value);
                        }}
                        pattern="[0-9]{10}"
                        className="bg-rose-50 font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none"
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        required
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
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

export default Login;