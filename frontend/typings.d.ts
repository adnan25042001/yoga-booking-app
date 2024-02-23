interface SignupObj {
    name: string;
    email: string;
    number: string;
    password: string;
}

interface LoginObj {
    email: string;
    number: string;
    password: string;
}

interface AdminLoginObj {
    username: string;
    password: string;
}

interface YogaClass {
    _id: string;
    name: string;
    level: Level;
    instructor: string;
    organization: string;
    startTime: string;
    endTime: string;
    duration: number;
    frequency: WeekDays[];
    healthCondition: healthCondition;
    style: style;
    price: number;
    rating: number;
    image: string;
    __v: number;
}

type Level = "Beginner" | "Intermediate" | "Advanced" | "Kids";

type WeekDays =
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";

type healthCondition =
    | "Pregnancy"
    | "Diabetes"
    | "PCOS"
    | "Blood Pressure"
    | "Back Pain"
    | "Hypertension"
    | "Arthritis"
    | "";

type style =
    | "Hatha Yoga"
    | "Power Yoga"
    | "Ashtanga Yoga"
    | "Sivananda Yoga"
    | "Iyengar Yoga"
    | "Yin Yoga"
    | "Satyananda Yoga";
