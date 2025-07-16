import { Link } from "react-router-dom"

const services = [
    {
        img: "https://bizweb.dktcdn.net/thumb/medium/100/312/429/articles/cach-giam-mo-bung-bang-muoi-3-81a500a4-f619-453c-a954-5d07004b7745.jpg?v=1525794396517",
        title: "Công Nghệ Giảm Béo Hifu Lipo",
        date: "08/05/2018",
        author: "Nguyễn Chánh Bảo Trung",
        content: "Hifu Lipo là công nghệ giảm béo thông minh nhất hiện nay do Hoa Kỳ phát minh. Hiệu quả giảm béo thấy ngay sau lần trị liệu duy nhất..."
    },
    {
        img: "https://bizweb.dktcdn.net/thumb/medium/100/312/429/articles/massage-course-600x4001.jpg?v=1525609410367",
        title: "Massage Thư Giãn",
        date: "06/05/2018",
        author: "Nguyễn Chánh Bảo Trung",
        content: "Massage đúng nghĩa không chỉ là thư giãn mà còn là chăm sóc sức khỏe, hỗ trợ điều trị các bệnh về tuần hoàn máu, xương khớp..."
    },
    {
        img: "https://bizweb.dktcdn.net/thumb/medium/100/312/429/articles/gia-tam-trang-bao-nhieu-01.jpg?v=1525609319510",
        title: "Tắm Trắng Phun Phủ Nano Công Nghệ Lightherapy",
        date: "06/05/2018",
        author: "Nguyễn Chánh Bảo Trung",
        content: "Công nghệ tắm trắng phun phủ Nano giúp làn da đen bẩm sinh cũng trở nên trắng hồng. Ứng dụng bước sóng ánh sáng sinh học..."
    },
    {
        img: "https://bizweb.dktcdn.net/thumb/medium/100/312/429/articles/bai-4-anh-1.jpg?v=1525609245670",
        title: "Trắng Da Thải Độc Công Nghệ Hydrogen",
        date: "06/05/2018",
        author: "Nguyễn Chánh Bảo Trung",
        content: "Trắng da thải độc công nghệ Hydrogen Hàn Quốc là phương pháp làm trắng da tác dụng kép: da trắng sáng, kết hợp thải độc..."
    },
    {
        img: "https://bizweb.dktcdn.net/thumb/medium/100/312/429/articles/vien-uong-trang-da-toan-than-vuot-troi.jpg?v=1525609156973",
        title: "Trắng Da Trẻ Hoá Rose White",
        date: "06/05/2018",
        author: "Nguyễn Chánh Bảo Trung",
        content: "Kết tụ tinh túy từ giống hoa hồng trắng Bulgaria quý hiếm, trải qua 28 ngày chiết xuất dưới công nghệ lạnh 4 độ C..."
    },
    {
        img: "https://bizweb.dktcdn.net/thumb/medium/100/312/429/articles/25084921243667-phan-biet-nam-thuong-nam-sau.jpg?v=1525609059653",
        title: "Trị nám – Trẻ hóa da – Xóa xăm công nghệ Laser Nano Plus",
        date: "06/05/2018",
        author: "Nguyễn Chánh Bảo Trung",
        content: "Công nghệ Laser Nano Plus sử dụng bước sóng ánh sáng cùng cơ chế xung kép thế hệ mới giúp đánh bật các loại nám, kể cả tình trạng nám sâu..."
    }
]

const ServicesPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-600 mb-4">
                <Link to="/" className="hover:underline">Trang chủ</Link>
                <span className="mx-2">›</span>
                <span className="text-yellow-500 font-medium">Dịch vụ</span>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <aside className="w-full md:w-1/4">
                    <div className="mb-6">
                        <h3 className="font-bold text-black uppercase mb-2 pb-2">DANH MỤC</h3>
                        <ul className="text-sm divide-y border-t border-b divide-gray-200">
                            <li>
                                <Link to="/" className="block py-2 px-2 hover:text-yellow-500">Trang chủ</Link>
                            </li>
                            <li>
                                <span className="block py-2 px-2 hover:text-yellow-500 cursor-pointer">Sản phẩm</span>
                            </li>
                            <li>
                                <span className="block py-2 px-2 hover:text-yellow-500 cursor-pointer">Tin tức</span>
                            </li>
                            <li>
                                <Link to="/introduce" className="block py-2 px-2 hover:text-yellow-500">Giới thiệu</Link>
                            </li>
                            <li>
                                <span className="block py-2 px-2 text-yellow-500 font-semibold">Dịch vụ</span>
                            </li>
                            <li>
                                <Link to="/contact" className="block py-2 px-2 hover:text-yellow-500">Liên hệ</Link>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="font-bold text-gray-800 uppercase mb-2">BÀI VIẾT KHÁC</h3>
                        <ul className="space-y-4 text-sm">
                            {[
                                { title: "Cách làm sạch da mặt của các ngôi sao Hàn Quốc", date: "05/05/2018", img: "https://bizweb.dktcdn.net/thumb/small/100/312/429/articles/anh-3.jpg?v=1525526958343" },
                                { title: "Nghệ thuật sử dụng serum – Bí quyết dưỡng da với Serum", date: "05/05/2018", img: "https://bizweb.dktcdn.net/thumb/small/100/312/429/articles/skincare.jpg?v=1603529813487" },
                                { title: "Các ngôi sao “thổi hồn” vào mỹ phẩm của mình ra sao?", date: "05/05/2018", img: "https://bizweb.dktcdn.net/thumb/small/100/312/429/articles/targettuesday-2-600x400.jpg?v=1525526822483" },
                                { title: "Cách tập luyện giữ dáng của nữ điệp viên Black Widow", date: "05/05/2018", img: "https://bizweb.dktcdn.net/thumb/small/100/312/429/articles/05bd10c566c79826-600x400.jpg?v=1525526703690" }
                            ].map((post, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <img src={post.img} alt={post.title} className="w-16 h-12 object-cover rounded" />
                                    <div>
                                        <p className="hover:text-yellow-500 font-medium leading-tight cursor-pointer">{post.title}</p>
                                        <p className="text-xs text-gray-500">{post.date}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Main content */}
                <main className="flex-1">
                    <h2 className="text-2xl font-bold mb-6">Dịch vụ</h2>
                    <div className="space-y-6">
                        {services.map((s, index) => (
                            <div key={index} className="flex flex-col sm:flex-row gap-4">
                                <img src={s.img} alt={s.title} className="w-full sm:w-40 h-28 object-cover rounded" />
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-800 hover:text-yellow-500 cursor-pointer">{s.title}</h3>
                                    <p className="text-xs text-gray-500 italic">{s.date} - {s.author}</p>
                                    <p className="text-sm text-gray-700 mt-1">{s.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-8 text-center space-x-2">
                        <button className="text-gray-500 hover:text-yellow-500 cursor-pointer">«</button>
                        <button className="text-white bg-yellow-500 px-3 py-1 rounded">1</button>
                        <button className="text-gray-500 hover:text-yellow-500">2</button>
                        <button className="text-gray-500 hover:text-yellow-500 cursor-pointer">»</button>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ServicesPage
