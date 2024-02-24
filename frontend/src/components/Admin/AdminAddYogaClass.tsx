import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewYogaClassHandler } from "../../assets/api/admin/addNewYogaClass";
import { getAllYogaClass } from "../../assets/api/getAllYogaClass";
import { Context } from "../../assets/context/MyContext";

const level = ["Beginner", "Intermediate", "Advanced", "Kids"];
const healthCondition = [
    "None",
    "Pregnancy",
    "Diabetes",
    "PCOS",
    "Blood Pressure",
    "Back Pain",
    "Hypertension",
    "Arthritis",
];
const style = [
    "Power Yoga",
    "Hatha Yoga",
    "Ashtanga Yoga",
    "Sivananda Yoga",
    "Iyengar Yoga",
    "Yin Yoga",
    "Satyananda Yoga",
];

const initialSelectedDays = {
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
} as Record<WeekDays, boolean>;

const initialFormState: YogaClass = {
    _id: "",
    name: "",
    level: "Beginner",
    instructor: "",
    organization: "",
    startTime: "",
    endTime: "",
    duration: 0,
    frequency: [],
    healthCondition: "",
    style: "Power Yoga",
    price: 0,
    rating: 0,
    image: "",
    __v: 0,
};

const AdminAddYogaClass = () => {
    const [formState, setFormState] = useState<YogaClass>(initialFormState);
    const navigate = useNavigate();
    const [selectedDays, setSelectedDays] =
        useState<Record<string, boolean>>(initialSelectedDays);
    const [startTime, setStartTime] = useState<string>("");
    const [endTime, setEndTime] = useState<string>("");

    const context = useContext(Context);

    if (!context) {
        throw new Error("MyContext provider error");
    }

    const { setyogaClasses } = context;

    useEffect(() => {
        const cookies: { [key: string]: string } = document.cookie
            .split(";")
            .reduce((cookies, item) => {
                const [name, value] = item.split("=");
                cookies[name.trim()] = value;
                return cookies;
            }, {} as { [key: string]: string });

        if (!cookies["auth-token"]) {
            navigate("/");
        }

        if (cookies["role"] != "ADMIN") {
            navigate("/admin/login");
        }
    }, []);

    // Convert 24-hour format time to 12-hour format
    const convertTo12Hour = (time: string): string => {
        let [hours, minutes] = time.split(":");
        let period = +hours >= 12 ? "PM" : "AM";
        let hoursNumber = +hours % 12 || 12;
        return `${hoursNumber}:${minutes} ${period}`;
    };

    const calculateDuration = (startTime: string, endTime: string): number => {
        let start = new Date(`2024-01-01T${startTime}Z`);
        let end = new Date(`2024-01-01T${endTime}Z`);

        let duration = (end.getTime() - start.getTime()) / 60000; // duration in minutes
        return duration;
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setFormState({ ...formState, [id]: value });
    };

    const handleInputSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { id, value } = event.target;

        setFormState({ ...formState, [id]: value === "None" ? "" : value });
    };

    const handleSelectDays = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDays({
            ...selectedDays,
            [event.target.name]: event.target.checked,
        });
    };

    const handleSubmitNewYogaClassForm = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        formState.startTime = convertTo12Hour(startTime);
        formState.endTime = convertTo12Hour(endTime);

        formState.duration = calculateDuration(startTime, endTime);

        for (let day in selectedDays) {
            if (selectedDays[day]) {
                formState.frequency.push(day as WeekDays);
            }
        }

        setFormState({ ...formState });

        addNewYogaClassHandler(formState);

        getAllYogaClass().then((data) => {
            setyogaClasses(data);
        });

        setStartTime("");

        setEndTime("");

        setSelectedDays({ ...initialSelectedDays });

        setFormState({ ...initialFormState });
    };

    return (
        <div className="max-w-6xl mx-auto my-10 px-2 sm:px-3">
            <h1 className="text-3xl sm:text-4xl mb-10 text-center font-bold text-mainClr">
                Add New Yoga Class
            </h1>
            <form
                onSubmit={handleSubmitNewYogaClassForm}
                className="flex flex-col mx-auto w-full gap-6 shadow-lg px-3 pt-8 pb-14  rounded-lg bg-white"
            >
                <label
                    htmlFor="name"
                    className="text-gray-800 font-semibold flex flex-col"
                >
                    Yoga Class Name
                    <input
                        id="name"
                        type="text"
                        value={formState.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter yoga class name"
                        className="bg-secondaryClr font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none mt-1"
                    />
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6">
                    <label
                        htmlFor="instructor"
                        className="text-gray-800 font-semibold flex flex-col"
                    >
                        Instructor
                        <input
                            id="instructor"
                            type="text"
                            required
                            value={formState.instructor}
                            onChange={handleInputChange}
                            placeholder="Enter instructor name"
                            className="bg-secondaryClr font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none mt-1"
                        />
                    </label>
                    <label
                        htmlFor="organization"
                        className="text-gray-800 font-semibold flex flex-col"
                    >
                        Organization
                        <input
                            id="organization"
                            type="text"
                            placeholder="Enter organization name"
                            value={formState.organization}
                            onChange={handleInputChange}
                            className="bg-secondaryClr font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none mt-1"
                        />
                    </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6">
                    <div className="grid grid-cols-2 w-full gap-6">
                        <label
                            htmlFor="startTime"
                            className="text-gray-800 font-semibold flex flex-col"
                        >
                            Start time
                            <input
                                id="startTime"
                                type="time"
                                required
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}
                                className="bg-secondaryClr font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none mt-1"
                            />
                        </label>
                        <label
                            htmlFor="endTime"
                            className="text-gray-800 font-semibold flex flex-col"
                        >
                            End time
                            <input
                                id="endTime"
                                type="time"
                                required
                                value={endTime}
                                onChange={(e) => setEndTime(e.target.value)}
                                className="bg-secondaryClr font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none mt-1"
                            />
                        </label>
                    </div>
                    <div className="w-full">
                        <p className="text-gray-800 font-semibold ">
                            Difficulty level
                        </p>
                        <select
                            name="level"
                            id="level"
                            required
                            value={formState.level}
                            onChange={handleInputSelect}
                            className="bg-secondaryClr font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none mt-1 w-full"
                        >
                            {level.map((ele) => (
                                <option key={ele} value={ele}>
                                    {ele}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div>
                    <p className="text-gray-800 font-semibold flex flex-col">
                        Select days
                    </p>
                    <div className="flex flex-wrap gap-x-6 gap-y-4 mt-1">
                        {Object.keys(selectedDays).map((day) => (
                            <div
                                key={day}
                                className="flex justify-center items-center gap-2"
                            >
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-gray-500"
                                    checked={selectedDays[day]}
                                    onChange={handleSelectDays}
                                    name={day}
                                />
                                <span className="text-gray-500 font-semibold">
                                    {day}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6">
                    <div className="w-full">
                        <p className="text-gray-800 font-semibold ">
                            HealthCondition
                        </p>
                        <select
                            name="healthCondition"
                            id="healthCondition"
                            value={formState.healthCondition}
                            onChange={handleInputSelect}
                            className="bg-secondaryClr font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none mt-1 w-full"
                        >
                            {healthCondition.map((ele) => (
                                <option key={ele} value={ele}>
                                    {ele}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="w-full">
                        <p className="text-gray-800 font-semibold ">Style</p>
                        <select
                            name="style"
                            id="style"
                            value={formState.style}
                            onChange={handleInputSelect}
                            className="bg-secondaryClr font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none mt-1 w-full"
                        >
                            {style.map((ele) => (
                                <option key={ele} value={ele}>
                                    {ele}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6">
                    <div className="grid grid-cols-2 w-full gap-6">
                        <label
                            htmlFor="price"
                            className="text-gray-800 font-semibold flex flex-col"
                        >
                            Price
                            <input
                                id="price"
                                type="number"
                                value={formState.price}
                                onChange={handleInputChange}
                                placeholder="Enter Price"
                                className="bg-secondaryClr font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none mt-1"
                            />
                        </label>
                        <label
                            htmlFor="rating"
                            className="text-gray-800 font-semibold flex flex-col"
                        >
                            Rating
                            <input
                                id="rating"
                                type="number"
                                step="0.1"
                                min={0}
                                max={5}
                                value={formState.rating}
                                onChange={handleInputChange}
                                placeholder="Enter ratings"
                                className="bg-secondaryClr font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none mt-1"
                            />
                        </label>
                    </div>
                    <label
                        htmlFor="image"
                        className="text-gray-800 font-semibold flex flex-col"
                    >
                        Image
                        <input
                            id="image"
                            type="url"
                            value={formState.image}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter image url"
                            className="bg-secondaryClr font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none mt-1"
                        />
                    </label>
                </div>
                <input
                    type="submit"
                    value="Add Yoga Class"
                    className="bg-mainClr text-white font-bold mt-6 p-4 rounded-xl outline-none border-none cursor-pointer hover:shadow-lg hover:scale-95 transition-all"
                />
            </form>
        </div>
    );
};

export default AdminAddYogaClass;
