import { useContext, useEffect, useState } from "react";
import { FaRegCalendar, FaRegClock, FaStar, FaStarHalf } from "react-icons/fa6";
import { Context } from "../assets/context/MyContext";
import JoinBtn from "./button/JoinBtn";
import DeleteBtn from "./button/DeleteBtn";

type Props = {
    yoga: YogaClass;
    btnType: string;
};

const YogaCard = ({ yoga, btnType }: Props) => {
    const [filled, setFilled] = useState<number>(0);
    const [half, setHalf] = useState<number>(0);
    const [days, setDays] = useState<number>(7);

    const context = useContext(Context);

    if (!context) {
        throw new Error("MyContext provider error");
    }

    useEffect(() => {
        const filledStars = Math.floor(yoga.rating);
        const halfStars = yoga.rating % 1 !== 0 ? 1 : 0;

        setFilled(filledStars);
        setHalf(halfStars);
        setDays(yoga.frequency.length);
    }, [yoga]);

    return (
        <div className="flex flex-col shadow-lg rounded-lg hover:scale-105 transition-all hover:shadow-xl gap-4 p-4 bg-white">
            <div className="flex space-x-6">
                <img
                    className="h-28 min-w-28 w-28 object-cover rounded-lg shrink-0"
                    src={yoga.image}
                    alt={yoga.name}
                />
                <div>
                    <h2 className="text-xl font-bold line-clamp-2 mb-4 text-mainClr">
                        {yoga.name} | {yoga.style}
                    </h2>
                    <p className="text-sm font-medium text-gray-400 mb-1 line-clamp-1">
                        for {yoga.level}
                    </p>
                    <p className="text-sm font-medium text-gray-400 line-clamp-1">
                        {`By ${yoga.instructor} ${
                            yoga.organization ? `| ${yoga.organization}` : ""
                        }`}
                    </p>
                </div>
            </div>
            <div className="flex space-x-6">
                <div className="w-28 flex flex-col justify-between items-start">
                    <div className="flex space-x-1 justify-center items-center ml-1">
                        {Array.from({ length: filled }).map((_, index) => (
                            <FaStar key={index} className="text-mainClr" />
                        ))}
                        {Array.from({ length: half }).map((_, index) => (
                            <FaStarHalf key={index} className="text-mainClr" />
                        ))}
                    </div>
                    {btnType === "join" && <JoinBtn id={yoga._id} />}
                    {btnType === "delete" && <DeleteBtn id={yoga._id} />}
                </div>
                <div className="flex flex-col justify-between space-y-4">
                    <div className="flex justify-start items-center space-x-2">
                        <FaRegCalendar className="text-gray-400" />
                        <div className="text-sm font-medium text-gray-400">
                            <p>
                                {days == 7
                                    ? "Everyday"
                                    : days == 1
                                    ? "1 day in a week"
                                    : `${days} days a week`}
                            </p>
                            {days < 7 && (
                                <p>
                                    {yoga.frequency
                                        .map((day) => day[0])
                                        .join(", ")}
                                </p>
                            )}
                        </div>
                    </div>
                    <div>
                        <div className="flex space-x-3 justify-center items-center mb-1">
                            <p className="font-medium text-mainClr line-clamp-1">
                                {yoga.startTime}
                            </p>
                            <span className="flex space-x-2 justify-center items-center">
                                <FaRegClock className="text-gray-800 text-sm" />
                                <p className="font-medium text-gray-400 line-clamp-1">
                                    {yoga.duration} min
                                </p>
                            </span>
                        </div>
                        <p className="font-normal line-clamp-1">
                            <span className="font-medium">Rs {yoga.price}</span>{" "}
                            /month
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YogaCard;
