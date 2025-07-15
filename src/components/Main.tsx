import { FaSearch } from "react-icons/fa";

const Main = () => {

    return (
        <main className="w-full">
            {/* Navigation Bar */}
            <nav className="w-full bg-yellow-400 py-4">
                <div className="flex justify-between items-center px-4 md:px-10">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            src="https://bizweb.dktcdn.net/100/312/429/themes/658927/assets/logo.png?1705893872343"
                            alt="ANT Spa Logo"
                            className="h-10 w-auto"
                        />
                    </div>

                    {/* Navigation Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#"
                            className="text-white font-medium hover:text-yellow-100 transition-colors"
                        >
                            TRANG CHỦ
                        </a>
                        {/* <a href="#" className="text-white font-medium hover:text-yellow-100 transition-colors flex items-center">
                            SẢN PHẨM <span className="ml-1">›</span>
                        </a>
                        <a href="#" className="text-white font-medium hover:text-yellow-100 transition-colors flex items-center">
                            TIN TỨC <span className="ml-1">›</span>
                        </a> */}
                        <div className="relative group">
                            <a
                                href="#"
                                className="text-white font-medium hover:text-yellow-100 transition-colors flex items-center"
                            >
                                SẢN PHẨM <span className="ml-1">›</span>
                            </a>
                            <div className="absolute left-0 mt-2 w-60 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="bg-white border border-yellow-400 rounded-sm shadow-lg">
                                    {[
                                        "MỸ PHẨM THIÊN NHIÊN",
                                        "TRỊ LIỆU DA MẶT",
                                        "TẮM TRẮNG TOÀN THÂN",
                                        "GIẢM CÂN & GIẢM BÉO",
                                    ].map((item, index) => (
                                        <a
                                            key={index}
                                            href="#"
                                            className="block px-4 py-3 text-black font-semibold text-sm hover:bg-yellow-50 border-b border-yellow-100 last:border-b-0"
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Dropdown: TIN TỨC */}
                        {/* Dropdown: TIN TỨC */}
                        <div className="relative group">
                            <a
                                href="#"
                                className="text-white font-medium hover:text-yellow-100 transition-colors flex items-center"
                            >
                                TIN TỨC <span className="ml-1">›</span>
                            </a>
                            <div className="absolute left-0 mt-2 w-60 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="bg-white border border-yellow-400 rounded-sm shadow-lg">
                                    {["KIẾN THỨC LÀM ĐẸP", "TIN TỨC DỊCH VỤ"].map(
                                        (item, index) => (
                                            <a
                                                key={index}
                                                href="#"
                                                className="block px-4 py-3 text-black font-semibold text-sm hover:bg-yellow-50 border-b border-yellow-100 last:border-b-0"
                                            >
                                                {item}
                                            </a>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>

                        <a
                            href="#"
                            className="text-white font-medium hover:text-yellow-100 transition-colors"
                        >
                            GIỚI THIỆU
                        </a>
                        <a
                            href="#"
                            className="text-white font-medium hover:text-yellow-100 transition-colors"
                        >
                            DỊCH VỤ
                        </a>
                        <a
                            href="#"
                            className="text-white font-medium hover:text-yellow-100 transition-colors"
                        >
                            LIÊN HỆ
                        </a>
                        <button className="text-white hover:text-yellow-100 transition-colors">
                            <FaSearch className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-white">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative w-full h-[350px] md:h-[450px] lg:h-[600px] overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('/pictures/slider_1.webp')`,
                    }}
                ></div>
            </section>
        </main>
    );
};

export default Main;
