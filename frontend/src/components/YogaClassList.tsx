import { useContext } from "react";
import { Context } from "../assets/context/MyContext";
import YogaCard from "./YogaCard";
import Loading from "./Loading";

type Props = {
    yogaClasses: YogaClass[] | null;
    size: number | null;
    btnType: string;
};

const YogaClassList = ({ yogaClasses, size, btnType }: Props) => {
    const context = useContext(Context);

    if (!context) {
        throw new Error("MyContext provider error");
    }

    const { isloading } = context;

    if (!yogaClasses || isloading) {
        return <Loading />;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 ms:grid-cols-3 gap-8 mt-10">
            {yogaClasses &&
                yogaClasses.map((yoga, i) => {
                    if (size && i >= size) return;

                    return (
                        <YogaCard
                            key={yoga._id}
                            yoga={yoga}
                            btnType={btnType}
                        />
                    );
                })}
        </div>
    );
};

export default YogaClassList;
