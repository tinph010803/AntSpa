// src/pages/Register.tsx
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb – full width */}
      <div className="w-full bg-gray-100 py-2 px-4">
        <div className="max-w-7xl mx-auto text-sm text-yellow-500">
          <Link to="/" className="hover:underline text-black">Trang chủ</Link>
          <span className="mx-1 text-black">›</span>
          <span className="text-yellow-500">Đăng ký tài khoản</span>
        </div>
      </div>

      {/* Content Form */}
      <div className="py-10 px-4 flex justify-center items-start">
        <div className="bg-white w-full max-w-md rounded-lg shadow-md border border-yellow-100 p-8 relative">
          <h1 className="text-center text-2xl font-bold text-gray-800 mb-2">ĐĂNG KÝ TÀI KHOẢN</h1>
          <p className="text-center text-gray-600 mb-4">Nếu chưa có tài khoản vui lòng đăng ký tại đây</p>

          {/* Social Login */}
          <div className="flex justify-center gap-4 mb-6">
            <button className="bg-[#3b5998] hover:bg-[#2d4373] text-white px-4 py-2 rounded font-medium flex items-center gap-2">
              <span className="text-lg">f</span> Facebook
            </button>
            <button className="bg-[#dd4b39] hover:bg-[#c23321] text-white px-4 py-2 rounded font-medium flex items-center gap-2">
              <span className="text-lg">G+</span> Google
            </button>
          </div>

          {/* Register Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Họ<span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-yellow-400" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Tên<span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-yellow-400" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email<span className="text-red-500">*</span></label>
              <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-yellow-400" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Mật khẩu<span className="text-red-500">*</span></label>
              <input type="password" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-yellow-400" required />
            </div>

            <div className="flex items-center justify-between mt-6">
              <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded">
                ĐĂNG KÝ
              </button>
              <Link to="/login" className="text-yellow-500 hover:underline text-sm font-medium">
                Đăng nhập
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
