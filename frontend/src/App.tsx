import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Explore from "./components/Explore";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Home />
                            </>
                        }
                    />
                    <Route
                        path="/explore"
                        element={
                            <>
                                <Explore />
                            </>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <>
                                <Login />
                            </>
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            <>
                                <Signup />
                            </>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
