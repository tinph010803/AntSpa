import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb – full width */}
      <div className="w-full bg-gray-100 py-2 px-4">
        <div className="max-w-7xl mx-auto text-sm text-yellow-500">
          <Link to="/" className="hover:underline text-black">Trang chủ</Link>
          <span className="mx-1 text-black">›</span>
          <span className="text-yellow-500">Đăng nhập tài khoản</span>
        </div>
      </div>

      {/* Content Form */}
      <div className="flex items-center justify-center px-4 py-10 min-h-[calc(100vh-48px)]">

        <div className="bg-white w-full max-w-md rounded-lg shadow-md border border-yellow-100 p-8 relative">
          <h1 className="text-center text-2xl font-bold text-gray-800 mb-2">ĐẶT LẠI MẬT KHẨU</h1>
          <p className="text-center text-gray-600 mb-6">Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua email.</p>

          {/* Forgot Password Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-yellow-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded"
            >
              LẤY LẠI MẬT KHẨU
            </button>
          </form>

          {/* Footer Links */}
          <div className="mt-4 text-sm text-gray-700 text-center">
            <p>
              Quay lại{' '}
              <Link to="/login" className="text-yellow-500 hover:underline font-medium">
                tại đây.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
