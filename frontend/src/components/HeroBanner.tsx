import hero_banner from "../assets/images/hero-banner.jpg";

const HeroBanner = () => {
    return (
        <div
            className="rounded-3xl h-[480px] mb-10 bg-no-repeat bg-cover bg-center grayscale"
            style={{
                backgroundImage: `url(${hero_banner})`,
            }}
        ></div>
    );
};

export default HeroBanner;
