import { ChangeEvent, FormEvent, useState } from "react";

const AdminAddYogaClass = () => {
    const [time, setTime] = useState<string>("");

    const handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTime(e.target.value);
    };

    const handleSubmitYogaClassForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Split the time into hours and minutes
        const [h, minutes] = time.split(":");

        const hours = +h;

        // Determine if the time is AM or PM
        const period = hours >= 12 ? "PM" : "AM";

        // Convert the hours to 12-hour format
        const hours12 = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;

        // Format the time as a string with AM/PM
        const time12 = `${hours12}:${minutes} ${period}`;

        console.log(time12);

        console.log(time);
    };

    return (
        <div>
            <form
                className="flex flex-col gap-6"
                onSubmit={handleSubmitYogaClassForm}
            >
                <input
                    type="time"
                    placeholder="Enter your start time"
                    onChange={handleTimeChange}
                    className="bg-rose-50 font-semibold placeholder-gray-500 p-4 rounded-xl outline-none border-none"
                />
                <input
                    type="time"
                    placeholder="Enter your end time"
                    className="bg-rose-50 font-semibold placeholder-gray-500 p-4 rounded-xl outline-none border-none"
                />
                <div className="flex flex-col gap-2">
                    <label>Select Weekdays:</label>
                    <div className="flex flex-row gap-2">
                        <input
                            type="checkbox"
                            id="monday"
                            name="weekday"
                            value="Monday"
                        />
                        <label htmlFor="monday">Monday</label>
                    </div>
                    {/* Add more checkboxes for other weekdays */}
                </div>
                <input
                    type="submit"
                    value="Submit"
                    className="bg-rose-600 text-white font-bold p-4 rounded-xl outline-none border-none cursor-pointer hover:shadow-lg hover:scale-95 transition-all"
                />
            </form>
        </div>
    );
};

export default AdminAddYogaClass;
