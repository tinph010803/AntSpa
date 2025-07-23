// Header.tsx
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useCart } from "../context/CartContext"
const Header = () => {
  const [showSearch, setShowSearch] = useState(false)
  const { cartCount } = useCart()
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="w-full bg-amber-900 text-yellow-300 text-sm py-2">
        <div className="flex flex-wrap justify-between items-center gap-2 px-4 md:px-10">
          {/* Left side - Contact info */}
          <div className="flex flex-wrap items-center text-xs sm:text-sm gap-x-1 gap-y-1 max-w-full sm:max-w-none">
            <span>Chăm sóc khách hàng:</span>
            <span className="font-medium text-yellow-400">0982 362 509</span>
            <span className="hidden sm:inline">|</span>
            <span>Email:</span>
            <span className="font-medium text-yellow-400 break-all">baotrung304@gmail.com</span>
          </div>

          {/* Right side - Account and Cart buttons */}
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
            {/* Account Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-white px-3 py-1 rounded font-medium transition-colors text-xs sm:text-sm cursor-pointer">
                <FaUser className="w-4 h-4" />
                <span className="hidden sm:inline">Tài khoản</span>
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-white border border-yellow-400 rounded-sm shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/register" className="block px-4 py-2 text-black font-semibold text-sm hover:bg-yellow-50 border-b border-yellow-100"> ĐĂNG KÝ </Link>
                <Link to="/login" className="block px-4 py-2 text-black font-semibold text-sm hover:bg-yellow-50"> ĐĂNG NHẬP </Link>
              </div>
            </div>

            {/* Cart */}
            <Link
              to="/cart"
              className="flex items-center gap-1 border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-white px-3 py-1 rounded font-medium transition-colors text-xs sm:text-sm cursor-pointer"
            >
              <FaShoppingCart className="w-4 h-4" />
              <span>Giỏ hàng</span>
              <span className="bg-white text-orange-500 rounded-full px-1.5 py-0.5 text-xs font-bold min-w-[20px] text-center">
                {cartCount}
              </span>
            </Link>

          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="w-full bg-yellow-400 py-4">
        <div className="flex justify-between items-center px-4 md:px-10">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="https://bizweb.dktcdn.net/100/312/429/themes/658927/assets/logo.png?1705893872343"
                alt="ANT Spa Logo"
                className="h-10 w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white font-medium hover:text-yellow-100 transition-colors">TRANG CHỦ</Link>

            {/* Dropdown: Sản phẩm */}
            <div className="relative group">
              <button className="text-white font-medium hover:text-yellow-100 transition-colors flex items-center cursor-pointer">
                SẢN PHẨM <span className="ml-1">&#8250;</span>
              </button>

              <div className="absolute left-0 mt-2 w-60 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white border border-yellow-400 rounded-sm shadow-lg">
                  <Link
                    to="/products/natural-cosmetics"
                    className="block px-4 py-3 text-black font-semibold text-sm hover:bg-yellow-50 border-b border-yellow-100"
                  >
                    MỸ PHẨM THIÊN NHIÊN
                  </Link>
                  <Link
                    to="/products/facial-treatment"
                    className="block px-4 py-3 text-black font-semibold text-sm hover:bg-yellow-50 border-b border-yellow-100"
                  >
                    TRỊ LIỆU DA MẶT
                  </Link>
                  <Link
                    to="/products/body-whitening"
                    className="block px-4 py-3 text-black font-semibold text-sm hover:bg-yellow-50 border-b border-yellow-100"
                  >
                    TẮM TRẮNG TOÀN THÂN
                  </Link>
                  <Link
                    to="/products/weight-loss"
                    className="block px-4 py-3 text-black font-semibold text-sm hover:bg-yellow-50"
                  >
                    GIẢM CÂN & GIẢM BÉO
                  </Link>
                </div>
              </div>
            </div>

            {/* Dropdown: Tin tức */}
            <div className="relative group">
              <button className="text-white font-medium hover:text-yellow-100 transition-colors flex items-center cursor-pointer">
                TIN TỨC <span className="ml-1">&#8250;</span>
              </button>
              <div className="absolute left-0 mt-2 w-60 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white border border-yellow-400 rounded-sm shadow-lg">
                  <Link
                    to="/news/beauty-knowledge"
                    className="block px-4 py-3 text-black font-semibold text-sm hover:bg-yellow-50 border-b border-yellow-100"
                  >
                    KIẾN THỨC LÀM ĐẸP
                  </Link>
                  <Link
                    to="/news/service-news"
                    className="block px-4 py-3 text-black font-semibold text-sm hover:bg-yellow-50 border-b border-yellow-100 last:border-b-0"
                  >
                    TIN TỨC DỊCH VỤ
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/introduce" className="text-white font-medium hover:text-yellow-100 transition-colors">GIỚi THIỆU</Link>
            <Link to="/services" className="text-white font-medium hover:text-yellow-100 transition-colors">DỊCH VỤ</Link>
            <Link to="/contact" className="text-white font-medium hover:text-yellow-100 transition-colors">LIÊN HỆ</Link>

            {/* Search */}
            <div className="relative">
              <button onClick={() => setShowSearch(prev => !prev)} className="text-white hover:text-yellow-100 transition-colors cursor-pointer">
                <FaSearch className="w-5 h-5" />
              </button>
              {showSearch && (
                <div className="absolute right-0 mt-2 flex items-center bg-white rounded shadow px-2 py-1 z-50">
                  <input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm..."
                    className="text-sm px-2 py-1 w-48 text-gray-700 placeholder-gray-400 focus:outline-none"
                  />
                  <FaSearch className="text-gray-500 ml-2 w-4 h-4" />
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu icon (optional for later use) */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
