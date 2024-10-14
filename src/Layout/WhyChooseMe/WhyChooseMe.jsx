import qr from "../../../public/assets/instaqr.png";

const WhyWorkWithMeSection = () => {
  return (
    <div className="flex justify-center items-center bg-[#f9f0e7] py-16 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side: QR Code */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 p-4 bg-white rounded-lg shadow-xl">
            <img
              src={qr} // Replace with your actual QR code image path
              alt="QR Code"
              className="h-full w-full object-cover rounded-md"
            />
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-bold text-pgold">Why work with me?</h2>
          <ul className="space-y-4 text-lg font-medium">
            <li className="text-lgold flex items-start">
              <span className="text-dgold mr-2">•</span>
              Years of experience in ayurvedic practices
            </li>
            <li className="text-lgold flex items-start">
              <span className="text-dgold mr-2">•</span>
              Tailored solutions for lasting wellness
            </li>
            <li className="text-lgold flex items-start">
              <span className="text-dgold mr-2">•</span>
              Focus on unique body types and lifestyles
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyWorkWithMeSection;
