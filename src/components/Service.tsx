
const Service = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 bg-white bg-opacity-60"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-6">DỊCH VỤ NỔI BẬT</h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
            Với phương châm "không có một khái niệm chung để nói về khách hàng" - chúng tôi hiểu rằng mỗi khách hàng đều
            sở hữu làn da, vóc dáng và có một nhu cầu làm đẹp riêng.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="text-center group cursor-pointer">
            <div className="relative mb-6 transition-transform duration-300 group-hover:scale-105">
              <div className="w-64 h-64 mx-auto rounded-full border-4 border-yellow-400 overflow-hidden shadow-xl group-hover:border-orange-400 transition-colors duration-300">
                <img
                  src="https://bizweb.dktcdn.net/100/312/429/themes/658927/assets/sec_why_image_1.png?1705893872343"
                  alt="Trắng Da Trẻ Hóa Rose White"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Service Title Banner */}
            <div className="bg-yellow-400 text-white px-6 py-2 rounded-full inline-block mb-4 shadow-md group-hover:bg-orange-400 transition-colors duration-300">
              <h3 className="font-bold text-sm">Trắng Da Trẻ Hóa Rose White</h3>
            </div>

            {/* Service Description Card */}
            <div className="bg-white rounded-lg p-6 shadow-lg mx-4 relative overflow-hidden transition-all duration-300 group-hover:shadow-2xl">
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                Siêu phẩm trắng trẻ hóa da Rose White - phương pháp độc quyền mới nhất tại hệ thống Swan Clinic & Spa.
                Làm đẹp da 2 trong 1.
              </p>
              {/* Yellow background effect on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-t from-yellow-400 to-yellow-300 transition-all duration-500 group-hover:h-full opacity-90 rounded-lg"></div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="text-center group cursor-pointer">
            <div className="relative mb-6 transition-transform duration-300 group-hover:scale-105">
              <div className="w-64 h-64 mx-auto rounded-full border-4 border-yellow-400 overflow-hidden shadow-xl group-hover:border-orange-400 transition-colors duration-300">
                <img
                  src="https://bizweb.dktcdn.net/100/312/429/themes/658927/assets/sec_why_image_2.png?1705893872343"
                  alt="Giảm béo công nghệ Contri UltraShape"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Service Title Banner */}
            <div className="bg-yellow-400 text-white px-6 py-2 rounded-full inline-block mb-4 shadow-md group-hover:bg-orange-400 transition-colors duration-300">
              <h3 className="font-bold text-sm">Giảm béo công nghệ Contri UltraShape</h3>
            </div>

            {/* Service Description Card */}
            <div className="bg-white rounded-lg p-6 shadow-lg mx-4 relative overflow-hidden transition-all duration-300 group-hover:shadow-2xl">
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                Phương pháp giảm béo này là giải pháp đầy hi vọng cho những phụ nữ từng thất bại khi giảm béo hoặc muốn
                giảm béo trong thời gian gấp.
              </p>
              {/* Yellow background effect on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-t from-yellow-400 to-yellow-300 transition-all duration-500 group-hover:h-full opacity-90 rounded-lg"></div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="text-center group cursor-pointer">
            <div className="relative mb-6 transition-transform duration-300 group-hover:scale-105">
              <div className="w-64 h-64 mx-auto rounded-full border-4 border-yellow-400 overflow-hidden shadow-xl group-hover:border-orange-400 transition-colors duration-300">
                <img
                  src="https://bizweb.dktcdn.net/100/312/429/themes/658927/assets/sec_why_image_3.png?1705893872343"
                  alt="Công Nghệ Giảm Béo Hifu Lipo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Service Title Banner */}
            <div className="bg-yellow-400 text-white px-6 py-2 rounded-full inline-block mb-4 shadow-md group-hover:bg-orange-400 transition-colors duration-300">
              <h3 className="font-bold text-sm">Công Nghệ Giảm Béo Hifu Lipo</h3>
            </div>

            {/* Service Description Card */}
            <div className="bg-white rounded-lg p-6 shadow-lg mx-4 relative overflow-hidden transition-all duration-300 group-hover:shadow-2xl">
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                Giảm béo 1 lần duy nhất không phẫu thuật. Duy trì số đo cơ thể tốt nhất, Công nghệ được FDA Hoa Kỳ chứng nhận.
              </p>
              {/* Yellow background effect on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-t from-yellow-400 to-yellow-300 transition-all duration-500 group-hover:h-full opacity-90 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
