import { useContext, useEffect } from "react";
import HeroBanner from "./HeroBanner";
import { Context } from "../assets/context/MyContext";
import YogaClassList from "./YogaClassList";
import FilterYogaClass from "./FilterYogaClass";

const Explore = () => {
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
        <div className="max-w-6xl mx-auto my-10 px-2 sm:px-3">
            <HeroBanner />
            <FilterYogaClass />
            <YogaClassList yogaClasses={searchResults} size={null} />
        </div>
    );
};

export default Explore;
