import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminAddYogaClass = () => {
    const [time, setTime] = useState<string>("");
    const navigate = useNavigate();
    const [selectedDays, setSelectedDays] = useState<Record<string, boolean>>({
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: false,
        Sunday: false,
    });

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

    const handleSelectDays = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDays({
            ...selectedDays,
            [event.target.name]: event.target.checked,
        });
    };

    // const handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setTime(e.target.value);
    // };

    // const handleSubmitYogaClassForm = (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();

    //     // Split the time into hours and minutes
    //     const [h, minutes] = time.split(":");

    //     const hours = +h;

    //     // Determine if the time is AM or PM
    //     const period = hours >= 12 ? "PM" : "AM";

    //     // Convert the hours to 12-hour format
    //     const hours12 = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;

    //     // Format the time as a string with AM/PM
    //     const time12 = `${hours12}:${minutes} ${period}`;

    //     console.log(time12);

    //     console.log(time);
    // };

    return (
        <div className="max-w-6xl mx-auto my-10 px-2 sm:px-3">
            <h1 className="text-3xl sm:text-4xl mb-10 text-center font-bold text-rose-600">
                Add New Yoga Class
            </h1>
            <form className="flex flex-col mx-auto w-full gap-6 shadow-lg px-3 pt-8 pb-14  rounded-lg">
                <label
                    htmlFor="name"
                    className="text-gray-800 font-semibold flex flex-col"
                >
                    Yoga Class Name
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter yoga class name"
                        className="bg-rose-50 font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none mt-1"
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
                            placeholder="Enter instructor name"
                            className="bg-rose-50 font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none mt-1"
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
                            className="bg-rose-50 font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none mt-1"
                        />
                    </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6">
                    <div className="grid grid-cols-2 w-full gap-6">
                        <label
                            htmlFor="start_time"
                            className="text-gray-800 font-semibold flex flex-col"
                        >
                            Start time
                            <input
                                id="start_time"
                                type="time"
                                className="bg-rose-50 font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none mt-1"
                            />
                        </label>
                        <label
                            htmlFor="end_time"
                            className="text-gray-800 font-semibold flex flex-col"
                        >
                            Start time
                            <input
                                id="end_time"
                                type="time"
                                className="bg-rose-50 font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none mt-1"
                            />
                        </label>
                    </div>
                    <div className="w-full">
                        <p className="text-gray-800 font-semibold ">
                            Difficulty level
                        </p>
                        <select
                            name="level"
                            className="bg-rose-50 font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none mt-1 w-full"
                        >
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                            <option value="kids">Kids</option>
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
                    <label
                        htmlFor="healthCondition"
                        className="text-gray-800 font-semibold flex flex-col"
                    >
                        HealthCondition
                        <input
                            id="healthCondition"
                            type="text"
                            placeholder="Enter healthCondition"
                            className="bg-rose-50 font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none mt-1"
                        />
                    </label>
                    <label
                        htmlFor="style"
                        className="text-gray-800 font-semibold flex flex-col"
                    >
                        Style
                        <input
                            id="style"
                            type="text"
                            placeholder="Enter style name"
                            className="bg-rose-50 font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none mt-1"
                        />
                    </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6">
                    <div className="grid grid-cols-2 w-full gap-6">
                        <label
                            htmlFor="price"
                            className="text-gray-800 font-semibold flex flex-col"
                        >
                            Price
                            <input
                                id="Price"
                                type="number"
                                placeholder="Enter Price"
                                className="bg-rose-50 font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none mt-1"
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
                                placeholder="Enter ratings"
                                className="bg-rose-50 font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none mt-1"
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
                            required
                            placeholder="Enter image url"
                            className="bg-rose-50 font-semibold placeholder:text-gray-500 p-4 rounded-xl outline-none border-none mt-1"
                        />
                    </label>
                </div>
                <input
                    type="submit"
                    value="Add Yoga Class"
                    className="bg-rose-600 text-white font-bold mt-6 p-4 rounded-xl outline-none border-none cursor-pointer hover:shadow-lg hover:scale-95 transition-all"
                />
            </form>
        </div>
    );
};

export default AdminAddYogaClass;
