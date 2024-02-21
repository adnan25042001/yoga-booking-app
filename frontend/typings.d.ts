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
    level: level;
    instructor: string;
    organization: string;
    startTime: string;
    endTime: string;
    duration: number;
    frequency: [WeekDays];
    healthCondition: string;
    style: string;
    price: number;
    rating: number;
    image: string;
    __v: number;
}

type level = "beginner" | "intermediate" | "advanced" | "kids";

type WeekDays =
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
