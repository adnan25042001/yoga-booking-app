import { useContext, useEffect, useState } from "react";
import { Context } from "../assets/context/MyContext";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import Loading from "./Loading";

const YogaClassDetails = () => {
    const [currentYogaClass, setCurrentYogaClass] = useState<YogaClass>();
    const [filled, setFilled] = useState<number>(0);
    const [half, setHalf] = useState<number>(0);
    const [days, setDays] = useState<number>(7);
    const context = useContext(Context);
    const navigate = useNavigate();
    const { id } = useParams();

    if (!context) {
        throw new Error("MyContext provider error");
    }

    const { yogaClasses } = context;

    useEffect(() => {
        if (yogaClasses) {
            const yogaClass = yogaClasses.find(
                (yogaClass) => yogaClass._id === id
            );

            if (!yogaClass) {
                navigate("/page-not-found");
            } else {
                setCurrentYogaClass(yogaClass);
            }
        }
    }, [yogaClasses]);

    useEffect(() => {
        if (currentYogaClass) {
            setFilled(Math.floor(currentYogaClass.rating));
            setHalf(currentYogaClass?.rating % 1 !== 0 ? 1 : 0);
            setDays(currentYogaClass.frequency.length);
        }
    }, [currentYogaClass]);

    const handleBooking = () => {
        const cookies: { [key: string]: string } = document.cookie
            .split(";")
            .reduce((cookies, item) => {
                const [name, value] = item.split("=");
                cookies[name.trim()] = value;
                return cookies;
            }, {} as { [key: string]: string });

        if (cookies["role"] === "USER") {
            setTimeout(() => {
                alert("Yoga Class Booked Successfully:)");
            }, 1000);
        } else {
            navigate("/login");
        }
    };

    if (!currentYogaClass) {
        return <Loading />;
    }

    return (
        <div className="max-w-6xl mx-auto my-10 px-2 sm:px-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 xl:gap-32">
                <div className="h-[380px] p-4 rounded-xl pb-16 shadow-lg hover:shadow-xl bg-white">
                    <img
                        src={currentYogaClass?.image}
                        alt={currentYogaClass?.name}
                        className="h-full w-full object-cover rounded-lg"
                    />
                </div>
                <div className="p-10 shadow-lg hover:shadow-xl bg-white">
                    <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-mainClr">
                        {currentYogaClass?.name}
                    </h1>
                    <p className="mb-1 font-semibold">
                        <span className="text-gray-500">INSTRUCTOR :</span>{" "}
                        {currentYogaClass?.instructor}
                    </p>
                    {currentYogaClass.organization && (
                        <p className="mb-1 font-semibold">
                            <span className="text-gray-500">
                                ORGANIZATION :
                            </span>{" "}
                            {currentYogaClass?.organization}
                        </p>
                    )}
                    <p className="mb-1 font-semibold">
                        <span className="text-gray-500">LEVEL :</span>{" "}
                        {currentYogaClass?.level}
                    </p>
                    <p className="mb-1 font-semibold">
                        <span className="text-gray-500">STYLE :</span>{" "}
                        {currentYogaClass?.style}
                    </p>
                    <p className="mb-1 font-semibold">
                        <span className="text-gray-500">DATE :</span>{" "}
                        {days == 7
                            ? "Everyday"
                            : days == 1
                            ? "1 day in a week"
                            : `${days} days a week`}{" "}
                        ({currentYogaClass?.frequency.join(", ")})
                    </p>
                    <p className="mb-1 font-semibold">
                        <span className="text-gray-500">TIME :</span>{" "}
                        {currentYogaClass?.startTime} -{" "}
                        {currentYogaClass?.endTime}
                    </p>
                    <p className="mb-1 font-semibold">
                        <span className="text-gray-500">DURATION :</span>{" "}
                        {currentYogaClass?.duration}
                    </p>
                    <p className="mb-1 font-semibold">
                        <span className="text-gray-500">FEE :</span> Rs{" "}
                        {currentYogaClass?.price} per month
                    </p>
                    <div className="mb-1 font-semibold flex">
                        <span className="text-gray-500">RATING :</span>{" "}
                        <div className="flex space-x-1 justify-center items-center">
                            {Array.from({ length: filled }).map((_, index) => (
                                <FaStar key={index} className="text-mainClr" />
                            ))}
                            {Array.from({ length: half }).map((_, index) => (
                                <FaStarHalf
                                    key={index}
                                    className="text-mainClr"
                                />
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={handleBooking}
                        className="py-2 mt-5 px-8 bg-mainClr text-sm xs:text-base text-white font-medium rounded-lg border-2 border-mainClr hover:bg-transparent hover:text-black cursor-pointer"
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default YogaClassDetails;
