import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const suggestedProducts = [
  {
    id: 2,
    name: "Tinh Dầu Nguyên Chất Vitamin E 30...",
    price: "379.000đ",
    image: "https://bizweb.dktcdn.net/thumb/large/100/312/429/products/59d7452323065b0010842c2c.jpg?v=1525614635347",
  },
  {
    id: 3,
    name: "Bộ Serum & Kem Dưỡng Ẩm Ban Ngày...",
    price: "949.000đ",
    originalPrice: "13.000.000đ",
    discount: "93%",
    image: "https://bizweb.dktcdn.net/thumb/large/100/312/429/products/5a61ae79f606f7001ca89bf6.jpg?v=1525614440820",
  },
  {
    id: 4,
    name: "Bộ Serum & Kem Dưỡng Chống Lão...",
    price: "1.904.000đ",
    image: "https://bizweb.dktcdn.net/thumb/large/100/312/429/products/nuoc-tay-trang-a70aabd0-731b-47d8-8e5d-64e7bb1a08bc.jpg?v=1525614268307",
  },
  {
    id: 5,
    name: "Tinh Dầu Sả Chanh 10ml",
    price: "159.000đ",
    image: "https://bizweb.dktcdn.net/thumb/large/100/312/429/products/nuoc-tay-trang-9a46a5ad-ff91-48bb-83f8-77288d688859.jpg?v=1525613432710",
  },
];

const ProductDetail = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  useParams();

  const product = {
    id: 1,
    name: "Tinh Dầu Hoắc Hương 10ml",
    price: "239.000đ",
    status: "Còn hàng",
    origin: "Canada",
    image: "https://bizweb.dktcdn.net/thumb/large/100/312/429/products/5ae986a4e613f0000fdbcee5.jpg?v=1525614723443",
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="w-full bg-gray-100 py-2 px-4">
        <div className="max-w-7xl mx-auto text-sm text-yellow-500">
          <Link to="/" className="hover:underline text-black">Trang chủ</Link>
          <span className="mx-1 text-black">›</span>
          <Link to="/product" className="hover:underline text-yellow-500">Trị liệu da mặt</Link>
          <span className="mx-1 text-black">›</span>
          <span className="text-yellow-500">{product.name}</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="pl-8">
          <img src={product.image} alt={product.name} className="w-[300px] mx-auto h-auto rounded shadow" />
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl font-semibold text-gray-800">{product.name}</h1>
          <p className="text-sm text-gray-700">Tình trạng: <span className="text-yellow-500 font-medium">{product.status}</span></p>
          <p className="text-2xl text-yellow-500 font-bold">{product.price}</p>

          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
            <li>Xuất xứ: Canada</li>
            <li>Nơi sản xuất: Canada</li>
            <li>
              Công dụng:
              <ul className="list-[circle] list-inside ml-4">
                <li>Chống nấm, chống viêm, chống nhiễm trùng.</li>
                <li>Hỗ trợ hệ miễn dịch cho cơ thể, phòng tránh các bệnh cảm cúm...</li>
                <li>Giảm căng thẳng và cân bằng tinh thần.</li>
              </ul>
            </li>
            <li>Hướng dẫn sử dụng: Có thể dùng trực tiếp hoặc pha với dầu nền để massage.</li>
            <li>Hạn sử dụng: ít nhất đến tháng 4/2019</li>
          </ul>

          <div className="flex gap-2 mt-6 items-center">
            <p className="font-semibold">Số lượng</p>
            <button className="border px-3 py-1">-</button>
            <span className="border px-4 py-1">1</span>
            <button className="border px-3 py-1">+</button>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="bg-[#ffbf00] hover:bg-[#f4b000] text-black px-8 py-4 rounded text-base font-bold flex flex-col items-center w-[200px]">
              MUA NGAY
              <span className="text-sm font-normal mt-1">GIAO HÀNG TẠI NƠI</span>
            </button>
            <button className="bg-[#4a2600] hover:bg-[#3b1f00] text-[#ffbf00] px-8 py-4 rounded text-base font-bold flex flex-col items-center w-[200px]">
              Hãy gọi
              <span className="text-sm font-normal mt-1">Liên hệ 1900 6750</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mô tả */}
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <div className="flex border-b-2 border-yellow-400 mb-4">
          <button className="text-sm font-medium px-4 py-2 text-yellow-500 border-b-4 border-yellow-500">MÔ TẢ</button>
          <button className="text-sm font-medium px-4 py-2 text-gray-600">TAB TÙY CHỈNH</button>
        </div>
        <div className="text-gray-800 text-sm leading-relaxed space-y-2">
          <p>• Xuất xứ: Canada</p>
          <p>• Nơi sản xuất: Canada</p>
          <p>• Công dụng:</p>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Chống nấm, chống viêm, chống nhiễm trùng.</li>
            <li>Hỗ trợ hệ miễn dịch cho cơ thể, phòng tránh các bệnh cảm cúm...</li>
            <li>Giảm căng thẳng và cân bằng tinh thần.</li>
          </ul>
          <p>• Hướng dẫn sử dụng: Có thể dùng trực tiếp hoặc pha với dầu nền để massage.</p>
          <p>• Hạn sử dụng: ít nhất đến tháng 4/2019</p>
          <div className="mt-6">
            <p className="font-bold text-lg">"Đem lại những phút giây thư giãn"</p>
            <p className="mt-2">
              Thương hiệu mỹ phẩm, chăm sóc da nổi tiếng của Canada. Tất cả sản phẩm của scentuals đều sử dụng thành phần hữu cơ tự nhiên, không thử nghiệm trên động vật với quy trình sản xuất vô cùng nghiêm ngặt nên tuyệt đối an toàn cho người sử dụng.
            </p>
          </div>
        </div>
      </div>

      {/* Sản phẩm gợi ý */}
      <div className="max-w-7xl mx-auto px-4 mt-16 pb-16">
        <h2 className="text-xl font-bold mb-6 text-yellow-600">Sản phẩm gợi ý</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {suggestedProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded shadow hover:shadow-lg cursor-pointer overflow-hidden"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <img src={item.image} alt={item.name} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2">{item.name}</h3>
                <p className="text-yellow-600 font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
