import { useContext, useEffect } from "react";
import HeroBanner from "./HeroBanner";
import YogaClassList from "./YogaClassList";
import { Context } from "../assets/context/MyContext";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
    const context = useContext(Context);

    if (!context) {
        throw new Error("MyContext provider error");
    }

    const {
        yogaClasses,
        duplicateYogaClasses,
        setDuplicateYogaClasses,
        searchResults,
        setSearchResults,
    } = context;

    useEffect(() => {
        setDuplicateYogaClasses(yogaClasses);
    }, [yogaClasses]);

    useEffect(() => {
        setSearchResults(duplicateYogaClasses);
    }, [duplicateYogaClasses]);

    return (
        <div className="max-w-6xl mx-auto my-10 px-3 sm:px-3">
            <HeroBanner />
            <YogaClassList
                yogaClasses={searchResults}
                size={3}
                btnType="join"
            />
            <div className="text-lg font-bold flex justify-center items-center mt-10">
                <Link to="/explore" className="text-mainClr relative group">
                    View All{" "}
                    <FaArrowRight className="absolute top-[6px] -right-8 group-hover:-right-12 transition-all" />
                </Link>
            </div>
        </div>
    );
};

export default Home;
