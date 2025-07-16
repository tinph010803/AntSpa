import { useState } from "react";

const Product = () => {
  const [activeCategory, setActiveCategory] = useState("MỸ PHẨM THIÊN NHIÊN");

  const categories = [
    "MỸ PHẨM THIÊN NHIÊN",
    "TRỊ LIỆU DA MẶT",
    "TẮM TRẮNG TOÀN THÂN",
    "GIẢM CÂN & GIẢM BÉO",
  ];

  const products = [
    {
      id: 1,
      name: "Tinh Dầu Hoắc Hương 10ml",
      price: "239.000đ",
      image: "https://bizweb.dktcdn.net/thumb/large/100/312/429/products/5ae986a4e613f0000fdbcee5.jpg?v=1525614723443",
      discount: null,
    },
    {
      id: 2,
      name: "Tinh Dầu Nguyên Chất Vitamin E 30...",
      price: "379.000đ",
      image: "https://bizweb.dktcdn.net/thumb/large/100/312/429/products/59d7452323065b0010842c2c.jpg?v=1525614635347",
      discount: null,
    },
    {
      id: 3,
      name: "Bộ Serum & Kem Dưỡng Ẩm Ban Ngày...",
      price: "949.000đ",
      originalPrice: "13.000.000đ",
      image: "https://bizweb.dktcdn.net/thumb/large/100/312/429/products/5a61ae79f606f7001ca89bf6.jpg?v=1525614440820",
      discount: "93%",
    },
    {
      id: 4,
      name: "Bộ Serum & Kem Dưỡng Chống Lão...",
      price: "1.904.000đ",
      image: "https://bizweb.dktcdn.net/thumb/large/100/312/429/products/nuoc-tay-trang-a70aabd0-731b-47d8-8e5d-64e7bb1a08bc.jpg?v=1525614268307",
      discount: null,
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">MỸ PHẨM THIÊN NHIÊN</h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Ant Spa sở hữu hệ thống dịch vụ làm đẹp đẳng cấp nhất trên thị trường trong nước và quốc tế.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all ${activeCategory === category
                ? "bg-amber-800 text-white shadow-lg"
                : "bg-transparent border-2 border-yellow-400 text-yellow-600 hover:bg-yellow-50"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group relative"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-yellow-400 text-white px-3 py-1 rounded-full font-bold text-sm">
                    {product.discount}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-gray-800 font-medium text-sm mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-600 font-bold text-lg">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                  )}
                </div>
              </div>

              {/* Hover Button */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full p-3 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.3 5.6a1 1 0 00.98 1.4h11.64a1 1 0 00.98-1.2L17 13M9 21h.01M15 21h.01"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
