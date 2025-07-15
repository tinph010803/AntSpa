import { FaUser, FaShoppingCart } from "react-icons/fa"

const Header = () => {
  return (
    <header className="w-full">
      <div className="w-full bg-amber-900 text-yellow-300 text-sm py-2">
        <div className="flex justify-between items-center px-4 md:px-10">
          {/* Left side - Contact info */}
          <div className="flex items-center space-x-1">
            <span>Chăm sóc khách hàng:</span>
            <span className="font-medium text-yellow-400">0982 362 509</span>
            <span>|</span>
            <span>Email:</span>
            <span className="font-medium text-yellow-400">baotrung304@gmail.com</span>
          </div>

          {/* Right side - Account and Cart buttons */}
          <div className="flex items-center space-x-3">
            {/* Account button */}
            <button className="flex items-center space-x-1 bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded text-sm font-medium transition-colors cursor-pointer">
              <FaUser className="w-4 h-4" />
              <span>Tài khoản</span>
            </button>

            {/* Cart button */}
            <button className="flex items-center space-x-1 bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-sm font-medium transition-colors cursor-pointer">
              <FaShoppingCart className="w-4 h-4" />
              <span>Giỏ hàng</span>
              <span className="bg-white text-orange-500 rounded-full px-1.5 py-0.5 text-xs font-bold min-w-[20px] text-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
