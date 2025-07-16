import { useState } from "react";

const FacialTreatment = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const banners = [
        "https://bizweb.dktcdn.net/100/312/429/files/spa-1.jpg?v=1525580747507",
        "https://bizweb.dktcdn.net/100/312/429/files/ahh-green-spa-hours-1.jpg?v=1525580759982",
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
    };
    const products = [
        {
            id: 1,
            name: "Bộ Tinh Dầu Trầm Hương, Tinh Dầu Cam Pure Essential",
            price: "709.000đ",
            discount: null,
            image:
                "https://bizweb.dktcdn.net/thumb/large/100/312/429/products/5ae984b1fb11c8000f042e2e.jpg?v=1525614969220",
        },
        {
            id: 2,
            name: "Tinh Dầu Nguyên Chất Vitamin E 30ml",
            price: "379.000đ",
            discount: null,
            image:
                "https://bizweb.dktcdn.net/thumb/large/100/312/429/products/59d7452323065b0010842c2c.jpg?v=1525614635347",
        },
        {
            id: 3,
            name: "Bộ Serum & Kem Dưỡng Ẩm Ban Ngày Photo-Hydra",
            price: "949.000đ",
            originalPrice: "13.000.000đ",
            discount: "-93%",
            image:
                "https://bizweb.dktcdn.net/thumb/large/100/312/429/products/5a61ae79f606f7001ca89bf6.jpg?v=1525614440820",
        },
        {
            id: 4,
            name: "Gel Dưỡng Làm Giảm Quầng Thâm & Bọng Mắt Sensibio 15ml (Tặng: Kem Chống Nắng La Roche 2ml)",
            price: "379.000đ",
            originalPrice: "450.000đ",
            discount: "16%",
            image:
                "https://bizweb.dktcdn.net/thumb/large/100/312/429/products/nuoc-tay-trang-e3baaf8c-5338-4f3c-a462-a27fcbe22ade.jpg?v=1525612729190",
        },
        {
            id: 5,
            name: "Nước Tẩy Trang Sébium H2O 250ml (Tặng: Kem Dưỡng Giảm Mụn 2ml & Kem Chống Nắng La Roche Posay 2ml)",
            price: "369.000₫",
            originalPrice: "469.000đ",
            discount: "-21%",
            image:
                "https://bizweb.dktcdn.net/thumb/large/100/312/429/products/nuoc-tay-trang.jpg?v=1525612565503",
        },

    ];

    return (
        <section className="bg-gray-50 py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl font-bold text-yellow-500 mb-6">
                    Giảm cân và Giảm béo
                </h2>

                {/* Bộ lọc */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <select className="border rounded px-4 py-2">
                        <option>Giá</option>
                    </select>
                    <select className="border rounded px-4 py-2">
                        <option>Loại sản phẩm</option>
                    </select>
                    <select className="border rounded px-4 py-2">
                        <option>Thương hiệu</option>
                    </select>
                    <select className="border rounded px-4 py-2">
                        <option>Loại da</option>
                    </select>
                </div>

                {/* Xếp theo */}
                <div className="mb-4">
                    <strong className="mr-2">Xếp theo:</strong>
                    <label className="mr-3">
                        <input type="radio" name="sort" /> Mới nhất
                    </label>
                    <label className="mr-3">
                        <input type="radio" name="sort" /> Giá thấp đến cao
                    </label>
                    <label>
                        <input type="radio" name="sort" /> Giá cao xuống thấp
                    </label>
                </div>

                {/* BANNER */}
                <div className="mb-6 relative w-full overflow-hidden rounded-lg h-50 md:h-80">
                    {banners.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Banner ${index + 1}`}
                            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                                }`}
                        />
                    ))}

                    {/* Nút trái */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow z-20"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Nút phải */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow z-20"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Dấu chấm */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                        {banners.map((_, i) => (
                            <span
                                key={i}
                                className={`w-3 h-3 rounded-full ${i === currentSlide ? "bg-yellow-400" : "bg-white"
                                    }`}
                            ></span>
                        ))}
                    </div>
                </div>

                {/* Danh sách sản phẩm */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow relative group overflow-hidden"
                        >
                            {product.discount && (
                                <div className="absolute top-3 right-3 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 text-white font-bold text-xs flex items-center justify-center rounded-full shadow-lg z-10">
                                    {product.discount}
                                </div>
                            )}

                            <div className="relative aspect-square">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-4">
                                <h3 className="text-sm font-medium text-gray-800 mb-3 line-clamp-2 min-h-[2.5rem]">
                                    {product.name}
                                </h3>

                                <div className="flex items-center gap-2">
                                    <span className="text-yellow-600 font-bold text-lg">
                                        {product.price}
                                    </span>
                                    {product.originalPrice && (
                                        <span className="text-gray-400 line-through text-sm">
                                            {product.originalPrice}
                                        </span>
                                    )}
                                </div>

                                {/* Đường gạch dưới vàng */}
                                <div className="w-8 h-1 bg-yellow-400 mt-2"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FacialTreatment;
