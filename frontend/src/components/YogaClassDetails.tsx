import { useContext, useEffect, useState } from "react";
import { Context } from "../assets/context/MyContext";
import { useNavigate } from "react-router-dom";
import { FaStar, FaStarHalf } from "react-icons/fa6";

const YogaClassDetails = () => {
    const [filled, setFilled] = useState<number>(0);
    const [half, setHalf] = useState<number>(0);
    const [days, setDays] = useState<number>(7);
    const context = useContext(Context);
    const navigate = useNavigate();

    if (!context) {
        throw new Error("MyContext provider error");
    }

    const { currentYogaClass } = context;

    if (!currentYogaClass) {
        navigate("/page-not-found");
    }

    useEffect(() => {
        if (!currentYogaClass) {
            navigate("/page-not-found");
            return;
        }

        setFilled(Math.floor(currentYogaClass.rating));
        setHalf(currentYogaClass?.rating % 1 !== 0 ? 1 : 0);
        setDays(currentYogaClass.frequency.length);
    });

    // useEffect(() => {
    //     const cookies: { [key: string]: string } = document.cookie
    //         .split(";")
    //         .reduce((cookies, item) => {
    //             const [name, value] = item.split("=");
    //             cookies[name.trim()] = value;
    //             return cookies;
    //         }, {} as { [key: string]: string });
    // }, []);

    const handleBooking = () => {
        setTimeout(() => {
            alert("Yoga Class Booked Successfully:)");
        }, 1000);
    };

    return (
        <div className="max-w-6xl mx-auto my-10 px-2 sm:px-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 xl:gap-32">
                <div className="h-[380px] p-4 rounded-xl pb-16 shadow-lg hover:shadow-xl">
                    <img
                        src={currentYogaClass?.image}
                        alt={currentYogaClass?.name}
                        className="h-full w-full object-cover rounded-lg"
                    />
                </div>
                <div className="p-10 shadow-lg hover:shadow-xl">
                    <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-rose-600">
                        {currentYogaClass?.name}
                    </h1>
                    <p className="mb-1 font-semibold">
                        <span className="text-gray-400">LEVEL :</span>{" "}
                        {currentYogaClass?.level}
                    </p>
                    <p className="mb-1 font-semibold">
                        <span className="text-gray-400">STYLE :</span>{" "}
                        {currentYogaClass?.style}
                    </p>
                    <p className="mb-1 font-semibold">
                        <span className="text-gray-400">DATE :</span>{" "}
                        {days == 7
                            ? "Everyday"
                            : days == 1
                            ? "1 day in a week"
                            : `${days} days a week`}{" "}
                        ({currentYogaClass?.frequency.join(", ")})
                    </p>
                    <p className="mb-1 font-semibold">
                        <span className="text-gray-400">TIME :</span>{" "}
                        {currentYogaClass?.startTime} -{" "}
                        {currentYogaClass?.endTime}
                    </p>
                    <p className="mb-1 font-semibold">
                        <span className="text-gray-400">DURATION :</span>{" "}
                        {currentYogaClass?.duration}
                    </p>
                    <p className="mb-1 font-semibold">
                        <span className="text-gray-400">FEE :</span> Rs{" "}
                        {currentYogaClass?.price} per month
                    </p>
                    <div className="mb-1 font-semibold flex">
                        <span className="text-gray-400">RATING :</span>{" "}
                        <div className="flex space-x-1 justify-center items-center">
                            {Array.from({ length: filled }).map((_, index) => (
                                <FaStar key={index} className="text-rose-600" />
                            ))}
                            {Array.from({ length: half }).map((_, index) => (
                                <FaStarHalf
                                    key={index}
                                    className="text-rose-600"
                                />
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={handleBooking}
                        className="py-2 mt-5 px-8 bg-rose-600 text-sm xs:text-base text-white font-medium rounded-lg border-2 border-rose-600 hover:bg-transparent hover:text-black cursor-pointer"
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default YogaClassDetails;
