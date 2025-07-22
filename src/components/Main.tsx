
const Main = () => {

    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="relative w-full h-[350px] md:h-[450px] lg:h-[600px] overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('/pictures/slider_1.webp.png')`,
                    }}
                ></div>
            </section>
        </main>
    );
};

export default Main;
