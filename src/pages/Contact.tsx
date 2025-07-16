import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="w-full bg-white pb-16">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4 text-gray-600 text-sm">
        <Link to="/" className="text-black-600 hover:underline">Trang chủ</Link>
        <span className="mx-2">›</span>
       <Link to="/introduce" className="text-yellow-500 font-medium">Liên hệ</Link>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Liên hệ</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Spa hàng đầu Việt Nam về Giảm béo không phẫu thuật.
            <br />
            Cam kết hiệu quả - Công nghệ tiên tiến - Không gian chuẩn 5 sao.
          </p>
          <ul className="text-gray-700 text-sm space-y-3">
            <li className="flex items-start">
              <span className="mr-2">📍</span>
              70 Lữ Gia, Ward 15, District 11, Ho Chi Minh City
            </li>
            <li className="flex items-start">
              <span className="mr-2">📞</span>
              1900 6750
            </li>
            <li className="flex items-start">
              <span className="mr-2">✉️</span>
              support@sapo.vn
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Gửi thông tin</h2>
          <p className="text-gray-600 mb-4 text-sm">
            Bạn hãy điền nội dung tin nhắn vào form dưới đây và gửi cho chúng tôi.
            Chúng tôi sẽ trả lời bạn sau khi nhận được.
          </p>
          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Họ tên*"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-yellow-400"
              />
              <input
                type="email"
                placeholder="Email*"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-yellow-400"
              />
            </div>
            <textarea
              rows={6}
              placeholder="Nội dung*"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-yellow-400"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded font-semibold"
            >
              GỬI TIN NHẮN
            </button>
          </form>
        </div>
      </div>

      {/* Google Maps */}
      <div className="w-full mt-10">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.417199388901!2d106.6494714748417!3d10.77875975917147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ee72d38b369%3A0x7d01b9ddc1ff9179!2zMTc1IMSQ4buTLCBMw70gVGjGsMahbmcsIFTDom4gQsOsbmgsIEjDoCBO4buZaCBDaMOtIE1pbmggNzAwMDA!5e0!3m2!1svi!2s!4v1721097344019!5m2!1svi!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
