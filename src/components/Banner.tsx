import HeroImage from "../assets/banner.png";

const Banner = () => {
    return (
        <div className="container mx-auto mb-10">
            <div
                className="hero h-[70vh] bg-cover"
                style={{
                    backgroundImage: `url(${HeroImage})`,
                }}
            >
            </div>
        </div>
    );
};

export default Banner;