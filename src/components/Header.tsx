import { FaUser, FaShoppingCart } from "react-icons/fa"

const Header = () => {
  return (
    <header className="w-full">
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
            {/* Account button */}
            <button className="flex items-center gap-1 bg-yellow-500 cursor-pointer hover:bg-yellow-600 text-black px-2 sm:px-3 py-1 rounded font-medium transition-colors">
              <FaUser className="w-4 h-4" />
              <span className="hidden sm:inline">Tài khoản</span>
            </button>

            {/* Cart button */}
            <button className="flex items-center gap-1 bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-2 sm:px-3 py-1 rounded font-medium transition-colors">
              <FaShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Giỏ hàng</span>
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
