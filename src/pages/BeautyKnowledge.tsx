import { Link } from 'react-router-dom'

const BeautyKnowledge = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-600 mb-4">
                <Link to="/" className="hover:underline">Trang chủ</Link>
                <span className="mx-2">›</span>
                <span className="text-yellow-500 font-medium">Kiến thức làm đẹp</span>
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
                                <span className="block py-2 px-2 text-yellow-500 font-semibold">Tin tức</span>
                            </li>
                            <li>
                                <Link to="/introduce" className="block py-2 px-2 hover:text-yellow-500">Giới thiệu</Link>
                            </li>
                            <li>
                                <Link to="/services" className="block py-2 px-2 hover:text-yellow-500">Dịch vụ</Link>
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
                                { title: "Các ngôi sao hổi hồn vào mỹ phẩm của mình ra sao?", date: "05/05/2018", img: "https://bizweb.dktcdn.net/thumb/small/100/312/429/articles/targettuesday-2-600x400.jpg?v=1525526822483" },
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
                    <h1 className="text-2xl font-bold mb-6">Kiến thức làm đẹp</h1>
                    <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded shadow-sm">
                        Nội dung đang được cập nhật. Vui lòng quay lại sau.
                    </div>
                </main>
            </div>
        </div>
    )
}

export default BeautyKnowledge