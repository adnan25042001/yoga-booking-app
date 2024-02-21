import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <section className="max-w-6xl mx-auto">
            <div className="pt-9">
                <div
                    className="mx-auto h-[380px] max-w-[640px] bg-cover bg-no-repeat bg-center"
                    style={{
                        backgroundImage:
                            "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
                    }}
                >
                    <h1 className="text-center text-7xl font-semibold sm:text-[90px]">
                        404
                    </h1>
                </div>
                <div className="relative -top-14 flex flex-col items-center justify-center mb-8">
                    <h3 className="text-3xl font-semibold mb-3">
                        Look like you're lost
                    </h3>

                    <p className="mb-8">
                        the page you are looking for not avaible!
                    </p>

                    <Link
                        to="/"
                        className="px-4 py-2 text-white border-[3px] border-[#39AD31] bg-[#39AD31] rounded-md font-semibold hover:bg-transparent hover:text-black"
                    >
                        Go to Home
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PageNotFound;
