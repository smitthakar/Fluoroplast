import BG from "../../assets/BG.png";
import AvatarOne from "../../assets/AvatarOne.png";
import AvatarTwo from "../../assets/AvatarTwo.png";
import AvatarThree from "../../assets/AvatarThree.png";
import { FaArrowRight } from "react-icons/fa";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      image: BG,
      date: "Jan 21, 2024",
      category: "Oil & Gas Insights",
      title: "Importers achieve cost savings through the First Sale rule!",
      description:
        "Engineering plastics are high-performance materials with mechanical and thermal properties, used in automotive, aerospace, and electronics.",
      author: "Rakesh Sheth",
      authorImage: AvatarOne,
    },
    {
      id: 2,
      image: BG,
      date: "Jan 21, 2024",
      category: "Oil & Gas Insights",
      title: "Importers achieve cost savings through the First Sale rule!",
      description:
        "Engineering plastics are high-performance materials with mechanical and thermal properties, used in automotive, aerospace, and electronics.",
      author: "Rahul How",
      authorImage: AvatarTwo,
    },
    {
      id: 3,
      image: BG,
      date: "Jan 21, 2024",
      category: "Oil & Gas Insights",
      title: "Importers achieve cost savings through the First Sale rule!",
      description:
        "Engineering plastics are high-performance materials with mechanical and thermal properties, used in automotive, aerospace, and electronics.",
      author: "Nakul Dholakiya",
      authorImage: AvatarThree,
    },
  ];

  return (
    <div className="w-full h-[1139px] pt-[112px] px-[144px] gap-[40px]">
      {/* Section Title */}
      <div className="text-center mb-6">
      <p className="text-[#9D0A0E] font-['Red Hat Display'] font-extrabold text-[24px] leading-[33.6px] tracking-[6%] text-center uppercase">
  Blogs
</p>

<h2 className="font-['Red Hat Display'] font-semibold text-[60px] leading-[84px] tracking-[0] text-center text-[#0A0A0A] w-full h-[168px]">
  Insight, Industry Trends, Top <br /> News Headlines
</h2>

      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-10 w-full h-[667px]">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white h-[590px] shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group  "
          >
            {/* Blog Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[300px] object-cover"
            />

            {/* Bottom Section - Changes on Hover */}
            <div className="p-5 bg-white group-hover:bg-[#9D0A0E] transition-all duration-300 h-[343px] gap-[16px]">
              {/* Date & Category */}
              <p className="text-gray-500 text-sm group-hover:text-white transition-all duration-300 flex justify-between font-['Manrope']">
                {blog.date}{" "}
                <span className="text-red-500 font-medium group-hover:text-white font-['Manrope']">
                  {blog.category}
                </span>
              </p>

              {/* Title with Standing Line */}
              <h3 className="mt-2 font-['Manrope'] font-semibold text-[18px] leading-[25.2px] tracking-[0] text-black group-hover:text-white transition-all duration-300 relative pl-4">
                {/* Custom Rounded Vertical Border */}
                <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-red-600 group-hover:bg-white rounded-full font-['Manrope'] "></span>
                {blog.title}
              </h3>

              {/* Description */}
              <p className="mt-1 font-['Manrope'] font-semibold text-[16px] leading-[28px] tracking-[0] text-gray-600 group-hover:text-white transition-all duration-300 ">
                {blog.description}
              </p>

              {/* Author Info */}
              <div className="mt-5 flex items-center w-[326px] h-[40px] gap-[12px] ">
                <img
                  src={blog.authorImage}
                  alt={blog.author}
                  className="w-[40px] h-[40px] rounded-full mr-1"
                />
                <p className="text-gray-800  font-['Manrope'] font-medium group-hover:text-white transition-all duration-300 w-[412px] h-[28px] ">
                  {blog.author}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
      <button className="w-[200px] h-[50px] rounded-full border-transparent bg-gradient-to-r from-[#9D0A0E] to-[#F15922] text-white font-semibold
  transition-all duration-300 ease-in-out transform flex items-center justify-center relative group 
  hover:bg-white hover:bg-none hover:text-[#9D0A0E] hover:border-2 hover:border-[#9D0A0E]">
  
  <span className="absolute left-1/2 -translate-x-1/2">View All</span>

  {/* Right Arrow - Appears and Moves Right on Hover */}
  <span className="opacity-0 transform translate-x-0 transition-all duration-300 ease-in-out text-[#9D0A0E] 
      group-hover:opacity-100 group-hover:translate-x-2">
    <FaArrowRight className="ml-20" />
  </span>

</button>

</div>
    </div>
  );
}
