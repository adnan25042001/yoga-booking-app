import { useContext, useEffect } from "react";
import { Context } from "../../assets/context/MyContext";
import HeroBanner from "../HeroBanner";
import YogaClassList from "../YogaClassList";
import { useNavigate } from "react-router-dom";
import FilterYogaClass from "../FilterYogaClass";

const AdminDashBoard = () => {
    const navigate = useNavigate();
    const context = useContext(Context);

    if (!context) {
        throw new Error("MyContext provider error");
    }

    const {
        yogaClasses,
        duplicateYogaClasses,
        setDuplicateYogaClasses,
        searchResults,
        setSearchResults,
    } = context;

    useEffect(() => {
        setDuplicateYogaClasses(yogaClasses);
    }, [yogaClasses]);

    useEffect(() => {
        setSearchResults(duplicateYogaClasses);
    }, [duplicateYogaClasses]);

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
    return (
        <div className="max-w-6xl mx-auto my-10 px-3 sm:px-3">
            <HeroBanner />
            <FilterYogaClass />
            <YogaClassList
                yogaClasses={searchResults}
                size={null}
                btnType="delete"
            />
        </div>
    );
};

export default AdminDashBoard;
