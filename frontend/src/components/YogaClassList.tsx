import { useContext, useEffect } from "react";
import { Context } from "../assets/context/MyContext";
import YogaCard from "./YogaCard";

const YogaClassList = () => {
    const context = useContext(Context);

    if (!context) {
        throw new Error("MyContext provider error");
    }

    const { yogaClasses } = context;

    useEffect(() => {
        console.log(yogaClasses);
    });

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 ms:grid-cols-3 gap-8">
            {yogaClasses && yogaClasses.map((yoga) => <YogaCard yoga={yoga} />)}
        </div>
    );
};

export default YogaClassList;
