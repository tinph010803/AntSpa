import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"
type ProductType = {
  id: number
  name: string
  price: string
  image: string
  discount: string | null
  originalPrice?: string
}

const Product = () => {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState("MỸ PHẨM THIÊN NHIÊN")
  const [showModal, setShowModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null)
  const [quantity, setQuantity] = useState(1)
 const { addToCart } = useCart()

  const categories = ["MỸ PHẨM THIÊN NHIÊN", "TRỊ LIỆU DA MẶT", "TẮM TRẮNG TOÀN THÂN", "GIẢM CÂN & GIẢM BÉO"]

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
      name: "Tinh Dầu Nguyên Chất Vitamin E 30ml",
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
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/312/429/products/nuoc-tay-trang-a70aabd0-731b-47d8-8e5d-64e7bb1a08bc.jpg?v=1525614268307",
      discount: null,
    },
  ]

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change))
  }

  const calculateTotal = () => {
    if (!selectedProduct) return "0đ"
    const price = Number.parseInt(selectedProduct.price.replace(/[^\d]/g, ""))
    return `${(price * quantity).toLocaleString()}đ`
  }

  return (
    <section className="w-full py-16 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">MỸ PHẨM THIÊN NHIÊN</h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Ant Spa sở hữu hệ thống dịch vụ làm đẹp đẳng cấp nhất trên thị trường trong nước và quốc tế.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all cursor-pointer ${activeCategory === category
                  ? "bg-amber-800 text-white shadow-lg"
                  : "bg-transparent border-2 border-yellow-400 text-yellow-600 hover:bg-yellow-50"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group relative"
            >
              <div className="relative cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-yellow-400 text-white px-3 py-1 rounded-full font-bold text-sm">
                    {product.discount}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-gray-800 font-medium text-sm mb-1 line-clamp-2">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-600 font-bold text-lg">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                  )}
                </div>
              </div>
              <div
                className="absolute bottom-4 cursor-pointer left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedProduct(product)
                  setQuantity(1)
                  addToCart(1)
                  setShowModal(true)
                }}
              >
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full p-3 shadow-lg cursor-pointer">
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

      {/* MODAL */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="bg-white w-full max-w-4xl mx-4 rounded-lg shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold z-10 cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>

            <div className="p-6">
              {/* Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Bạn đã thêm <span className="text-red-500 font-medium">{selectedProduct.name}</span> vào giỏ hàng
                </span>
              </div>

              {/* Cart Header */}
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                <span className="text-gray-700 font-medium">Giỏ hàng của bạn (1 sản phẩm)</span>
              </div>

              {/* Table */}
              <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        SẢN PHẨM
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ĐƠN GIÁ
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        SỐ LƯỢNG
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        THÀNH TIỀN
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={selectedProduct.image || "/placeholder.svg"}
                            alt={selectedProduct.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div>
                            <p className="font-medium text-gray-900">{selectedProduct.name}</p>
                            <div className="mt-1 space-y-1">
                              <p className="text-sm text-gray-500 cursor-pointer hover:text-red-500">✕ Bỏ sản phẩm</p>
                              <p className="text-sm text-green-600">✓ Sản phẩm vừa thêm!</p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900">{selectedProduct.price}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleQuantityChange(-1)}
                            className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 cursor-pointer"
                          >
                            −
                          </button>
                          <span className="w-8 text-center">{quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(1)}
                            className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900">{calculateTotal()}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">Giao hàng trên toàn quốc</p>
                <p className="text-lg font-medium">
                  Thành tiền: <span className="text-yellow-600 font-bold">{calculateTotal()}</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setShowModal(false)}
                  className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center gap-1 cursor-pointer"
                >
                  ◀ Chọn sản phẩm khác
                </button>
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition-colors cursor-pointer"
                  onClick={() => {
                    setShowModal(false)
                    navigate("/checkout")
                  }}
                >
                  Tiến hành đặt hàng →
                </button>

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Product
