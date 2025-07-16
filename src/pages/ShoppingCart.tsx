import { Link } from "react-router-dom"

const ShoppingCart = () => {
  return (
    <div className="bg-white pt-6"> {/* ❌ bỏ min-h-screen */}
      {/* Breadcrumb */}
      <div className="w-full bg-gray-50 py-3 px-4">
        <div className="max-w-7xl mx-auto text-sm text-gray-700">
          <Link to="/" className="text-black hover:underline">Trang chủ</Link>
          <span className="mx-1">{'>'}</span>
          <span className="text-yellow-500">Giỏ hàng</span>
        </div>
      </div>

      {/* Giỏ hàng rỗng */}
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-left">
          GIỎ HÀNG <span className="font-normal text-base">(0 sản phẩm)</span>
        </h1>

        <div className="flex flex-col items-center">
          <img
            src="https://bizweb.dktcdn.net/100/312/429/themes/658927/assets/empty-bags.jpg?1705893872343"
            alt="Giỏ hàng trống"
            className="w-40 h-40 my-6"
          />
          <Link
            to="/"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded mt-4"
          >
            TIẾP TỤC MUA SẮM
          </Link>
        </div>
      </div>

    </div>
  )
}

export default ShoppingCart
