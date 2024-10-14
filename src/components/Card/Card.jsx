import styles from "@/components/Card/Card.module.css";
import { useNavigate } from "react-router-dom";

const Card = ({ icon, title, description }) => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/contact-us");
  };
  return (
    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900 relative">
      {/* Replacing top image with background color */}
      <div className="rounded-t-lg h-32 overflow-hidden bg-dgold"></div>

      {/* Icon in the center */}
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full bg-[#F9F0E7] overflow-hidden flex items-center justify-center">
        <img
          src={icon}
          alt={title}
          className="h-16" // Adjust the height if necessary
          style={{
            filter: "drop-shadow(5px 5px 50px #fff)", // Retaining the shadow from original code
          }}
        />
      </div>

      <div className="text-center mt-2 px-2">
        <h2 className="font-semibold">{title}</h2>
        <p className="text-gray-500">{description}</p>
      </div>

      {/* Learn More button at the bottom */}
      <div className="p-4 border-t mx-8 mt-2 flex justify-center bottom-0">
        <button className={styles.cardButton} onClick={handleGetStarted}>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
