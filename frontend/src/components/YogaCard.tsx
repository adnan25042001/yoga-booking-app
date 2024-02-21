import { AiFillStar } from "react-icons/ai";



type Props = {
    yoga: YogaClass;
};

const YogaCard = ({ yoga }: Props) => {
    return (
        <div className="flex flex-col shadow-lg rounded-lg hover:scale-105 transition-all hover:shadow-xl p-4">
            <div className="flex space-x-6">
                <img
                    className="h-28 w-28 object-cover rounded-lg"
                    src={yoga.image}
                    alt={yoga.name}
                />
                <div>
                    <h2 className="text-xl font-bold line-clamp-2 mb-4 text-rose-600">
                        {yoga.name}
                    </h2>
                    <p className="text-sm font-medium text-gray-400 mb-1">
                        for {yoga.level}
                    </p>
                    <p className="text-sm font-medium text-gray-400 line-clamp-1">
                        By {yoga.instructor}{" "}
                        {yoga.organization && `| ${yoga.organization}`}
                    </p>
                </div>
            </div>
            <div className="flex space-x-6">
                <div>
                    <AiFillStar/>
                    <p className="py-2 text-gray-700">
                        Rating: {yoga.rating}/5
                    </p>
                </div>
                <div>
                    <p className="py-2 text-gray-700">
                        Start Time: {yoga.startTime}
                    </p>
                    <p className="py-2 text-gray-700">
                        Duration: {yoga.duration} minutes
                    </p>
                    <p className="py-2 text-gray-700">Style: {yoga.style}</p>
                    <p className="py-2 text-gray-700">Price: ${yoga.price}</p>
                </div>
            </div>
        </div>
    );
};

export default YogaCard;
