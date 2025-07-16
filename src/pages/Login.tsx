import { Link } from 'react-router-dom'

const Login = () => {
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
          <h1 className="text-center text-2xl font-bold text-gray-800 mb-2">ĐĂNG NHẬP TÀI KHOẢN</h1>
          <p className="text-center text-gray-600 mb-4">Nếu bạn đã có tài khoản, đăng nhập tại đây.</p>

          {/* Social Login */}
          <div className="flex justify-center gap-4 mb-6">
            <button className="bg-[#3b5998] hover:bg-[#2d4373] text-white px-4 py-2 rounded font-medium flex items-center gap-2">
              <span className="text-lg">f</span> Facebook
            </button>
            <button className="bg-[#dd4b39] hover:bg-[#c23321] text-white px-4 py-2 rounded font-medium flex items-center gap-2">
              <span className="text-lg">G+</span> Google
            </button>
          </div>

          {/* Login Form */}
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
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Mật khẩu<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Mật khẩu"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-yellow-400"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded"
            >
              ĐĂNG NHẬP
            </button>
          </form>

          {/* Footer Links */}
          <div className="mt-4 text-sm text-gray-700">
            <p>
              Bạn chưa có tài khoản?{' '}
              <Link to="/register" className="text-yellow-500 hover:underline font-medium">
                Đăng ký tại đây.
              </Link>
            </p>
            <p className="mt-1">
              <Link to="/forgot-password" className="text-yellow-500 hover:underline font-medium">
                Quên mật khẩu?
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
