"use client"

import { useState } from "react"
import { FaChevronDown } from "react-icons/fa" // Using FaChevronDown for dropdown arrows

const CheckoutPage = () => {
    const [paymentMethod, setPaymentMethod] = useState("cod") // For payment radio button

    return (
        <div className="min-h-screen py-4 md:py-10">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header / Logo */}
                <div className="mb-6 md:mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-blue-500">Ant Spa</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {/* Left Column: Thông tin nhận hàng */}
                    <div className="bg-white p-4 md:p-6 rounded-lg">
                        {/* Thông tin nhận hàng */}
                        <div>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                                <h2 className="text-lg md:text-xl font-bold text-gray-800">Thông tin nhận hàng</h2>
                                <a href="#" className="text-blue-600 text-sm hover:underline flex items-center gap-1 self-start sm:self-auto">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                        />
                                    </svg>
                                    Đăng nhập
                                </a>
                            </div>
                            <div className="space-y-3 md:space-y-4">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full border border-gray-300 rounded-md px-3 md:px-4 py-2.5 md:py-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm md:text-base"
                                />
                                <input
                                    type="text"
                                    placeholder="Họ và tên"
                                    className="w-full border border-gray-300 rounded-md px-3 md:px-4 py-2.5 md:py-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm md:text-base"
                                />
                                <div className="relative flex items-center border border-gray-300 rounded-md">
                                    <input
                                        type="tel"
                                        placeholder="Số điện thoại (tuỳ chọn)"
                                        className="flex-grow px-3 md:px-4 py-2.5 md:py-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-l-md text-sm md:text-base"
                                    />
                                    <div className="relative px-2 md:px-3 border-l border-gray-300">
                                        <button className="flex items-center gap-1 text-gray-700">
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
                                                alt="Vietnam Flag"
                                                className="w-4 md:w-5 h-auto"
                                            />
                                            <FaChevronDown className="text-xs text-gray-500" />
                                        </button>
                                        {/* Dropdown for country code can be added here if needed */}
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Địa chỉ (tuỳ chọn)"
                                    className="w-full border border-gray-300 rounded-md px-3 md:px-4 py-2.5 md:py-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm md:text-base"
                                />
                                <div className="relative">
                                    <select className="appearance-none w-full border border-gray-300 rounded-md px-3 md:px-4 py-2.5 md:py-3 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-blue-400 pr-8 md:pr-10 text-sm md:text-base">
                                        <option>Tỉnh thành</option>
                                        {/* Add more options here */}
                                    </select>
                                    <FaChevronDown className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs pointer-events-none" />
                                </div>
                                <div className="relative">
                                    <select className="appearance-none w-full border border-gray-300 rounded-md px-3 md:px-4 py-2.5 md:py-3 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-blue-400 pr-8 md:pr-10 text-sm md:text-base">
                                        <option>Quận huyện (tuỳ chọn)</option>
                                        {/* Add more options here */}
                                    </select>
                                    <FaChevronDown className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs pointer-events-none" />
                                </div>
                                <textarea
                                    placeholder="Ghi chú (tuỳ chọn)"
                                    rows={3}
                                    className="w-full border border-gray-300 rounded-md px-3 md:px-4 py-2.5 md:py-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400 resize-y text-sm md:text-base"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Middle Column: Vận chuyển và Thanh toán */}
                    <div className="space-y-4 md:space-y-6">
                        {/* Vận chuyển */}
                        <div className="bg-white p-4 md:p-6 rounded-lg">
                            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Vận chuyển</h3>
                            <div className="bg-blue-50 text-blue-700 p-3 md:p-4 rounded-md text-sm border border-blue-200">
                                Vui lòng nhập thông tin giao hàng
                            </div>
                        </div>

                        {/* Thanh toán */}
                        <div className="bg-white p-4 md:p-6 rounded-lg">
                            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Thanh toán</h3>
                            <label className="flex items-center border border-gray-300 rounded-md p-3 md:p-4 cursor-pointer bg-white hover:bg-gray-50 transition-colors">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="cod"
                                    checked={paymentMethod === "cod"}
                                    onChange={() => setPaymentMethod("cod")}
                                    className="hidden"
                                />
                                <div
                                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mr-3 transition-all ${paymentMethod === "cod" ? "border-blue-500 bg-blue-500" : "border-gray-400"
                                        }`}
                                >
                                    {paymentMethod === "cod" && (
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    )}
                                </div>
                                <span className="text-gray-700 text-sm">Thanh toán khi giao hàng (COD)</span>
                            </label>
                        </div>
                    </div>

                    {/* Right Column: Thông tin đơn hàng */}
                    <div className="bg-white p-4 md:p-6 rounded-lg">
                        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Đơn hàng (1 sản phẩm)</h2>
                        <div className="flex items-center gap-3 md:gap-4 border-b border-gray-200 pb-3 md:pb-4 mb-3 md:mb-4">
                            <div className="relative flex-shrink-0">
                                <img
                                    src="https://bizweb.dktcdn.net/thumb/large/100/312/429/products/59d7452323065b0010842c2c.jpg?v=1525614635347"
                                    alt="Tinh Dầu Nguyên Chất Vitamin E 30ml"
                                    className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-md"
                                />
                                <span className="absolute -top-1 -left-1 md:-top-2 md:-left-2 bg-blue-500 text-white text-xs font-bold rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                                    1
                                </span>
                            </div>
                            <div className="flex-grow min-w-0">
                                <p className="text-gray-800 text-xs md:text-sm font-medium line-clamp-2">Tinh Dầu Nguyên Chất Vitamin E 30ml</p>
                            </div>
                            <p className="text-gray-800 text-xs md:text-sm font-medium flex-shrink-0">379.000đ</p>
                        </div>

                        <div className="flex gap-2 mb-3 md:mb-4">
                            <input
                                type="text"
                                placeholder="Nhập mã giảm giá"
                                className="flex-grow border border-gray-300 rounded-md px-3 md:px-4 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm"
                            />
                            <button className="bg-blue-400 hover:bg-blue-500 text-white font-medium px-3 md:px-5 py-2 rounded-md transition-colors text-sm flex-shrink-0">
                                Áp dụng
                            </button>
                        </div>

                        <div className="text-sm space-y-2 md:space-y-3 border-t border-gray-200 pt-3 md:pt-4">
                            <p className="flex justify-between text-gray-700">
                                <span>Tạm tính</span> <span>379.000đ</span>
                            </p>
                            <p className="flex justify-between text-gray-700">
                                <span>Phí vận chuyển</span> <span>-</span>
                            </p>
                            <p className="flex justify-between font-bold text-base md:text-lg text-gray-800">
                                <span>Tổng cộng</span> <span className="text-blue-600">379.000đ</span>
                            </p>
                        </div>

                        <button className="w-full mt-4 md:mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 md:py-3 rounded-md transition-colors text-base md:text-lg">
                            ĐẶT HÀNG
                        </button>
                        <p className="text-xs md:text-sm mt-3 md:mt-4 text-center text-blue-600 hover:underline cursor-pointer">← Quay về giỏ hàng</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage
