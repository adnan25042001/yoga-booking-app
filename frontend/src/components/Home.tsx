import { useContext } from "react";
import HeroBanner from "./HeroBanner";
import YogaClassList from "./YogaClassList";
import { Context } from "../assets/context/MyContext";

const Home = () => {
    const context = useContext(Context);

    if (!context) {
        throw new Error("MyContext provider error");
    }

    const { isloading } = context;

    return (
        <div className="max-w-6xl mx-auto my-10 px-2 sm:px-3">
            <HeroBanner />
            {isloading ? (
                <div className="text-xl font-semibold mt-10 text-center animate-pulse">
                    Loading...
                </div>
            ) : (
                <YogaClassList />
            )}
        </div>
    );
};

export default Home;
