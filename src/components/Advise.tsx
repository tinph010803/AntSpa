import { FaBell, FaPhone, FaComments, FaArrowUp, FaCalendarAlt } from "react-icons/fa"

const Advise = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Cách làm sạch da mặt của các ngôi sao Hàn Quốc",
      excerpt:
        "Đối với người Hàn Quốc (và hầu hết các cường quốc làm đẹp khác trên thế giới), cách làm sạch da mặt là bước quan...",
      image: "https://bizweb.dktcdn.net/thumb/small/100/312/429/articles/anh-3.jpg?v=1525526958343",
      date: "05/05/2018",
      imagePosition: "top",
    },
    {
      id: 2,
      title: "Nghệ thuật sử dụng serum – Bí quyết dưỡng da với Serum",
      excerpt:
        "Làn da thay đổi mỗi ngày tùy vào thời tiết, sinh hoạt, tâm trạng. Vậy tại sao chúng ta không điều chỉnh dưỡng da lại phải giữ nguyên?...",
      image: "https://bizweb.dktcdn.net/thumb/small/100/312/429/articles/skincare.jpg?v=1603529813487",
      date: "05/05/2018",
      imagePosition: "bottom",
    },
    {
      id: 3,
      title: "Các ngôi sao 'thời hơn' vào thương hiệu mỹ phẩm của mình ra sao?",
      excerpt:
        "Việc các ngôi sao cho ra đời các thương hiệu mỹ phẩm da trở nên phổ biến. Đặc biệt, một số thương hiệu 'đồng đầu'...",
      image: "https://bizweb.dktcdn.net/thumb/small/100/312/429/articles/targettuesday-2-600x400.jpg?v=1525526822483",
      date: "05/05/2018",
      imagePosition: "top",
    },
    {
      id: 4,
      title: "Cách tập luyện giữ dáng của nữ diệp viên Black Widow – Scarlett Johansson",
      excerpt:
        "Mỹ nhân Scarlett Johansson đã theo dõi chế độ tập luyện giữ dáng rất nghiêm khắc để có thể hóa thân thành...",
      image: "https://bizweb.dktcdn.net/thumb/small/100/312/429/articles/05bd10c566c79826-600x400.jpg?v=1525526703690",
      date: "05/05/2018",
      imagePosition: "bottom",
    },
  ]

  const partners = [
    {
      name: "Yoga Center",
      logo: "https://bizweb.dktcdn.net/100/312/429/themes/658927/assets/sec_logo_1.png?1705893872343",
    },
    {
      name: "Yoga Fitness",
      logo: "https://bizweb.dktcdn.net/100/312/429/themes/658927/assets/sec_logo_2.png?1705893872343",
    },
    {
      name: "Meditation Center",
      logo: "https://bizweb.dktcdn.net/100/312/429/themes/658927/assets/sec_logo_3.png?1705893872343",
    },
    {
      name: "Yoga Center Premium",
      logo: "https://bizweb.dktcdn.net/100/312/429/themes/658927/assets/sec_logo_4.png?1705893872343",
    },
    {
      name: "Yoga Center Meditation",
      logo: "https://bizweb.dktcdn.net/100/312/429/themes/658927/assets/sec_logo_5.png?1705893872343",
    },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="w-full py-16 bg-white relative">
      {/* Header */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-yellow-500 uppercase mb-3">Tư vấn làm đẹp</h2>
          <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto">
            Ant Spa luôn lắng nghe và thấu hiểu từng nguyện vọng làm đẹp khác nhau, nhằm mang đến trải nghiệm mới lạ, sự
            hài lòng tuyệt đối và vẻ đẹp toàn diện cho mỗi người.
          </p>
        </div>

        {/* Blog Grid - Layout giống hình */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 cursor-pointer">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded overflow-hidden hover:shadow-md transition">
              {/* Conditional rendering based on imagePosition */}
              {post.imagePosition === "top" && (
                <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
              )}

              <div className="p-4">
                <h3 className="text-gray-800 font-semibold text-sm mb-2 leading-snug">{post.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-3">{post.excerpt}</p>
                <div className="flex items-center text-gray-400 text-xs mb-3">
                  <FaCalendarAlt className="mr-1" />
                  {post.date}
                </div>
              </div>

              {/* Image at bottom for posts 2 and 4 */}
              {post.imagePosition === "bottom" && (
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-40 object-cover" />
              )}
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="border-gray-200 pt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-60 py-8">
            {partners.map((partner, index) => (
              <img
                key={index}
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="h-20 max-w-[180px] object-contain grayscale hover:grayscale-0 transition"
              />
            ))}
          </div>
        </div>

      </div>

      {/* Floating Buttons */}
      <div className="fixed left-6 bottom-20 z-50 flex flex-col gap-3">
        <button className="bg-yellow-400 text-white p-3 rounded-full shadow hover:bg-yellow-500 cursor-pointer">
          <FaBell />
        </button>
        <button className="bg-yellow-400 text-white p-3 rounded-full shadow hover:bg-yellow-500 cursor-pointer">
          <FaPhone />
        </button>
      </div>

      <div className="fixed bottom-6 right-20 z-50">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow flex items-center gap-2 cursor-pointer">
          <FaComments />
          <span className="text-sm">Chat</span>
        </button>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <button onClick={scrollToTop} className="bg-yellow-400 hover:bg-yellow-500 text-white p-3 rounded-full shadow cursor-pointer">
          <FaArrowUp />
        </button>
      </div>
    </section>
  )
}

export default Advise
