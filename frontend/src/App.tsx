import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Explore from "./components/Explore";
import AdminLogin from "./components/Admin/AdminLogin";
import PageNotFound from "./components/PageNotFound";
import AdminAddYogaClass from "./components/Admin/AdminAddYogaClass";
import YogaClassDetails from "./components/YogaClassDetails";

const App = () => {
    return (
        <>
            <BrowserRouter>
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
                        path="/yoga-class/:name"
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
                        path="/admin/addyogaclass"
                        element={<AdminAddYogaClass />}
                    />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
