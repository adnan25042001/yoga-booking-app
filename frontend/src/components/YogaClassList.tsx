import { useContext } from "react";
import { Context } from "../assets/context/MyContext";
import YogaCard from "./YogaCard";

type Props = {
    yogaClasses: YogaClass[] | null;
    size: number | null;
};

const YogaClassList = ({ yogaClasses, size }: Props) => {
    const context = useContext(Context);

    if (!context) {
        throw new Error("MyContext provider error");
    }

    const { isloading } = context;

    if (!yogaClasses || isloading) {
        return (
            <div className="text-xl font-semibold mt-10 text-center animate-pulse">
                Loading...
            </div>
        );
    }

    console.log(yogaClasses);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 ms:grid-cols-3 gap-8">
            {yogaClasses &&
                yogaClasses.map((yoga, i) => {
                    if (size && i >= size) return;

                    return <YogaCard key={yoga._id} yoga={yoga} />;
                })}
        </div>
    );
};

export default YogaClassList;
