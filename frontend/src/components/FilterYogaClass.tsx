import { useContext, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { Context } from "../assets/context/MyContext";

const filterItem = [
    {
        name: "Level",
        key: "level",
        values: ["Beginner", "Intermediate", "Advanced", "Kids"],
    },
    {
        name: "Health Conditions",
        key: "healthCondition",
        values: [
            "Pregnancy",
            "Diabetes",
            "PCOS",
            "Blood Pressure",
            "Back Pain",
            "Hypertension",
            "Arthritis",
        ],
    },
    {
        name: "Style",
        key: "style",
        values: [
            "Hatha Yoga",
            "Power Yoga",
            "Ashtanga Yoga",
            "Sivananda Yoga",
            "Iyengar Yoga",
            "Yin Yoga",
            "Satyananda Yoga",
        ],
    },
    {
        name: "Price",
        key: "price",
        values: ["<1000", "1000-2000", "2000-3000", ">3000"],
    },
    {
        name: "Sort",
        key: "sort",
        values: ["Price: Low to High", "Price: High to Low"],
    },
];

const FilterYogaClass = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [heading, setHeading] = useState<string>("");

    const context = useContext(Context);

    if (!context) {
        throw new Error("MyContext provider error");
    }

    const { yogaClasses, duplicateYogaClasses, setSearchResults } = context;

    const handleFilter = (key: string, value: string) => {
        if (!duplicateYogaClasses) return;

        if (key === "sort") {
            const sortYogaClass = Array.from(duplicateYogaClasses);

            if (value === "Price: Low to High") {
                sortYogaClass.sort((a, b) => a.price - b.price);
            } else if (value === "Price: High to Low") {
                sortYogaClass.sort((a, b) => b.price - a.price);
            }

            setSearchResults(sortYogaClass);

            return;
        }

        const filteredClasses = duplicateYogaClasses.filter(
            (yogaClass: YogaClass) => {
                if (key === "level") {
                    return yogaClass.level === value;
                } else if (key === "healthCondition") {
                    return yogaClass.healthCondition === value;
                } else if (key === "style") {
                    return yogaClass.style === value;
                } else if (key === "price") {
                    if (value.charAt(0) === "<") {
                        return yogaClass.price < 1000;
                    } else if (value.charAt(0) === ">") {
                        return yogaClass.price > 3000;
                    } else if (value.charAt(0) === "1") {
                        return (
                            yogaClass.price >= 1000 && yogaClass.price <= 2000
                        );
                    }
                    return yogaClass.price >= 2000 && yogaClass.price <= 3000;
                }
            }
        );

        setSearchResults(filteredClasses); // Set search results
    };

    return (
        <div className="max-w-6xl bg-gradient-to-r from-mainClr to-yellow-400 rounded-lg px-8 flex items-center justify-between relative">
            <div
                onClick={() => setSearchResults(yogaClasses)}
                className="text-xl font-bold cursor-pointer"
            >
                Reset
            </div>
            <div>
                <div
                    onClick={() => setOpen(!open)}
                    className="flex justify-end items-center p-4 space-x-4 cursor-pointer"
                >
                    <span className="text-xl font-bold">Filter</span>
                    <FaChevronDown
                        className={`${
                            open ? "rotate-180" : "rotate-0"
                        } text-xl transition-all`}
                    />
                </div>
                <ul
                    className={`${
                        open ? "block" : "hidden"
                    } overflow-y-auto transition-all z-20 h-80 min-w-56 pb-5 bg-white absolute top-[100%] right-2 sm:right-6 md:right-8`}
                >
                    {filterItem.map((item) => (
                        <>
                            <div key={item.name}>
                                <div
                                    onClick={() => {
                                        heading === item.name
                                            ? setHeading("")
                                            : setHeading(item.name);
                                    }}
                                    className="cursor-pointer group px-4 py-3 text-mainClr hover:text-white hover:bg-mainClr transition-all"
                                >
                                    <h2 className="flex items-center justify-between">
                                        <span className="text-lg font-semibold ">
                                            {item.name}
                                        </span>
                                        <FaChevronDown
                                            className={`${
                                                heading === item.name
                                                    ? "rotate-180"
                                                    : "rotate-0"
                                            } text-lg transition-all`}
                                        />
                                    </h2>
                                </div>
                                <div
                                    className={`${
                                        heading === item.name
                                            ? "block"
                                            : "hidden"
                                    } flex flex-col pb-3 my-1`}
                                >
                                    {item.values.map((value) => (
                                        <div
                                            key={value}
                                            onClick={() =>
                                                handleFilter(item.key, value)
                                            }
                                            className="px-6 py-[1px] hover:bg-orange-500 text-gray-500 hover:text-white transition-all"
                                        >
                                            <p className="font-semibold cursor-pointer">
                                                {value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FilterYogaClass;
