import { Link } from 'react-router-dom';

const IntroducePage = () => {
  return (
    <div className="w-full bg-white">
      {/* Breadcrumb */}
      <div className="w-full bg-gray-50 border-b border-yellow-300">
        <div className="container mx-auto px-4 py-3 text-sm text-gray-600">
         <Link to="/" className="text-black-600 hover:underline">Trang chủ</Link>

          <span className="mx-2">›</span>
          <Link to="/introduce" className="text-yellow-500 font-medium">Giới thiệu</Link>
        </div>
      </div>

      {/* Section: ANT SPA */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-500 uppercase mb-6">ANT SPA</h1>
        <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
          Ant Spa tự hào là thương hiệu sở hữu độc quyền nhiều công nghệ, phương pháp làm đẹp đẳng cấp trên thế giới.
          Với phương châm "không có một khái niệm chung để nói về khách hàng" – chúng tôi hiểu rằng mỗi khách hàng đều
          sở hữu làn da, vóc dáng và có một nhu cầu làm đẹp riêng. Vì thế, Ant Spa luôn lắng nghe và thấu hiểu từng
          nguyện vọng làm đẹp khác nhau, nhằm mang đến trải nghiệm mới lạ, sự hài lòng tuyệt đối và vẻ đẹp toàn diện cho
          mỗi người.
        </p>
      </section>

      {/* Section: 5-Star Space */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl font-bold text-yellow-500 uppercase">KHÔNG GIAN</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-500 uppercase">ĐẲNG CẤP 5 SAO</h3>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
            {/* Text */}
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <div className="border-b-2 border-dashed border-yellow-400 pb-4 mb-4"></div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Nằm trên con phố sầm uất bậc nhất Sài thành, sở hữu kiến trúc nổi bật và cuốn hút cùng hệ thống công nghệ
                thẩm mỹ cao cấp, Ant Spa đang là điểm hẹn làm đẹp lý tưởng cho phái đẹp Sài Thành. Cơ sở vật chất hạ tầng
                mang đến sự hoàn hảo về thẩm mỹ và chất lượng.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Kiến trúc Ant Spa mang phong cách sang trọng và hiện đại nhưng luôn chú trọng không gian xanh, mang đến
                sự thư thái và gần gũi nhất cho khách hàng.
              </p>
              <div className="border-t-2 border-dashed border-yellow-400 pt-4 mt-4"></div>
            </div>

            {/* Image */}
            <div className="lg:w-1/2">
              <img
                src="https://bizweb.dktcdn.net/100/312/429/themes/658927/assets/group-why-choose-image-1.jpg?1705893872343"
                alt="Không gian ANT Spa"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Modern Technology */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl font-bold text-yellow-500 uppercase">CÔNG NGHỆ HIỆN ĐẠI</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-500 uppercase">HÀNG ĐẦU THẾ GIỚI</h3>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
            {/* Image */}
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <img
                src="https://bizweb.dktcdn.net/100/312/429/themes/658927/assets/group-why-choose-image-2.jpg?1705893872343"
                alt="Công nghệ hiện đại"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Text */}
            <div className="lg:w-1/2">
              <div className="border-b-2 border-dashed border-yellow-400 pb-4 mb-4"></div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Ant Spa sở hữu hệ thống dịch vụ làm đẹp đẳng cấp nhất trên thị trường trong nước và quốc tế hiện nay như:
                Ultherapy Hoa Kỳ, Laser Pico, Tắm trắng phun phủ Nano công nghệ Lighttherapy, Thay da sinh học Ipeel;
                Trị sẹo lõm, trẻ hóa da PRP, Công nghệ triệt lông hiện đại nhất hiện nay Diode Laser…
              </p>
              <div className="border-t-2 border-dashed border-yellow-400 pt-4 mt-4"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntroducePage;
