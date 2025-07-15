import { FaTwitter, FaFacebookF, FaPinterestP, FaGooglePlusG, FaInstagram, FaYoutube } from "react-icons/fa"

const Footer = () => {
  const navLinks = ["Trang chủ", "Sản phẩm", "Tin tức", "Giới thiệu", "Dịch vụ", "Liên hệ"]

  return (
    <footer className="w-full bg-gray-50 pt-16 relative overflow-hidden">
      {/* Background Floral Pattern (simplified) */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 600" fill="none">
          <path
            d="M100 100C120 80 140 100 160 120C180 140 200 120 220 100"
            stroke="#e5e7eb"
            strokeWidth="1"
            opacity="0.3"
          />
          <path
            d="M300 200C320 180 340 200 360 220C380 240 400 220 420 200"
            stroke="#e5e7eb"
            strokeWidth="1"
            opacity="0.3"
          />
          <path
            d="M800 150C820 130 840 150 860 170C880 190 900 170 920 150"
            stroke="#e5e7eb"
            strokeWidth="1"
            opacity="0.3"
          />
          <path
            d="M100 400C120 380 140 400 160 420C180 440 200 420 220 400"
            stroke="#e5e7eb"
            strokeWidth="1"
            opacity="0.3"
          />
          <path
            d="M300 500C320 480 340 500 360 520C380 540 400 520 420 500"
            stroke="#e5e7eb"
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Top Section: Logo, Nav, Social Icons */}
        <div className="flex flex-col items-center text-center mb-12">
          {/* Logo */}
          <div className="mb-6">
            <img
              src="https://bizweb.dktcdn.net/100/312/429/themes/658927/assets/logo-footer.png?1705893872343?height=60&width=150" // Placeholder for ANT Spa logo
              alt="ANT Spa Logo"
              className="h-16"
            />
          </div>

          {/* Navigation Menu */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-gray-700 font-medium mb-6">
            {navLinks.map((link, index) => (
              <a key={index} href="#" className="hover:text-gray-900 transition-colors">
                {link}
              </a>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mb-12">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 transition-colors"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 transition-colors"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 transition-colors"
            >
              <FaPinterestP className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 transition-colors"
            >
              <FaGooglePlusG className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 transition-colors"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 transition-colors"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Middle Section: Link Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left mb-12">
          {/* Column 1: HƯỚNG DẪN */}
          <div>
            <h4 className="font-bold text-gray-800 uppercase mb-4">HƯỚNG DẪN</h4>
            <ul className="space-y-2 text-gray-600">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-gray-800 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: CHÍNH SÁCH */}
          <div>
            <h4 className="font-bold text-gray-800 uppercase mb-4">CHÍNH SÁCH</h4>
            <ul className="space-y-2 text-gray-600">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-gray-800 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: HỖ TRỢ */}
          <div>
            <h4 className="font-bold text-gray-800 uppercase mb-4">HỖ TRỢ</h4>
            <ul className="space-y-2 text-gray-600">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-gray-800 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: ĐIỀU KHOẢN */}
          <div>
            <h4 className="font-bold text-gray-800 uppercase mb-4">ĐIỀU KHOẢN</h4>
            <ul className="space-y-2 text-gray-600">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-gray-800 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="border-t border-gray-200 py-6 text-center text-gray-500 text-sm bg-gray-100">
        © Bản quyền thuộc về Kiến Vàng | Cung cấp bởi Sapo
      </div>
    </footer>
  )
}

export default Footer
