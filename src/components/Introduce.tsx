const Introduce = () => {
  return (
    <section className="w-full py-10 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-3xl font-bold text-yellow-500 mb-2 uppercase">
            TẠI SAO NÊN CHỌN ANT SPA
          </h2>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
            Ant Spa tự hào là thương hiệu sở hữu độc quyền nhiều công nghệ, phương pháp làm đẹp đẳng cấp trên thế giới.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start justify-center">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="w-40 h-40 mx-auto mb-4 rounded-full border-[6px] border-yellow-400 overflow-hidden">
              <img
                src="https://bizweb.dktcdn.net/100/312/429/themes/658927/assets/sec_course_reason_image_1.png?1705893872343"
                alt="Đội ngũ chuyên môn cao"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-sm md:text-base font-bold text-gray-800 uppercase">ĐỘI NGŨ CHUYÊN MÔN CAO</h3>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="w-40 h-40 mx-auto mb-4 rounded-full border-[6px] border-yellow-400 overflow-hidden">
              <img
                src="https://bizweb.dktcdn.net/100/312/429/themes/658927/assets/sec_course_reason_image_2.png?1705893872343"
                alt="Công nghệ hiện đại"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-sm md:text-base font-bold text-gray-800 uppercase">CÔNG NGHỆ HIỆN ĐẠI</h3>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="w-40 h-40 mx-auto mb-4 rounded-full border-[6px] border-yellow-400 overflow-hidden">
              <img
                src="https://bizweb.dktcdn.net/100/312/429/themes/658927/assets/sec_course_reason_image_3.png?1705893872343"
                alt="Cơ sở vật chất tiêu chuẩn nước ngoài"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-sm md:text-base font-bold text-gray-800 uppercase">CƠ SỞ VẬT CHẤT TIÊU CHUẨN NƯỚC NGOÀI</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
