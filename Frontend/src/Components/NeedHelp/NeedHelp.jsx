import backgroundImage from "../../assets/help.png";

export default function CallToAction() {
  return (
    <div 
      className="relative bg-[#510002] text-white flex justify-between items-center bg-cover bg-center ml-[80px] mb-[-70px]"
      style={{ 
        backgroundImage: `linear-gradient(rgba(128, 0, 0, 0.85), rgba(128, 0, 0, 0.85)), url(${backgroundImage})`,
        width: "1332px",
        height: "112px",
        paddingTop: "64px",
        paddingRight: "40px",
        paddingBottom: "64px",
        paddingLeft: "40px",
        borderRadius: "8px"
      }}
    >
      {/* CTA Content */}
      <div className="relative z-10 flex flex-col gap-2">
        <h2 className="text-4xl font-bold">Need Help? Call Us Today</h2>
      </div>

      {/* CTA Button */}
      <div className="relative z-10">
        <button className="bg-white text-red-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition-all">
          Let’s Talk
        </button>
      </div>
    </div>
  );
}