import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Explore from "./components/Explore";
import PageNotFound from "./components/PageNotFound";
import YogaClassDetails from "./components/YogaClassDetails";
import { useEffect } from "react";
import AdminLogin from "./components/admin/AdminLogin";
import AdminNavbar from "./components/admin/AdminNavbar";
import AdminDashBoard from "./components/admin/AdminDashBoard";
import AdminAddYogaClass from "./components/admin/AdminAddYogaClass";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const App = () => {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Navbar />
                                <Home />
                            </>
                        }
                    />
                    <Route
                        path="/explore"
                        element={
                            <>
                                <Navbar />
                                <Explore />
                            </>
                        }
                    />
                    <Route
                        path="/yoga-class/:id"
                        element={
                            <>
                                <Navbar />
                                <YogaClassDetails />
                            </>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <>
                                <Navbar />
                                <Login />
                            </>
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            <>
                                <Navbar />
                                <Signup />
                            </>
                        }
                    />
                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route
                        path="/admin/dashboard"
                        element={
                            <>
                                <AdminNavbar />
                                <AdminDashBoard />
                            </>
                        }
                    />
                    <Route
                        path="/admin/addyogaclass"
                        element={
                            <>
                                <AdminNavbar />
                                <AdminAddYogaClass />
                            </>
                        }
                    />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
