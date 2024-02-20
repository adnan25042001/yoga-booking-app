import yoga from "../assets/images/yoga.png";

const YogaCard = () => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img
                        className="h-48 w-full object-cover md:w-48"
                        src={yoga}
                        alt="Yoga className"
                    />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        Yoga className
                    </div>
                    <p className="block mt-1 text-lg leading-tight font-medium text-black">
                        Difficulty Level: Beginner
                    </p>
                    <p className="mt-2 text-gray-500">Level: Level 1</p>
                    <p className="mt-2 text-gray-500">Instructor: John Doe</p>
                    <p className="mt-2 text-gray-500">
                        Timing: 6:00 AM - 7:00 AM
                    </p>
                    <p className="mt-2 text-gray-500">Price: $10</p>
                    <button className="mt-5 px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        Join
                    </button>
                </div>
            </div>
        </div>
    );
};

export default YogaCard;
