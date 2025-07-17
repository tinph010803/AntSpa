import { useState, useEffect, useRef } from "react"

const FacialTreatment = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const filters = {
    price: [
      "Dưới 100.000đ",
      "100.000đ - 200.000đ",
      "200.000đ - 300.000đ",
      "300.000đ - 500.000đ",
      "500.000đ - 1.000.000đ",
    ],
    type: ["Serum", "Kem dưỡng", "Tinh dầu", "Sữa tắm", "Dầu gội"],
    brand: ["Scentuals", "Talika", "Byphasse", "Health Basics", "Whoo"],
    skin: ["Da dầu", "Da khô", "Da mụn", "Da nhạy cảm"],
  }

  const banners = [
    "https://bizweb.dktcdn.net/100/312/429/files/spa-1.jpg?v=1525580747507",
    "https://bizweb.dktcdn.net/100/312/429/files/ahh-green-spa-hours-1.jpg?v=1525580759982",
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  const products = [
    {
      id: 1,
      name: "Bộ Sữa Dưỡng Thể Yoga Serenity, Muối Tắm Giải Độc Yoga Vitality",
      price: "369.000đ",
      discount: null,
      image: "https://bizweb.dktcdn.net/thumb/large/100/312/429/products/5ae98e97fb11c8000f0430f3.jpg?v=1525615250703",
    },
    {
      id: 2,
      name: "Bộ Tinh Dầu Trầm Hương, Tinh Dầu Cam Pure Essential",
      price: "709.000đ",
      discount: null,
      image: "https://bizweb.dktcdn.net/thumb/large/100/312/429/products/5ae984b1fb11c8000f042e2e.jpg?v=1525614969220",
    },
    {
      id: 3,
      name: "Tinh Dầu Nguyên Chất Vitamin E 30ml",
      price: "379.000đ",
      discount: null,
      image: "https://bizweb.dktcdn.net/thumb/large/100/312/429/products/59d7452323065b0010842c2c.jpg?v=1525614635347",
    },
    {
      id: 4,
      name: "Bộ Serum & Kem Dưỡng Ẩm Ban Ngày Photo-Hydra",
      price: "949.000đ",
      originalPrice: "13.000.000đ",
      discount: "-93%",
      image: "https://bizweb.dktcdn.net/thumb/large/100/312/429/products/5a61ae79f606f7001ca89bf6.jpg?v=1525614440820",
    },
    {
      id: 5,
      name: "Bộ Serum & Kem Dưỡng Chống Lão Hóa Ban Đêm Quintessence",
      price: "1.904.000₫",
      discount: null,
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/312/429/products/nuoc-tay-trang-a70aabd0-731b-47d8-8e5d-64e7bb1a08bc.jpg?v=1525614268307",
    },
    {
      id: 6,
      name: "Bộ: 2 Sữa Tắm Olive, Sữa & Bơ 400ml",
      price: "319.000đ",
      discount: null,
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/312/429/products/nuoc-tay-trang-3138b291-d36d-4640-907b-96cd235eb162.jpg?v=1525614086550",
    },
    {
      id: 7,
      name: "Dầu Gội Spa Essence 350ml (Tặng: Mặt Nạ 3D Dưỡng Trắng Da 27g)",
      price: "759.000đ",
      originalPrice: "850.000đ",
      discount: "-11%",
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/312/429/products/nuoc-tay-trang-9a46a5ad-ff91-48bb-83f8-77288d688859.jpg?v=1525613432710",
    },
  ]

  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        {/* TIÊU ĐỀ */}
        <h2 className="text-center text-3xl font-bold text-yellow-500 mb-6">Tắm trắng toàn thân</h2>

        {/* BỘ LỌC */}
        <div ref={dropdownRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {/* Dropdown Giá */}
          <div className="relative">
            <button
              className="border border-gray-300 rounded-lg px-4 py-3 w-full text-left bg-white hover:border-gray-400 transition-colors flex items-center justify-between"
              onClick={() => toggleDropdown("price")}
            >
              <span>Giá</span>
              <svg
                className={`w-4 h-4 transition-transform ${openDropdown === "price" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === "price" && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg w-full max-h-60 overflow-y-auto z-50">
                {filters.price.map((option, index) => (
                  <label key={index} className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer">
                    <input type="checkbox" className="mr-3 text-yellow-500 focus:ring-yellow-500" />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Dropdown Loại sản phẩm */}
          <div className="relative">
            <button
              className="border border-gray-300 rounded-lg px-4 py-3 w-full text-left bg-white hover:border-gray-400 transition-colors flex items-center justify-between"
              onClick={() => toggleDropdown("type")}
            >
              <span>Loại sản phẩm</span>
              <svg
                className={`w-4 h-4 transition-transform ${openDropdown === "type" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === "type" && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg w-full max-h-60 overflow-y-auto z-50">
                {filters.type.map((option, index) => (
                  <label key={index} className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer">
                    <input type="checkbox" className="mr-3 text-yellow-500 focus:ring-yellow-500" />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Dropdown Thương hiệu */}
          <div className="relative">
            <button
              className="border border-gray-300 rounded-lg px-4 py-3 w-full text-left bg-white hover:border-gray-400 transition-colors flex items-center justify-between"
              onClick={() => toggleDropdown("brand")}
            >
              <span>Thương hiệu</span>
              <svg
                className={`w-4 h-4 transition-transform ${openDropdown === "brand" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === "brand" && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg w-full max-h-60 overflow-y-auto z-50">
                {filters.brand.map((option, index) => (
                  <label key={index} className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer">
                    <input type="checkbox" className="mr-3 text-yellow-500 focus:ring-yellow-500" />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Dropdown Loại da */}
          <div className="relative">
            <button
              className="border border-gray-300 rounded-lg px-4 py-3 w-full text-left bg-white hover:border-gray-400 transition-colors flex items-center justify-between"
              onClick={() => toggleDropdown("skin")}
            >
              <span>Loại da</span>
              <svg
                className={`w-4 h-4 transition-transform ${openDropdown === "skin" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === "skin" && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg w-full max-h-60 overflow-y-auto z-50">
                {filters.skin.map((option, index) => (
                  <label key={index} className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer">
                    <input type="checkbox" className="mr-3 text-yellow-500 focus:ring-yellow-500" />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* XẾP THEO */}
        <div className="mb-6  p-4 rounded-lg">
          <div className="flex flex-wrap items-center gap-4">
            <strong className="text-gray-700">Xếp theo:</strong>
            <label className="flex items-center cursor-pointer">
              <input type="radio" name="sort" className="mr-2 text-yellow-500 focus:ring-yellow-500" />
              <span className="text-sm">Mới nhất</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input type="radio" name="sort" className="mr-2 text-yellow-500 focus:ring-yellow-500" />
              <span className="text-sm">Giá thấp đến cao</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input type="radio" name="sort" className="mr-2 text-yellow-500 focus:ring-yellow-500" />
              <span className="text-sm">Giá cao xuống thấp</span>
            </label>
          </div>
        </div>

        {/* BANNER */}
        <div className="mb-8 relative w-full overflow-hidden rounded-xl shadow-lg" style={{ height: "300px" }}>
          {banners.map((img, index) => (
            <img
              key={index}
              src={img || "/placeholder.svg"}
              alt={`Banner ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}

          {/* Nút trái */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-3 rounded-full shadow-lg z-20 transition-all hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Nút phải */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-3 rounded-full shadow-lg z-20 transition-all hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dấu chấm */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentSlide ? "bg-yellow-400 scale-125" : "bg-white/70 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>

        {/* DANH SÁCH SẢN PHẨM */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 relative group overflow-hidden cursor-pointer transform hover:-translate-y-1"
              onClick={() => (window.location.href = `/product/${product.id}`)}
            >
              {product.discount && (
                <div className="absolute top-3 right-3 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 text-white font-bold text-xs flex items-center justify-center rounded-full shadow-lg z-10">
                  {product.discount}
                </div>
              )}

              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Hover Button */}
                <div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.location.href = `/product/${product.id}`
                  }}
                >
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full p-3 shadow-lg transform hover:scale-110 transition-all">
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

              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-800 mb-3 line-clamp-2 min-h-[2.5rem] leading-tight">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-600 font-bold text-lg">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                  )}
                </div>
                <div className="w-8 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FacialTreatment
