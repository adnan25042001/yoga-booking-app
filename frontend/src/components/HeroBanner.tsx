import hero_banner from "../assets/images/hero-banner.jpg";
import SearchBar from "./SearchBar";

const HeroBanner = () => {
    return (
        <div className="max-w-5xl mx-auto relative rounded-3xl h-[480px] mb-10 overflow-hidden">
            <div
                className="absolute inset-0 bg-no-repeat bg-cover bg-center"
                style={{
                    backgroundImage: `url(${hero_banner})`,
                    filter: "grayscale(100%)",
                }}
            ></div>
            <div className="relative w-full h-full">
                <div className="w-full flex flex-col gap-12 justify-center items-center text-center absolute top-[55%] left-[50%]  translate-y-[-50%] translate-x-[-50%]">
                    <h1 className="text-white w-full text-4xl xs:text-5xl font-bold">
                        Find your perfect yoga class
                    </h1>

                    <SearchBar />
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
